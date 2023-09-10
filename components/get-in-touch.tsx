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
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { Spinner } from "./spinner";

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
  note: z
    .string()
    .max(160, {
      message: "El mensaje no puede tener más de 160 caracteres",
    })
    .nonempty("Dejame un mensaje!"),
});

const GetInTouchForm = ({ closeModal }: { closeModal?: () => void }) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone_number: "",
      note: "",
    },
  });

  const sendMail = async (): Promise<any> => {
    const { name, phone_number, note } = form.getValues();
    setIsLoading(true);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "f0e850cb-9bdb-41bf-b35d-766651887559",
        name,
        phone_number,
        note,
      }),
    });
    console.log(process.env.MAIL_ACCESS_KEY);
    const data = await response.json();
    return data;
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    sendMail().then((response) => {
      setIsLoading(false);
      if (response.success) {
        //empty all values of the form
        form.reset();
        if (closeModal) closeModal();
        toast({
          description: "Su mensaje fue enviado. ✅",
        });
      } else {
        toast({
          description: "Su mensaje no pudo ser enviado. ❌",
        });
      }
    });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4 mb-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-blue-600 dark:text-blue-400">
                  Nombre
                </FormLabel>
                <FormControl>
                  <Input
                    className="dark:bg-slate-900"
                    placeholder="My Name"
                    {...field}
                  />
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
                <FormLabel className="text-blue-600 dark:text-blue-400">
                  Número de contacto</FormLabel>
                <FormControl>
                  <Input
                    className="dark:bg-slate-900"
                    placeholder="999 ..."
                    {...field}
                  />
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
                <FormLabel className="text-blue-600 dark:text-blue-400">
                  Nota</FormLabel>
                <FormControl>
                  <Textarea
                    className="dark:bg-slate-900 resize-none"
                    placeholder="..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          disabled={isLoading}
          className="inline-flex bg-blue-600 hover:bg-blue-700 transition-colors rounded-2xl text-white shadow-[0px_0px_30px_0px_#2563EB]"
          type="submit"
        >
          <span className="mr-2">Enviar</span>
          {isLoading ? (
            <Spinner />
          ) : (
            <i className="fa-solid fa-paper-plane"></i>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default GetInTouchForm;
