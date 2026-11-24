import type {
  Ticket,
  TicketCategory,
  TicketPriority,
  TicketStatus,
} from "@/lib/types/ticket";

export const ticketPriorities: TicketPriority[] = ["Alta", "Média", "Baixa"];

export const ticketStatuses: TicketStatus[] = [
  "Aberto",
  "Em andamento",
  "Aguardando",
  "Resolvido",
  "Fechado",
];

export const ticketCategories: TicketCategory[] = [
  "Suporte técnico",
  "Acesso",
  "Faturamento",
  "Cadastro",
  "Outros",
];

export const mockTickets: Ticket[] = [
  {
    id: "TK-1042",
    title: "Erro ao realizar login",
    priority: "Alta",
    status: "Aberto",
    category: "Acesso",
    assignee: "Ana Souza",
    createdAt: "2026-11-19",
    updatedAt: "2026-11-19",
  },
  {
    id: "TK-1041",
    title: "Solicitar acesso",
    priority: "Média",
    status: "Em andamento",
    category: "Acesso",
    assignee: "Carlos",
    createdAt: "2026-11-18",
    updatedAt: "2026-11-18",
  },
  {
    id: "TK-1040",
    title: "Falha no checkout",
    priority: "Alta",
    status: "Aguardando",
    category: "Faturamento",
    assignee: "Marina",
    createdAt: "2026-11-18",
    updatedAt: "2026-11-18",
  },
  {
    id: "TK-1039",
    title: "Atualizar cadastro",
    priority: "Baixa",
    status: "Resolvido",
    category: "Cadastro",
    assignee: "João",
    createdAt: "2026-11-17",
    updatedAt: "2026-11-17",
  },
  {
    id: "TK-1038",
    title: "Sistema lento",
    priority: "Média",
    status: "Aberto",
    category: "Suporte técnico",
    assignee: "Ana Souza",
    createdAt: "2026-11-17",
    updatedAt: "2026-11-17",
  },
  {
    id: "TK-1037",
    title: "Relatório não gera",
    priority: "Baixa",
    status: "Resolvido",
    category: "Outros",
    assignee: "Carlos",
    createdAt: "2026-11-16",
    updatedAt: "2026-11-16",
  },
  {
    id: "TK-1036",
    title: "Dúvida sobre faturamento",
    priority: "Média",
    status: "Fechado",
    category: "Faturamento",
    assignee: "Marina",
    createdAt: "2026-11-15",
    updatedAt: "2026-11-15",
  },
  {
    id: "TK-1035",
    title: "Reset de senha",
    priority: "Alta",
    status: "Em andamento",
    category: "Acesso",
    assignee: "João",
    createdAt: "2026-11-15",
    updatedAt: "2026-11-15",
  },
  {
    id: "TK-1034",
    title: "Ajuste de perfil",
    priority: "Baixa",
    status: "Aberto",
    category: "Cadastro",
    assignee: "Ana Souza",
    createdAt: "2026-11-14",
    updatedAt: "2026-11-14",
  },
];

export const mockTotalTickets = 248;
