"use server";

import { revalidatePath } from "next/cache";
import { requireAuthorized } from "@/lib/session";
import { createTicketSchema, updateTicketSchema, addCommentSchema } from "@/lib/validations/ticket.schema";
import { ticketService } from "@/services/ticket.service";
import { safeErrorMessage, type ActionResponse } from "@/lib/types";
import { ticketEmitter, type TicketEvent } from "@/lib/ticket-events";

export async function createTicket(formData: unknown): Promise<ActionResponse> {
  try {
    const { tenantId } = await requireAuthorized("complaints", "create");
    const validated = createTicketSchema.safeParse(formData);
    if (!validated.success) {
      return { success: false, error: validated.error.errors[0]?.message ?? "Invalid input" };
    }
    const ticket = await ticketService.create(tenantId, validated.data);

    ticketEmitter.emit("ticket", {
      type: "TICKET_CREATED",
      tenantId,
      ticket: {
        id: ticket.id,
        ticketNumber: ticket.ticketNumber,
        subject: ticket.subject,
        category: ticket.category,
        priority: ticket.priority,
        status: ticket.status,
        subscriberName: ticket.subscriber?.name,
        createdAt: ticket.createdAt.toISOString(),
      },
    } satisfies TicketEvent);

    revalidatePath("/complaints");
    return { success: true, data: ticket };
  } catch (error) {
    return { success: false, error: safeErrorMessage(error, "Failed to create ticket") };
  }
}

export async function updateTicket(ticketId: string, formData: unknown): Promise<ActionResponse> {
  try {
    const { tenantId } = await requireAuthorized("complaints", "edit");
    const validated = updateTicketSchema.safeParse(formData);
    if (!validated.success) {
      return { success: false, error: validated.error.errors[0]?.message ?? "Invalid input" };
    }
    const ticket = await ticketService.update(tenantId, ticketId, validated.data);

    ticketEmitter.emit("ticket", {
      type: "TICKET_UPDATED",
      tenantId,
      ticket: {
        id: ticket.id,
        ticketNumber: ticket.ticketNumber,
        subject: ticket.subject,
        category: ticket.category,
        priority: ticket.priority,
        status: ticket.status,
        createdAt: ticket.createdAt.toISOString(),
      },
    } satisfies TicketEvent);

    revalidatePath("/complaints");
    revalidatePath(`/complaints/${ticketId}`);
    return { success: true, data: ticket };
  } catch (error) {
    return { success: false, error: safeErrorMessage(error, "Failed to update ticket") };
  }
}

export async function addComment(ticketId: string, formData: unknown): Promise<ActionResponse> {
  try {
    const { tenantId, user } = await requireAuthorized("complaints", "edit");
    const validated = addCommentSchema.safeParse(formData);
    if (!validated.success) {
      return { success: false, error: validated.error.errors[0]?.message ?? "Invalid input" };
    }
    const comment = await ticketService.addComment(tenantId, ticketId, user.id, validated.data);
    revalidatePath(`/complaints/${ticketId}`);
    return { success: true, data: comment };
  } catch (error) {
    return { success: false, error: safeErrorMessage(error, "Failed to add comment") };
  }
}

export async function deleteTicket(ticketId: string): Promise<ActionResponse> {
  try {
    const { tenantId } = await requireAuthorized("complaints", "delete");
    await ticketService.delete(tenantId, ticketId);

    ticketEmitter.emit("ticket", {
      type: "TICKET_DELETED",
      tenantId,
      ticket: {
        id: ticketId,
        ticketNumber: "",
        subject: "",
        category: "",
        priority: "",
        status: "",
        createdAt: new Date().toISOString(),
      },
    } satisfies TicketEvent);

    revalidatePath("/complaints");
    return { success: true };
  } catch (error) {
    return { success: false, error: safeErrorMessage(error, "Failed to delete ticket") };
  }
}
