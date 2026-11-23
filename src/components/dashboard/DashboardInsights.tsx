import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TicketsTrendChart from "./TicketsTrendChart";

const priorities = [
  { label: "Alta", value: 36, color: "bg-red-500" },
  { label: "Média", value: 81, color: "bg-amber-500" },
  { label: "Baixa", value: 131, color: "bg-emerald-500" },
];
const maxPriorityValue = Math.max(...priorities.map(({ value }) => value));

export default function DashboardInsights() {
  return (
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-[1.7fr_1fr]">
      <Card className="min-h-68">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Chamados ao longo do tempo
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <TicketsTrendChart />
        </CardContent>
      </Card>

      <Card className="min-h-68">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Prioridades</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-4">
            {priorities.map((priority) => (
              <li key={priority.label} className="space-y-2">
                <div className="flex items-center gap-3 text-sm">
                  <span
                    aria-hidden="true"
                    className={`size-3 shrink-0 rounded-full ${priority.color}`}
                  />
                  <span className="font-medium">{priority.label}</span>
                  <span className="ml-auto rounded bg-muted px-2 py-0.5 font-medium tabular-nums">
                    {priority.value}
                  </span>
                </div>
                <div
                  role="progressbar"
                  aria-label={`Quantidade de chamados com prioridade ${priority.label.toLowerCase()}`}
                  aria-valuemin={0}
                  aria-valuemax={maxPriorityValue}
                  aria-valuenow={priority.value}
                  className="h-2.5 w-full overflow-hidden rounded-full bg-muted"
                >
                  <div
                    className={`h-full rounded-full transition-[width] duration-500 motion-reduce:transition-none ${priority.color}`}
                    style={{
                      width: `${(priority.value / maxPriorityValue) * 100}%`,
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
