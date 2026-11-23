import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const recentTickets = [
  {
    id: "TK-1042",
    subject: "Erro de login",
    priority: "Alta",
    status: "Aberto",
    assignee: "Ana",
    updatedAt: "há 5 min",
  },
  {
    id: "TK-1041",
    subject: "Pedido de acesso",
    priority: "Média",
    status: "Em andamento",
    assignee: "Carlos",
    updatedAt: "há 18 min",
  },
  {
    id: "TK-1040",
    subject: "Atualização de cadastro",
    priority: "Baixa",
    status: "Aguardando cliente",
    assignee: "Marina",
    updatedAt: "há 32 min",
  },
  {
    id: "TK-1039",
    subject: "Falha ao gerar relatório",
    priority: "Alta",
    status: "Em andamento",
    assignee: "Lucas",
    updatedAt: "há 47 min",
  },
  {
    id: "TK-1038",
    subject: "Dúvida sobre faturamento",
    priority: "Baixa",
    status: "Resolvido",
    assignee: "Ana",
    updatedAt: "há 1 h",
  },
];

const priorityStyles: Record<string, string> = {
  Alta: "border-red-500/25 bg-red-500/10 text-red-600 dark:text-red-400",
  Média: "border-amber-500/25 bg-amber-500/10 text-amber-600 dark:text-amber-400",
  Baixa: "border-emerald-500/25 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
};

const statusStyles: Record<string, string> = {
  Aberto: "bg-red-500/10 text-red-600 dark:text-red-400",
  "Em andamento": "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  "Aguardando cliente": "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  Resolvido: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
};

export default function RecentTickets() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          Chamados recentes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs text-muted-foreground">
                <th className="px-3 py-3 font-medium">Chamado</th>
                <th className="px-3 py-3 font-medium">Assunto</th>
                <th className="px-3 py-3 font-medium">Prioridade</th>
                <th className="px-3 py-3 font-medium">Status</th>
                <th className="px-3 py-3 font-medium">Responsável</th>
                <th className="px-3 py-3 text-right font-medium">
                  Atualizado
                </th>
              </tr>
            </thead>
            <tbody>
              {recentTickets.map((ticket) => (
                <tr
                  key={ticket.id}
                  className="border-b border-border/60 transition-colors last:border-0 hover:bg-muted/40"
                >
                  <td className="whitespace-nowrap px-3 py-4 font-medium text-primary">
                    {ticket.id}
                  </td>
                  <td className="px-3 py-4 font-medium">{ticket.subject}</td>
                  <td className="px-3 py-4">
                    <span
                      className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${priorityStyles[ticket.priority]}`}
                    >
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="px-3 py-4">
                    <span
                      className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[ticket.status]}`}
                    >
                      {ticket.status}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-muted-foreground">
                    {ticket.assignee}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-right text-muted-foreground">
                    {ticket.updatedAt}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
