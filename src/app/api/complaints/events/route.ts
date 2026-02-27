import { ticketEmitter, type TicketEvent } from "@/lib/ticket-events";
import { auth } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const session = await auth();
  if (!session?.user) {
    return new Response("Unauthorized", { status: 401 });
  }

  const user = session.user as Record<string, unknown>;
  const tenantId = user.tenantId as string;

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      // Send initial ping
      controller.enqueue(encoder.encode("event: ping\ndata: connected\n\n"));

      const onTicket = (event: TicketEvent) => {
        // Only send events for the same tenant
        if (event.tenantId !== tenantId) return;
        try {
          controller.enqueue(
            encoder.encode(`event: ticket\ndata: ${JSON.stringify(event)}\n\n`)
          );
        } catch {
          // Client disconnected
          ticketEmitter.off("ticket", onTicket);
        }
      };

      ticketEmitter.on("ticket", onTicket);

      // Cleanup when client disconnects
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
