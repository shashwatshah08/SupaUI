import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function LoginForm1() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Sign in to your account
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Don&apos;t have an account?{" "}
            <Link
              className="font-medium text-indigo-600 hover:underline dark:text-indigo-400"
              href="#"
            >
              Register
            </Link>
          </p>
        </div>
        <form className="space-y-4">
          <div>
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Email address"
              required
              type="email"
            />
          </div>
          <div>
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="Password"
              required
              type="password"
            />
          </div>
          <Button className="w-full" type="submit">
            Sign in
          </Button>
        </form>
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          <Link
            className="font-medium text-indigo-600 hover:underline dark:text-indigo-400"
            href="#"
          >
            Forgot your password?
          </Link>
        </div>
      </div>
    </div>
  );
}

export const loginForm1CodeString = `
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function LoginForm1() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Sign in to your account
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Don&apos;t have an account?{" "}
            <Link
              className="font-medium text-indigo-600 hover:underline dark:text-indigo-400"
              href="#"
            >
              Register
            </Link>
          </p>
        </div>
        <form className="space-y-4">
          <div>
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Email address"
              required
              type="email"
            />
          </div>
          <div>
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="Password"
              required
              type="password"
            />
          </div>
          <Button className="w-full" type="submit">
            Sign in
          </Button>
        </form>
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          <Link
            className="font-medium text-indigo-600 hover:underline dark:text-indigo-400"
            href="#"
          >
            Forgot your password?
          </Link>
        </div>
      </div>
    </div>
  );
}
`;
