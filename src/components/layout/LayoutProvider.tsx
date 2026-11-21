import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSideBar";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

import { ReactNode } from "react";

export default function LayoutProvider({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex items-center justify-between p-2">
          <SidebarTrigger />
          <ThemeToggle />
        </div>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
