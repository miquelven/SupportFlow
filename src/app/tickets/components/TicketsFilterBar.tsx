"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ticketPriorities, ticketStatuses } from "@/lib/data/mock-tickets";
import type { TicketFilters } from "@/lib/types/ticket";

interface TicketsFilterBarProps {
  filters: TicketFilters;
  onFiltersChange: (filters: TicketFilters) => void;
}

export default function TicketsFilterBar({
  filters,
  onFiltersChange,
}: TicketsFilterBarProps) {
  const update = (patch: Partial<TicketFilters>) =>
    onFiltersChange({ ...filters, ...patch });

  return (
    <div className="flex flex-wrap items-end flex-row-reverse gap-3 rounded-xslg border border-border/60 bg-card p-4 shadow-sm">
      <div className="relative min-w-[200px] flex-1">
        <Search className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Buscar..."
          value={filters.search}
          onChange={(event) => update({ search: event.target.value })}
          className="py-6 pl-8 text-base!"
        />
      </div>

      <div className="flex flex-wrap items-end gap-3">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-muted-foreground">
            Status
          </label>

          <Select
            value={filters.status}
            onValueChange={(value) =>
              update({ status: value as TicketFilters["status"] })
            }
          >
            <SelectTrigger className="h-9 w-[140px] text-sm">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Todos">Todos</SelectItem>
              {ticketStatuses.map((status) => (
                <SelectItem key={status} value={status}>
                  {status}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-wrap items-end gap-3">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-muted-foreground">
            Prioridade
          </label>

          <Select
            value={filters.priority}
            onValueChange={(value) =>
              update({ priority: value as TicketFilters["priority"] })
            }
          >
            <SelectTrigger className="h-9 w-[140px] text-sm">
              <SelectValue placeholder="Prioridade" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Todos">Todos</SelectItem>
              {ticketPriorities.map((priority) => (
                <SelectItem key={priority} value={priority}>
                  {priority}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
