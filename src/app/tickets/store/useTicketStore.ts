import { TicketPriority } from "@/lib/types/ticket";
import { create } from "zustand";

interface NewTicketStore {
  title: string;
  description: string;
  priority: TicketPriority;
  responsible: string;

  setField: (field: string, value: string) => void;
  resetTicket: () => void;
}

export const useNewTicketStore = create<NewTicketStore>((set) => ({
  title: "",
  description: "",
  priority: "Alta",
  responsible: "",

  setField: (field, value) => set({ [field]: value }),

  resetTicket: () =>
    set({
      title: "",
      description: "",
      priority: "Alta",
      responsible: "",
    }),
}));
