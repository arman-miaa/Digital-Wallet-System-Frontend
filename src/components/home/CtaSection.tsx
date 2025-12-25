import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-24 md:py-36">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-accent/10 p-12 md:p-20 text-center shadow-sm">
          {/* Soft background glow */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_60%)]" />

          <h2 className="relative text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Take Control?
          </h2>

          <p className="relative text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Manage your digital wallet smarter, faster, and more securely —
            everything you need, in one place.
          </p>

          <div className="relative flex justify-center">
            <Button className="group h-14 px-8 text-base md:text-lg rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 gap-3 shadow-lg hover:shadow-xl">
             
              <Link to="/signup">Get Started Now</Link>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
