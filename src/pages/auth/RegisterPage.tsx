// src/components/Register.tsx
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useNavigate } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { useEffect } from "react";
import useApi from "@/hooks/useApi";
import { toast } from "react-toastify";
import { PasswordInput } from "@/components/PasswordInput";
import { registerSchema } from "@/schema/schema";

const Register = () => {
  const { apiRequest } = useApi();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      number: "+880",
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  useEffect(() => {
    const savedCredentials = JSON.parse(
      localStorage.getItem("userCredentials") || "null"
    );
    if (savedCredentials) {
      form.reset({
        name: savedCredentials.name,
        number: savedCredentials.number,
        email: savedCredentials.email,
        password: savedCredentials.password,
        rememberMe: true,
      });
    }
  }, [form]);

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    const { name, number, email, password, rememberMe } = values;

    const userData = {
      name,
      phone: number,
      email,
      password,
    };
    // data
    const { error } = await apiRequest("/api/v1/users", "POST", userData);

    if (error) {
      console.error("Registration failed:", error);
      toast.error(error.message || "Something went wrong");
      return;
    }

    toast.success("Successfully registered");
    setTimeout(() => {
      navigate("/login");
    }, 1000);

    if (rememberMe) {
      localStorage.setItem(
        "userCredentials",
        JSON.stringify({ name, number, email, password })
      );
    } else {
      localStorage.removeItem("userCredentials");
    }
  }

  return (
    <section>
      <MaxWidthWrapper className="flex flex-col justify-center items-center text-center py-6">
        <img
          className="w-32 h-14 md:w-40 object-cover my-4"
          src="/logo.svg"
          alt="logo"
        />
        <div className="space-y-2 mb-2 md:mb-3">
          <h2 className="text-xl md:text-3xl font-bold">
            Your Digital Adventure <br />
            Awaits
          </h2>
          <p className="text-foreground/75">
            Become a member to unlock advanced features.
          </p>
          <p className="text-xl font-medium">Signup</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-80 md:w-96">
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage className="text-left" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem className="w-80 md:w-96">
                  <FormControl>
                    <Input placeholder="+880 1776097768" {...field} />
                  </FormControl>
                  <FormMessage className="text-left" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-80 md:w-96">
                  <FormControl>
                    <Input placeholder="example@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage className="text-left" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-80 md:w-96">
                  <FormControl>
                    <PasswordInput placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage className="text-left" />
                </FormItem>
              )}
            />

            <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center space-y-1.5 md:space-y-0">
              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-2">
                    <Checkbox
                      className="mt-1 border-foreground/75 data-[state=checked]:bg-foreground/75 rounded-md"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />

                    <FormLabel className="font-normal text-xs">
                      Remember me.
                    </FormLabel>
                  </FormItem>
                )}
              />
              <div>
                <p className="text-xs leading-none mt-2">
                  Already have an account?{" "}
                  <Link to="/login" className="text-[#2F94FD] font-medium">
                    Log In
                  </Link>
                </p>
              </div>
            </div>

            <Button type="submit" className="w-48 md:w-60 bg-gradient-primary">
              Signup
            </Button>
          </form>
        </Form>

        <div>
          <div className="flex justify-center items-center space-x-2 my-4">
            <Separator /> <p className="text-nowrap text-sm"> Or login with</p>{" "}
            <Separator />
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon" className="border-none">
              <img
                src="/icons/facebook-colored.svg"
                alt="facebook icon"
                className="size-full"
              />
            </Button>
            <Button variant="outline" size="icon" className="border-none">
              <img
                src="/icons/google.svg"
                alt="google icon"
                className="size-full"
              />
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Register;
