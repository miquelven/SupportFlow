import { z } from "zod";

export const profileSchema = z.object({
  name: z
    .string()
    .min(2, "O nome deve ter pelo menos 2 caracteres.")
    .max(100, "O nome deve ter no máximo 100 caracteres."),
  email: z.string().email("Informe um e-mail válido."),
  role: z
    .string()
    .min(2, "O cargo deve ter pelo menos 2 caracteres.")
    .max(100, "O cargo deve ter no máximo 100 caracteres."),
});

export type ProfileSchema = z.infer<typeof profileSchema>;

export const profileDefaultValues: ProfileSchema = {
  name: "Usuário Demo",
  email: "usuario@supportflow.com",
  role: "Administrador",
};
