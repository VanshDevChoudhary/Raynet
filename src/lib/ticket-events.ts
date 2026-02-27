import { EventEmitter } from "events";

export interface TicketEvent {
  type: "TICKET_CREATED" | "TICKET_UPDATED" | "TICKET_DELETED";
  tenantId: string;
  ticket: {
    id: string;
    ticketNumber: string;
    subject: string;
    category: string;
    priority: string;
    status: string;
    subscriberName?: string;
    createdAt: string;
  };
}

// Global singleton — survives HMR in dev
const globalForEvents = globalThis as unknown as {
  ticketEmitter?: EventEmitter;
};

export const ticketEmitter =
  globalForEvents.ticketEmitter ?? new EventEmitter();
globalForEvents.ticketEmitter = ticketEmitter;

// Allow many listeners (one per connected SSE client)
ticketEmitter.setMaxListeners(100);
