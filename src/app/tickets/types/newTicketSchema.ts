import { z } from "zod";

export const newTicketSchema = z.object({
  title: z
    .string()
    .min(2, "O título deve ter pelo menos 2 caracteres.")
    .max(100, "O título deve ter no máximo 100 caracteres."),
  priority: z.string().describe("A prioridade do chamado"),
  responsible: z.string().describe("O nome do responsável pelo chamado"),
  description: z.string().describe("A descrição do chamado"),
});

export type NewTicketSchema = z.infer<typeof newTicketSchema>;

export const newTicketDefaultValues: NewTicketSchema = {
  title: "",
  priority: "Alta",
  responsible: "",
  description: "",
};
