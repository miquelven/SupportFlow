import { Button } from "@/components/ui/button";
import { PreferencesItemType } from "../types/preferencesType";
import PreferencesItem from "./PreferencesItem";

const preferencesItems: PreferencesItemType[] = [
  {
    title: "Tema",
    description: "Claro / Escuro / Sistema",
    values: [
      {
        label: "Claro",
        value: "light",
      },
      {
        label: "Escuro",
        value: "dark",
      },
      {
        label: "Sistema",
        value: "system",
      },
    ],
  },
  {
    title: "Notificações",
    description: "Ativadas / Desativadas",
    values: [
      {
        label: "Ativadas",
        value: "enable",
      },
      {
        label: "Desativadas",
        value: "disable",
      },
    ],
  },
  {
    title: "Idioma",
    description: "Português / Inglês",
    values: [
      {
        label: "Português",
        value: "pt",
      },
      {
        label: "Inglês",
        value: "en",
      },
    ],
  },
];

export default function Preferences() {
  return (
    <ul className=" flex flex-col gap-3">
      {preferencesItems.map((item) => (
        <li key={item.title}>
          <PreferencesItem {...item} />
        </li>
      ))}

      <Button className="ml-auto block">Salvar</Button>
    </ul>
  );
}
