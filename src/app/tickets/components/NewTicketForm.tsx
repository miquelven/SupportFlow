"use client";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ticketPriorities } from "@/lib/data/mock-tickets";
import {
  newTicketDefaultValues,
  newTicketSchema,
  NewTicketSchema,
} from "../types/newTicketSchema";
import { Field, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { useNewTicketStore } from "../store/useTicketStore";

export default function NewTicketForm() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<NewTicketSchema>({
    resolver: zodResolver(newTicketSchema),
    defaultValues: newTicketDefaultValues,
  });

  const setField = useNewTicketStore((state) => state.setField);

  const onSubmit = (data: NewTicketSchema) => {
    console.log("Salvando ticket:", data);
    reset(data);
  };

  return (
    <Card className="w-full flex-2">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <CardContent className="space-y-6 pt-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-1">
            <div className="space-y-1.5">
              <Label htmlFor="title" className="text-sm">
                Título
              </Label>
              <Input
                id="title"
                placeholder="Ex: Erro ao realizar login"
                aria-invalid={!!errors.title}
                className="h-11 text-sm!"
                {...register("title", {
                  onChange: (e) => setField("title", e.target.value),
                })}
              />
              {errors.title && (
                <p className="text-xs text-destructive">
                  {errors.title.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="priority" className="text-sm">
                Prioridade
              </Label>

              <Controller
                name="priority"
                control={control}
                render={({}) => (
                  <Controller
                    name="priority"
                    control={control}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={(value) => {
                          field.onChange(value);
                          setField("priority", value!);
                        }}
                      >
                        <SelectTrigger
                          id="priority"
                          className="h-11 w-full text-sm"
                        >
                          <SelectValue placeholder="Selecione a prioridade" />
                        </SelectTrigger>

                        <SelectContent>
                          {ticketPriorities.map((priority) => (
                            <SelectItem key={priority} value={priority}>
                              {priority}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                )}
              />

              {errors.priority && (
                <p className="text-xs text-destructive">
                  {errors.priority.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="name" className="text-sm">
                Responsável
              </Label>
              <Input
                id="responsible"
                placeholder="Ex: João Silva"
                aria-invalid={!!errors.responsible}
                className="h-11 text-sm!"
                {...register("responsible", {
                  onChange: (e) => setField("responsible", e.target.value),
                })}
              />
              {errors.responsible && (
                <p className="text-xs text-destructive">
                  {errors.responsible.message}
                </p>
              )}
            </div>

            <Field>
              <FieldLabel htmlFor="description" className="text-sm">
                Descrição do chamado
              </FieldLabel>
              <Textarea
                id="description"
                {...register("description")}
                placeholder="Descrição do chamado"
                className=" text-sm!"
                {...register("description", {
                  onChange: (e) => setField("description", e.target.value),
                })}
              />
              {errors.description && (
                <p className="text-xs text-destructive">
                  {errors.description.message}
                </p>
              )}
            </Field>
          </div>
        </CardContent>

        <CardFooter className=" pt-4">
          <Button
            type="submit"
            disabled={!isDirty || isSubmitting}
            className="ml-auto block w-20 h-9"
          >
            {isSubmitting ? "..." : "Salvar"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
