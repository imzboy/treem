"use client";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"


type LoginFormSchema = {
  username: string;
  password: string;
}

const defaultValues: LoginFormSchema = {
  username: "",
  password: "",
};

export default function ProfileForm() {

  const router = useRouter();

  const form = useForm<LoginFormSchema>({
    defaultValues,
  });

  function onSubmit(values: LoginFormSchema) {
    // redirect to dashboard
    router.push("/dashboard");
  }

  // AI! (login form was wrapped and cenetered by ai)
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full sm:w-[420px] md:w-[500px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="username" {...field} />
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
                    <FormControl>
                      <Input placeholder="*****" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <CardFooter className="flex justify-end">
                <Button type="submit">Submit</Button>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

