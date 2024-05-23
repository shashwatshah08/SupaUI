import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";

export default function LoginForm2() {
  return (
    <div className="flex h-full items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Or{" "}
            <Link
              className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
              href="#"
            >
              start your 14-day free trial
            </Link>
          </p>
        </div>
        <form action="#" className="space-y-6" method="POST">
          <div>
            <Label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              htmlFor="email"
            >
              Email address
            </Label>
            <div className="mt-1">
              <Input
                autoComplete="email"
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-500"
                id="email"
                name="email"
                required
                type="email"
              />
            </div>
          </div>
          <div>
            <Label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              htmlFor="password"
            >
              Password
            </Label>
            <div className="mt-1">
              <Input
                autoComplete="current-password"
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-500"
                id="password"
                name="password"
                required
                type="password"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox
                className="h-4 w-4 rounded text-indigo-600 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-indigo-500"
                id="remember-me"
                name="remember-me"
              />
              <Label
                className="ml-2 block text-sm text-gray-900 dark:text-gray-300"
                htmlFor="remember-me"
              >
                Remember me
              </Label>
            </div>
            <div className="text-sm">
              <Link
                className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                href="#"
              >
                Forgot your password?
              </Link>
            </div>
          </div>
          <div>
            <Button
              className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-600"
              type="submit"
            >
              Sign in
            </Button>
          </div>
        </form>
        <div>
          <div className="mt-6 mb-6 grid grid-cols-3 items-center text-gray-400">
            <div className="col-span-1 border-t border-gray-300 dark:border-gray-700" />
            <div className="col-span-1 text-center text-sm">
              Or sign in with
            </div>
            <div className="col-span-1 border-t border-gray-300 dark:border-gray-700" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button
              className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-indigo-600"
              variant="outline"
            >
              <ImGithub className="mr-2 h-5 w-5 text-black" />
              GitHub
            </Button>
            <Button
              className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-indigo-600"
              variant="outline"
            >
              <FcGoogle className="mr-2 h-5 w-5" />
              Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export const loginForm2CodeString = `
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";

export default function LoginForm2() {
  return (
    <div className="flex h-full items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Or{" "}
            <Link
              className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
              href="#"
            >
              start your 14-day free trial
            </Link>
          </p>
        </div>
        <form action="#" className="space-y-6" method="POST">
          <div>
            <Label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              htmlFor="email"
            >
              Email address
            </Label>
            <div className="mt-1">
              <Input
                autoComplete="email"
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-500"
                id="email"
                name="email"
                required
                type="email"
              />
            </div>
          </div>
          <div>
            <Label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              htmlFor="password"
            >
              Password
            </Label>
            <div className="mt-1">
              <Input
                autoComplete="current-password"
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-500"
                id="password"
                name="password"
                required
                type="password"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox
                className="h-4 w-4 rounded text-indigo-600 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-indigo-500"
                id="remember-me"
                name="remember-me"
              />
              <Label
                className="ml-2 block text-sm text-gray-900 dark:text-gray-300"
                htmlFor="remember-me"
              >
                Remember me
              </Label>
            </div>
            <div className="text-sm">
              <Link
                className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                href="#"
              >
                Forgot your password?
              </Link>
            </div>
          </div>
          <div>
            <Button
              className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-600"
              type="submit"
            >
              Sign in
            </Button>
          </div>
        </form>
        <div>
          <div className="mt-6 mb-6 grid grid-cols-3 items-center text-gray-400">
            <div className="col-span-1 border-t border-gray-300 dark:border-gray-700" />
            <div className="col-span-1 text-center text-sm">
              Or sign in with
            </div>
            <div className="col-span-1 border-t border-gray-300 dark:border-gray-700" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button
              className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-indigo-600"
              variant="outline"
            >
              <ImGithub className="mr-2 h-5 w-5 text-black" />
              GitHub
            </Button>
            <Button
              className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-indigo-600"
              variant="outline"
            >
              <FcGoogle className="mr-2 h-5 w-5" />
              Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
`;
