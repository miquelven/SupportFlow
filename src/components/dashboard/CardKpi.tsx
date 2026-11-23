import { Card, CardHeader, CardTitle } from "../ui/card";

const toneStyles = {
  red: {
    accent: "bg-red-500",
    border: "border-red-500/30",
    tint: "bg-red-500/5",
  },
  amber: {
    accent: "bg-amber-500",
    border: "border-amber-500/30",
    tint: "bg-amber-500/5",
  },
  green: {
    accent: "bg-emerald-500",
    border: "border-emerald-500/30",
    tint: "bg-emerald-500/5",
  },
  indigo: {
    accent: "bg-indigo-500",
    border: "border-indigo-500/30",
    tint: "bg-indigo-500/5",
  },
} as const;

export default function CardKpi({
  title,
  value,
  tone,
}: {
  title: string;
  value: string;
  tone: keyof typeof toneStyles;
}) {
  const colors = toneStyles[tone];

  return (
    <Card className={`relative h-44 border ${colors.border}`}>
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 ${colors.tint}`}
      />
      <div
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-1 ${colors.accent}`}
      />
      <CardHeader className="relative z-10 flex h-full flex-col justify-between">
        <CardTitle className="text-2xl font-semibold text-muted-foreground">
          {title}
        </CardTitle>
        <p className="text-5xl font-semibold ml-auto">{value}</p>
      </CardHeader>
    </Card>
  );
}
