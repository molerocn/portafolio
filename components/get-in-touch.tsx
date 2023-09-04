"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "./ui/use-toast";

const numberErrorMessage = "El número debe tener 9 dígitos";
const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
const formSchema = z.object({
  name: z.string().nonempty("El nombre es requerido"),
  phone_number: z
    .string({
      required_error: "El número es requerido",
      invalid_type_error: "Debe ser un número",
    })
    .regex(phoneRegex, "Número inválido")
    .min(9, numberErrorMessage)
    .max(9, numberErrorMessage),
  note: z.string().nonempty("Dejame un mensaje!"),
});

const GetInTouchForm = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone_number: "",
      note: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { name, phone_number, note } = values;
    console.log(name);
    toast({
      description: "Su mensaje fue enviado. ✅",
    });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4 mb-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="My Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Número de contacto</FormLabel>
                <FormControl>
                  <Input placeholder="999 ..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="note"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nota</FormLabel>
                <FormControl>
                  <Input placeholder="..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Enviar</Button>
      </form>
    </Form>
  );
};

export default GetInTouchForm;
