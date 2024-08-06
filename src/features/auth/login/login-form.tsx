import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PATHS } from "@/router/paths";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { loginFormSchema } from "./login-form-validation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export type LoginFormType = z.infer<typeof loginFormSchema>;

interface Props {
  onSubmit: (values: LoginFormType) => Promise<void>;
}

export const LoginForm: React.FC<Props> = ({ onSubmit }) => {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="maurolnl"
                      required
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="test@example.com"
                      required
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your private email to register your account.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between flex-row items-center">
                  <FormLabel>Password</FormLabel>
                  <Link
                    to={PATHS.auth.forgotPassword}
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <FormControl>
                  <div className="flex flex-row space-x-2">
                    <Input
                      type="password"
                      placeholder="Password"
                      required
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button type="button" variant="outline" className="w-full">
            Login with Google
          </Button>
        </div>
      </form>
    </Form>
  );
};
