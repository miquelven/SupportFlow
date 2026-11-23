"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Headset,
  Kanban,
  LayoutDashboard,
  Settings,
  Ticket,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Dashboard", href: "/", icon: LayoutDashboard },
  { title: "Chamados", href: "/tickets", icon: Ticket },
  { title: "Kanban", href: "/kanban", icon: Kanban },
  { title: "Configurações", href: "/settings", icon: Settings },
];
export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-2 px-1 py-1">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-xsxs[calc(var(--radius-sm)+2px)] bg-sidebar-primary text-sidebar-primary-foreground">
            <Headset className="size-4" />
          </div>
          <div className="flex min-w-0 flex-col group-data-[collapsible=icon]:hidden">
            <span className="font-heading text-xl font-semibold">
              SupportFlow
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="mt-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    isActive={pathname === item.href}
                    tooltip={item.title}
                    render={<Link href={item.href} />}
                    className="py-8"
                  >
                    <item.icon className="size-5!" />
                    <span className="text-lg font-medium">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-xsxsfull bg-sidebar-accent text-xs font-medium">
                US
              </div>
              <div className="flex min-w-0 flex-col group-data-[collapsible=icon]:hidden">
                <span className="truncate text-xs font-medium">Usuário</span>
                <span className="truncate text-xs text-sidebar-foreground/60">
                  usuario@supportflow.com
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
