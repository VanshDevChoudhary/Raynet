import { ticketEmitter, type TicketEvent } from "@/lib/ticket-events";
import { getPortalSession } from "@/lib/portal-session";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const session = await getPortalSession();
  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { tenantId, subscriberId } = session;
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(encoder.encode("event: ping\ndata: connected\n\n"));

      const onTicket = (event: TicketEvent) => {
        // Only send events for the same tenant (portal user sees their own tickets update)
        if (event.tenantId !== tenantId) return;
        try {
          controller.enqueue(
            encoder.encode(`event: ticket\ndata: ${JSON.stringify(event)}\n\n`)
          );
        } catch {
          ticketEmitter.off("ticket", onTicket);
        }
      };

      ticketEmitter.on("ticket", onTicket);

      request.signal.addEventListener("abort", () => {
        ticketEmitter.off("ticket", onTicket);
        try {
          controller.close();
        } catch {
          // Already closed
        }
      });
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}
