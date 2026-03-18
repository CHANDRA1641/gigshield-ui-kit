import { Brain, Zap, Globe, Shield, CloudRain, LineChart } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Risk Model",
    description: "Our AI analyzes weather, traffic, and platform data to predict disruptions before they hit.",
    color: "text-accent",
  },
  {
    icon: Zap,
    title: "Instant Payouts",
    description: "Automatic UPI payouts within minutes of a verified disruption. Zero claim process.",
    color: "text-primary",
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Available in English, Hindi, Tamil, Bengali, and Kannada — in the language you think in.",
    color: "text-secondary",
  },
  {
    icon: Shield,
    title: "Parametric Coverage",
    description: "No subjective claims. If the trigger event occurs, you get paid. Period.",
    color: "text-primary",
  },
  {
    icon: CloudRain,
    title: "Weather Intelligence",
    description: "Real-time monitoring of rain, heat, storms, and visibility in your delivery zone.",
    color: "text-accent",
  },
  {
    icon: LineChart,
    title: "Earnings Analytics",
    description: "Track your protected income, coverage history, and payout trends on your dashboard.",
    color: "text-secondary",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-card/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Built for Gig Workers</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Every feature designed to protect your income, not add complexity
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <div key={i} className="glass-card p-6 hover:border-primary/20 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
