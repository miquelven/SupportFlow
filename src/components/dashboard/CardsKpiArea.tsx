import CardKpi from "./CardKpi";

const data = [
  {
    title: "Aberto",
    value: "456",
    tone: "red",
  },
  {
    title: "Em andamento",
    value: "789",
    tone: "amber",
  },
  {
    title: "Fechado",
    value: "101",
    tone: "green",
  },
  {
    title: "Total",
    value: "123",
    tone: "indigo",
  },
] as const;

export default function CardKpiArea() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {data.map((item) => (
        <CardKpi
          key={item.title}
          title={item.title}
          value={item.value}
          tone={item.tone}
        />
      ))}
    </div>
  );
}
