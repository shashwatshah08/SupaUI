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
import { IoCheckmarkSharp } from "react-icons/io5";

const plans = [
  {
    value: "starter",
    title: "Starter",
    description: "Perfect for individuals and small teams.",
    price: "$9",
    features: ["1 user", "5 GB storage", "Basic analytics"],
    buttonText: "Get Started",
  },
  {
    value: "pro",
    title: "Pro",
    description: "Ideal for growing teams and small businesses.",
    price: "$29",
    features: [
      "5 users",
      "50 GB storage",
      "Advanced analytics",
      "Custom branding",
    ],
    buttonText: "Get Started",
  },
  {
    value: "enterprise",
    title: "Enterprise",
    description: "Tailored for large teams and organizations.",
    price: "Custom",
    features: [
      "Unlimited users",
      "Unlimited storage",
      "Enterprise-grade analytics",
      "Dedicated support",
      "Custom integrations",
    ],
    buttonText: "Contact Sales",
  },
];

export default function PricingSection1() {
  return (
    <div className="w-full h-full py-12 lg:py-10 bg-gray-100 dark:bg-gray-800 overflow-auto">
      <div className="container px-4 md:px-6">
        <Tabs className="w-full max-w-4xl mx-auto" defaultValue="starter">
          <TabsList className="grid grid-cols-3 gap-4">
            {plans.map((plan) => (
              <TabsTrigger key={plan.value} value={plan.value}>
                {plan.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {plans.map((plan) => (
            <TabsContent key={plan.value} value={plan.value}>
              <Card className="p-6 md:p-8">
                <CardHeader>
                  <CardTitle>{plan.title}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-4xl font-bold">{plan.price}</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      per month
                    </p>
                  </div>
                  <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                    {plan.features.map((feature, index) => (
                      <li key={index}>
                        <IoCheckmarkSharp className="mr-2 inline-block h-4 w-4" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button>{plan.buttonText}</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

export const pricingSection1CodeString = `
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
import { IoCheckmarkSharp } from "react-icons/io5";

const plans = [
  {
    value: "starter",
    title: "Starter",
    description: "Perfect for individuals and small teams.",
    price: "$9",
    features: ["1 user", "5 GB storage", "Basic analytics"],
    buttonText: "Get Started",
  },
  {
    value: "pro",
    title: "Pro",
    description: "Ideal for growing teams and small businesses.",
    price: "$29",
    features: [
      "5 users",
      "50 GB storage",
      "Advanced analytics",
      "Custom branding",
    ],
    buttonText: "Get Started",
  },
  {
    value: "enterprise",
    title: "Enterprise",
    description: "Tailored for large teams and organizations.",
    price: "Custom",
    features: [
      "Unlimited users",
      "Unlimited storage",
      "Enterprise-grade analytics",
      "Dedicated support",
      "Custom integrations",
    ],
    buttonText: "Contact Sales",
  },
];

export default function PricingSection1() {
  return (
    <div className="w-full h-full py-12 lg:py-10 bg-gray-100 dark:bg-gray-800 overflow-auto">
      <div className="container px-4 md:px-6">
        <Tabs className="w-full max-w-4xl mx-auto" defaultValue="starter">
          <TabsList className="grid grid-cols-3 gap-4">
            {plans.map((plan) => (
              <TabsTrigger key={plan.value} value={plan.value}>
                {plan.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {plans.map((plan) => (
            <TabsContent key={plan.value} value={plan.value}>
              <Card className="p-6 md:p-8">
                <CardHeader>
                  <CardTitle>{plan.title}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-4xl font-bold">{plan.price}</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      per month
                    </p>
                  </div>
                  <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                    {plan.features.map((feature, index) => (
                      <li key={index}>
                        <IoCheckmarkSharp className="mr-2 inline-block h-4 w-4" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button>{plan.buttonText}</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
`;
