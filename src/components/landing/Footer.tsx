import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 bg-card/30">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold font-display">GigShield</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              AI-powered parametric income insurance for India's gig delivery workforce. 
              Protecting earnings against weather and platform disruptions.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/onboarding" className="hover:text-primary transition-colors">Get Protected</Link></li>
              <li><Link to="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
              <li><Link to="/claims" className="hover:text-primary transition-colors">Claims</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><span className="hover:text-primary transition-colors cursor-pointer">About</span></li>
              <li><span className="hover:text-primary transition-colors cursor-pointer">Terms</span></li>
              <li><span className="hover:text-primary transition-colors cursor-pointer">Privacy</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
          © 2026 GigShield. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
