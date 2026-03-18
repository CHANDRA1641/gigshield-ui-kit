import { Smartphone, CloudRain, IndianRupee } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "Sign Up in 2 Minutes",
    description: "Enter your mobile number, select your delivery platform, and choose a plan. No documents needed.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: CloudRain,
    title: "AI Monitors Your Zone",
    description: "Our AI watches weather, platform outages, and disruptions in your delivery zone 24/7.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: IndianRupee,
    title: "Get Paid Instantly",
    description: "When a covered disruption hits, your payout lands in your UPI account — no claim to file.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-card/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How GigShield Works</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Protected income in three simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative glass-card p-8 text-center group hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                {i + 1}
              </div>
              <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className={`w-8 h-8 ${step.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
