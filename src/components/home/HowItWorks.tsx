import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Create Account",
    description: "Sign up in minutes with your email and secure password.",
  },
  {
    number: "02",
    title: "Verify Identity",
    description:
      "Complete quick identity verification for security compliance.",
  },
  {
    number: "03",
    title: "Add Funds",
    description: "Link your bank account or card to start funding your wallet.",
  },
  {
    number: "04",
    title: "Start Transacting",
    description:
      "Begin making transfers, payments, and managing your finances.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started in four simple steps and unlock the full potential of
            your digital wallet.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <Card className="border border-border h-full">
                <CardContent className="pt-8">
                  <div className="text-4xl font-bold text-primary/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
