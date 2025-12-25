import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet, TrendingUp, Send, Lock, Bell, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Balance Management",
    description:
      "View your wallet balance, add funds, and withdraw securely with just a few clicks.",
  },
  {
    icon: TrendingUp,
    title: "Transaction History",
    description:
      "Track all your transactions with detailed records and interactive charts.",
  },
  {
    icon: Send,
    title: "Fast Transfers",
    description:
      "Send money to other users instantly with our optimized transfer system.",
  },
  {
    icon: Lock,
    title: "Bank-Level Security",
    description:
      "Enterprise-grade encryption and security protocols protect your funds.",
  },
  {
    icon: Bell,
    title: "Real-time Alerts",
    description:
      "Get instant notifications for every transaction and account activity.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Comprehensive insights into your spending patterns and financial health.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage your digital wallet efficiently and
            securely.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Card
                key={i}
                className="border border-border hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
