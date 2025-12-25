import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Owner",
    content:
      "WalletHub has transformed how I manage my business finances. The interface is intuitive and the security is top-notch.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Freelancer",
    content:
      "Finally, a wallet platform that understands the needs of modern users. Fast transfers and instant notifications are game-changers.",
    rating: 5,
  },
  {
    name: "Emma Davis",
    role: "Agent",
    content:
      "The agent dashboard is incredibly powerful. I can manage all my users and track earnings effortlessly. Highly recommended!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30 container mx-auto">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied users who trust WalletHub with their
            finances.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="border border-border">
              <CardHeader>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
