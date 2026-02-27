"use client";

import { useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import type { TicketEvent } from "@/lib/ticket-events";

export function useTicketEvents(endpoint: string) {
  const router = useRouter();
  const retryTimeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const connect = useCallback(() => {
    const eventSource = new EventSource(endpoint);

    eventSource.addEventListener("ticket", (e) => {
      try {
        const event: TicketEvent = JSON.parse(e.data);

        if (event.type === "TICKET_CREATED") {
          toast.info(`New complaint: ${event.ticket.subject}`, {
            description: event.ticket.subscriberName
              ? `by ${event.ticket.subscriberName}`
              : undefined,
            duration: 6000,
          });
        } else if (event.type === "TICKET_UPDATED") {
          toast.info(
            `Ticket ${event.ticket.ticketNumber} updated — ${event.ticket.status.replace("_", " ")}`,
            { duration: 4000 }
          );
        } else if (event.type === "TICKET_DELETED") {
          toast.info("A ticket was deleted", { duration: 3000 });
        }

        // Refresh server data
        router.refresh();
      } catch {
        // Ignore parse errors
      }
    });

    eventSource.onerror = () => {
      eventSource.close();
      // Reconnect after 3 seconds
      retryTimeoutRef.current = setTimeout(connect, 3000);
    };

    return eventSource;
  }, [endpoint, router]);

  useEffect(() => {
    const eventSource = connect();

    return () => {
      eventSource.close();
      if (retryTimeoutRef.current) clearTimeout(retryTimeoutRef.current);
    };
  }, [connect]);
}
