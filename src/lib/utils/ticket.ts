import type { TicketPriority, TicketStatus } from "@/lib/types/ticket";

export const priorityStyles: Record<TicketPriority, string> = {
  Alta: "border-red-500/25 bg-red-500/10 text-red-600 dark:text-red-400",
  Média:
    "border-amber-500/25 bg-amber-500/10 text-amber-600 dark:text-amber-400",
  Baixa:
    "border-emerald-500/25 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
};

export const statusStyles: Record<TicketStatus, string> = {
  Aberto: "bg-red-500/10 text-red-600 dark:text-red-400",
  "Em andamento": "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  Aguardando: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  Resolvido: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  Fechado: "bg-muted text-muted-foreground",
};

export function formatTicketDate(date: string): string {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
  }).format(new Date(date));
}

export function getPaginationRange(
  page: number,
  pageSize: number,
  total: number,
): { start: number; end: number } {
  const start = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, total);
  return { start, end };
}

export function getTotalPages(total: number, pageSize: number): number {
  return Math.max(1, Math.ceil(total / pageSize));
}
