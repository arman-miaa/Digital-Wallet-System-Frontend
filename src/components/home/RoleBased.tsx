import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Briefcase, BarChart3 } from "lucide-react";

const roles = [
  {
    icon: Users,
    title: "User Dashboard",
    description:
      "Personal wallet management with complete transaction history and balance tracking.",
    features: [
      "View balance",
      "Transfer funds",
      "Transaction history",
      "Account settings",
    ],
  },
  {
    icon: Briefcase,
    title: "Agent Dashboard",
    description:
      "Commission tracking, user management, and specialized agent tools.",
    features: [
      "Manage users",
      "Track earnings",
      "View commissions",
      "Generate reports",
    ],
  },
  {
    icon: BarChart3,
    title: "Admin Dashboard",
    description:
      "System-wide control and monitoring with comprehensive analytics.",
    features: [
      "System oversight",
      "User management",
      "Analytics",
      "Settings control",
    ],
  },
];

export default function RoleBased() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for Every Role
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored experiences for users, agents, and administrators.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {roles.map((role, i) => {
            const Icon = role.icon;
            return (
              <Card key={i} className="border border-border">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>{role.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{role.description}</p>
                  <ul className="space-y-2">
                    {role.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
