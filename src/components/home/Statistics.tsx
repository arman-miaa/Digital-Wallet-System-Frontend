import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { label: "Active Users", value: "100K+" },
  { label: "Transactions", value: "$500M+" },
  { label: "Countries", value: "50+" },
  { label: "Uptime", value: "99.99%" },
];

export default function Statistics() {
  return (
    <section className="py-20 md:py-32 bg-primary/5 border-y border-border container mx-auto">
      <div className="container px-4">
        <div className="grid gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Card key={i} className="border-0 bg-transparent text-center">
              <CardContent className="pt-0">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
