import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";

export default function PricingSection1() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <Tabs className="w-full max-w-4xl mx-auto" defaultValue="starter">
          <TabsList className="grid grid-cols-3 gap-4">
            <TabsTrigger value="starter">Starter</TabsTrigger>
            <TabsTrigger value="pro">Pro</TabsTrigger>
            <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
          </TabsList>
          <TabsContent value="starter">
            <Card className="p-6 md:p-8">
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <CardDescription>
                  Perfect for individuals and small teams.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-4xl font-bold">$9</h3>
                  <p className="text-gray-500 dark:text-gray-400">per month</p>
                </div>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                    1 user
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                    5 GB storage
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                    Basic analytics
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button>Get Started</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="pro">
            <Card className="p-6 md:p-8">
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription>
                  Ideal for growing teams and small businesses.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-4xl font-bold">$29</h3>
                  <p className="text-gray-500 dark:text-gray-400">per month</p>
                </div>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                    5 users
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                    50 GB storage
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                    Advanced analytics
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                    Custom branding
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button>Get Started</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="enterprise">
            <Card className="p-6 md:p-8">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>
                  Tailored for large teams and organizations.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-4xl font-bold">Custom</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Contact us for pricing
                  </p>
                </div>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                    Unlimited users
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                    Unlimited storage
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                    Enterprise-grade analytics
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                    Dedicated support
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                    Custom integrations
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button>Contact Sales</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export const pricingSection1CodeString = ``;
