export type TicketPriority = "Alta" | "Média" | "Baixa";

export type TicketStatus =
  | "Aberto"
  | "Em andamento"
  | "Aguardando"
  | "Resolvido"
  | "Fechado";

export interface Ticket {
  id: string;
  title: string;
  priority: TicketPriority;
  status: TicketStatus;
  assignee: string;
  createdAt: string;
  updatedAt: string;
}

export interface TicketFilters {
  search: string;
  status: TicketStatus | "Todos";
  priority: TicketPriority | "Todos";
}

export interface TicketPagination {
  page: number;
  pageSize: number;
  total: number;
}
