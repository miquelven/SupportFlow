"use client";

import { Plus } from "lucide-react";
import LayoutContainer from "@/components/layout/LayoutContainer";
import { Button } from "@/components/ui/button";
import TicketsFilterBar from "./components/TicketsFilterBar";
import TicketsTable from "./components/TicketsTable";
import TicketsPagination from "./components/TicketsPagination";
import { mockTickets, mockTotalTickets } from "@/lib/data/mock-tickets";
import type { Ticket, TicketFilters } from "@/lib/types/ticket";
import { useMemo, useState } from "react";

const PAGE_SIZE = 6;

const defaultFilters: TicketFilters = {
  search: "",
  status: "Todos",
  priority: "Todos",
};

function filterTickets(tickets: Ticket[], filters: TicketFilters): Ticket[] {
  return tickets.filter((ticket) => {
    const searchMatch =
      filters.search === "" ||
      ticket.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      ticket.id.toLowerCase().includes(filters.search.toLowerCase());

    const statusMatch =
      filters.status === "Todos" || ticket.status === filters.status;
    const priorityMatch =
      filters.priority === "Todos" || ticket.priority === filters.priority;

    return searchMatch && statusMatch && priorityMatch;
  });
}

export default function Tickets() {
  const [filters, setFilters] = useState<TicketFilters>(defaultFilters);
  const [page, setPage] = useState(1);

  const filteredTickets = useMemo(
    () => filterTickets(mockTickets, filters),
    [filters],
  );

  const pagedTickets = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredTickets.slice(start, start + PAGE_SIZE);
  }, [filteredTickets, page]);

  const total = filteredTickets.length > 0 ? mockTotalTickets : 0;

  const handleFiltersChange = (nextFilters: TicketFilters) => {
    setFilters(nextFilters);
    setPage(1);
  };

  return (
    <LayoutContainer>
      <div className="mb-8 flex items-start justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Chamados</h1>
          <p className="text-lg font-medium text-muted-foreground">
            Gerencie e acompanhe solicitações
          </p>
        </div>
        <Button size="lg" className="h-11 px-6 text-base">
          <Plus />
          Novo chamado
        </Button>
      </div>

      <div className="space-y-6">
        <TicketsFilterBar
          filters={filters}
          onFiltersChange={handleFiltersChange}
        />

        <TicketsTable tickets={pagedTickets} />

        <TicketsPagination
          page={page}
          pageSize={PAGE_SIZE}
          total={total}
          onPageChange={setPage}
        />
      </div>
    </LayoutContainer>
  );
}
