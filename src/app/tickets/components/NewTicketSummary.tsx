"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { UserRound, FileText, Flag, Ticket } from "lucide-react";
import { useNewTicketStore } from "../store/useTicketStore";

const priorityStyles = {
  Baixa: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  Média: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
  Alta: "bg-orange-500/10 text-orange-600 border-orange-500/20",
  Urgente: "bg-red-500/10 text-red-600 border-red-500/20",
};

export default function NewTicketSummary() {
  const { title, description, priority, responsible } = useNewTicketStore();

  return (
    <Card className="w-full flex-1">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Pré-visualização
            </p>
            <CardTitle className="text-lg">Resumo do chamado</CardTitle>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-xs bg-secondary">
            <Ticket className="h-5 w-5" />
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground">TÍTULO</p>
          <h3 className="text-base font-semibold wrap-break-word">
            {title || (
              <span className="font-normal text-muted-foreground">
                Título do chamado...
              </span>
            )}
          </h3>
        </div>

        <Separator />

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Flag className="h-4 w-4" />
              <p className="text-xs font-medium">Prioridade</p>
            </div>

            <Badge variant="outline" className={priorityStyles[priority] ?? ""}>
              {priority}
            </Badge>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <UserRound className="h-4 w-4" />
              <p className="text-xs font-medium">Responsável</p>
            </div>

            <p className="text-sm font-medium wrap-break-word">
              {responsible || (
                <span className="font-normal text-muted-foreground">
                  Não definido
                </span>
              )}
            </p>
          </div>
        </div>

        <Separator />

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <FileText className="h-4 w-4" />
            <p className="text-xs font-medium">DESCRIÇÃO</p>
          </div>

          <p className="text-sm leading-relaxed whitespace-pre-wrap wrap-break-word text-muted-foreground">
            {description || "A descrição do chamado aparecerá aqui..."}
          </p>
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Status inicial</span>
          <Badge variant="secondary">Aberto</Badge>
        </div>
      </CardContent>
    </Card>
  );
}
