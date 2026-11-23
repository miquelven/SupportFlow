"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ticketsByMonth = [
  { month: "Jan", tickets: 120 },
  { month: "Fev", tickets: 148 },
  { month: "Mar", tickets: 132 },
  { month: "Abr", tickets: 181 },
  { month: "Mai", tickets: 164 },
  { month: "Jun", tickets: 213 },
  { month: "Jul", tickets: 190 },
  { month: "Ago", tickets: 236 },
];

export default function TicketsTrendChart() {
  return (
    <div className="h-56 w-full" role="img" aria-label="Chamados por mês">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={ticketsByMonth}
          margin={{ top: 12, right: 16, bottom: 0, left: 0 }}
        >
          <CartesianGrid
            vertical={false}
            stroke="var(--border)"
            strokeDasharray="4 4"
          />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
            tickMargin={12}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
            tickMargin={8}
            width={36}
          />
          <Tooltip
            cursor={{ stroke: "var(--border)", strokeDasharray: "4 4" }}
            contentStyle={{
              backgroundColor: "var(--popover)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              color: "var(--popover-foreground)",
              boxShadow: "0 8px 24px rgb(0 0 0 / 12%)",
            }}
            labelStyle={{ color: "var(--popover-foreground)" }}
            formatter={(value) => [`${value ?? 0} chamados`, "Chamados"]}
          />
          <Line
            type="monotone"
            dataKey="tickets"
            name="Chamados"
            stroke="var(--indigo)"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 5, strokeWidth: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
