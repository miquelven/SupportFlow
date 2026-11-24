import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { mockTickets } from "@/lib/data/mock-tickets";
import {
  formatTicketDate,
  priorityStyles,
  statusStyles,
} from "@/lib/utils/ticket";
import type { Ticket } from "@/lib/types/ticket";

interface TicketsTableProps {
  tickets?: Ticket[];
}

export default function TicketsTable({
  tickets = mockTickets,
}: TicketsTableProps) {
  return (
    <div className="h-[400px] overflow-y-auto rounded-xslg border border-border/60 bg-card shadow-sm">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[120px] px-6 py-4 font-semibold text-foreground">
              ID
            </TableHead>
            <TableHead className="px-4 py-4 font-semibold text-foreground">
              Título
            </TableHead>
            <TableHead className="w-[140px] px-4 py-4 font-semibold text-foreground">
              Prioridade
            </TableHead>
            <TableHead className="w-[150px] px-4 py-4 font-semibold text-foreground">
              Status
            </TableHead>
            <TableHead className="w-[150px] px-4 py-4 font-semibold text-foreground">
              Responsável
            </TableHead>
            <TableHead className="w-[110px] px-4 py-4 text-right font-semibold text-foreground">
              Data
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {tickets.map((ticket) => (
            <TableRow key={ticket.id} className="cursor-pointer">
              <TableCell className="px-6 py-4 font-medium text-primary">
                {ticket.id}
              </TableCell>
              <TableCell className="px-4 py-4 font-medium">
                {ticket.title}
              </TableCell>
              <TableCell className="px-4 py-4">
                <Badge
                  variant="outline"
                  className={priorityStyles[ticket.priority]}
                >
                  {ticket.priority}
                </Badge>
              </TableCell>
              <TableCell className="px-4 py-4">
                <Badge className={statusStyles[ticket.status]}>
                  {ticket.status}
                </Badge>
              </TableCell>
              <TableCell className="px-4 py-4 text-muted-foreground">
                {ticket.assignee}
              </TableCell>
              <TableCell className="px-4 py-4 text-right text-muted-foreground">
                {formatTicketDate(ticket.createdAt)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
