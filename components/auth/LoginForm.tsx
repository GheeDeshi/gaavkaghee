"use client";

import React, { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoginSchema } from "@/schemas";
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
import { Mail } from "lucide-react";
import Link from "next/link";
import { signIn } from "@/actions/auth";
import { useToast } from "../ui/use-toast";

const LoginForm = () => {
    const { toast } = useToast()
  const [pending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    toast({
        variant: "error",
        description: "Something went wrong with your login. Please try again"
    })
    const formdata = new FormData();
    formdata.append("email", values.email);
    formdata.append("password", values.password);
    startTransition(async () => {
        toast({
            variant: "error",
            description: "Something went wrong with your login. Please try again"
        })
      try {
        await signIn(formdata);
        toast({
            variant: "error",
            description: "Something went wrong with your login. Please try again"
        })
      } catch (error: any) {
        if(error.status === 400) {
            toast({
                variant: "error",
                description: error.error
            })
        }else {
            toast({
                variant: "error",
                description: "Something went wrong with your login. Please try again"
            })
        }
      }
    });
  };

  return (
    <div className="flex flex-col px-8  gap-4 max-w-lg w-full mx-auto mt-20 mb-10">
      <div className="">
        <h1 className="text-start md:text-3xl text-2xl font-bold">
          Welcome Back
        </h1>
        <p className="text-gray-500 mt-2 font-medium">
          Don&#39;t have an account?
          <Link href="/register" className="ml-1 text-blue-600 font-semibold">
            Sign up
          </Link>
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full shadow p-4 rounded"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl className="relative">
                  <Input placeholder="john@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl className="relative">
                  <Input
                    type="password"
                    placeholder="***************"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={pending}
            type="submit"
            variant="primary"
            className="w-full"
          >
            Sign In
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
