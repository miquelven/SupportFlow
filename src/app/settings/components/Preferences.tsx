"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
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

const initialValues = Object.fromEntries(
  preferencesItems.map(({ title, values }) => [title, values[0]?.value ?? ""]),
) as Record<string, string>;

export default function Preferences() {
  const [values, setValues] = useState(initialValues);
  const [savedValues, setSavedValues] = useState(initialValues);
  const isDirty = preferencesItems.some(
    ({ title }) => values[title] !== savedValues[title],
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSavedValues({ ...values });
  };

  return (
    <Card className="w-full">
      <form onSubmit={handleSubmit}>
        <CardContent className="pt-6">
          <ul className="flex flex-col gap-3">
            {preferencesItems.map((item) => (
              <li key={item.title}>
                <PreferencesItem
                  {...item}
                  value={values[item.title]}
                  onValueChange={(value) => {
                    if (value !== null) {
                      setValues((current) => ({
                        ...current,
                        [item.title]: value,
                      }));
                    }
                  }}
                />
              </li>
            ))}
          </ul>
        </CardContent>

        <CardFooter className="pt-4">
          <Button
            type="submit"
            disabled={!isDirty}
            className="ml-auto block h-9 w-20"
          >
            Salvar
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
