import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, Key } from "lucide-react";

const security = [
  {
    icon: Shield,
    title: "SSL Encryption",
    description: "All data transmitted with military-grade SSL encryption.",
  },
  {
    icon: Lock,
    title: "Two-Factor Auth",
    description: "Additional layer of security with 2FA authentication.",
  },
  {
    icon: Eye,
    title: "Activity Monitoring",
    description: "Real-time monitoring and alerts for suspicious activity.",
  },
  {
    icon: Key,
    title: "Password Security",
    description: "Industry-standard password hashing and storage practices.",
  },
];

export default function Security() {
  return (
    <section id="security" className="py-20 md:py-32">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Security First
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your security and privacy are our top priorities. We employ
            industry-leading security measures.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {security.map((item, i) => {
            const Icon = item.icon;
            return (
              <Card key={i} className="border border-border text-center">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
