import { Button } from "@/components/ui/button";
import { Shield, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium animate-fade-in">
            <Zap className="w-4 h-4" />
            AI-Powered Parametric Insurance
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Zero-Touch Income Protection for{" "}
            <span className="text-gradient-primary">Gig Workers</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Instant payouts when disruptions hit — rain, heatwaves, or platform outages. 
            No claims to file. No paperwork. Just protection that works.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link to="/onboarding">
              <Button variant="hero" size="lg" className="text-base h-14 px-8 gap-2">
                Get Started <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/onboarding">
              <Button variant="hero-outline" size="lg" className="text-base h-14 px-8">
                View Plans
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center justify-center gap-8 pt-8 text-muted-foreground text-sm animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>₹1/day plans</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-secondary" />
              <span>Instant payouts</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-accent" />
              <span>Zero paperwork</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
