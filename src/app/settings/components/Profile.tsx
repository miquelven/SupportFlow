"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Camera } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  profileDefaultValues,
  profileSchema,
  type ProfileSchema,
} from "../types/profileSchema";

export default function Profile() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [avatarUrl, setAvatarUrl] = useState<string>(
    "https://github.com/shadcn.png",
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<ProfileSchema>({
    resolver: zodResolver(profileSchema),
    defaultValues: profileDefaultValues,
  });

  const onSubmit = (data: ProfileSchema) => {
    console.log("Salvando perfil:", data);
    reset(data);
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setAvatarUrl(url);
    e.target.value = "";
  };

  return (
    <Card className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <CardContent className="space-y-6 pt-6">
          <div className="flex items-center gap-4">
            <div
              className="relative group cursor-pointer"
              onClick={handleAvatarClick}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/gif"
                className="hidden"
                onChange={handleFileChange}
              />
              <Avatar className="size-24 ring-2 ring-border transition-opacity group-hover:opacity-80">
                <AvatarImage src={avatarUrl} alt="Foto de perfil" />
                <AvatarFallback className="text-xl">UD</AvatarFallback>
              </Avatar>
              <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                <Camera className="size-6 text-white" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Foto de perfil</p>
              <p className="text-sm text-muted-foreground">
                Clique na imagem para alterar.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="name" className="text-sm">
                Nome
              </Label>
              <Input
                id="name"
                placeholder="Seu nome completo"
                aria-invalid={!!errors.name}
                className="h-11 text-base"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-xs text-destructive">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-sm">
                E-mail
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="voce@email.com"
                aria-invalid={!!errors.email}
                className="h-11 text-base"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-xs text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="role" className="text-sm">
                Cargo
              </Label>
              <Input
                id="role"
                placeholder="Seu cargo"
                aria-invalid={!!errors.role}
                className="h-11 text-base"
                {...register("role")}
              />
              {errors.role && (
                <p className="text-xs text-destructive">
                  {errors.role.message}
                </p>
              )}
            </div>
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
