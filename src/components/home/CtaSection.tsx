import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Take Control?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who have switched to a smarter way to manage
            their digital wallet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-base h-12 gap-2">
              Get Started Now <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="text-base h-12 bg-transparent">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
