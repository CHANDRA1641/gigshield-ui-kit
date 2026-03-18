import { CloudRain, AlertTriangle } from "lucide-react";

const DisruptionAlert = () => {
  return (
    <div className="relative overflow-hidden rounded-xl border border-secondary/30 bg-secondary/5 p-4 animate-pulse-glow" style={{ boxShadow: '0 0 20px hsl(38 92% 50% / 0.15)' }}>
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
          <CloudRain className="w-5 h-5 text-secondary" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <AlertTriangle className="w-4 h-4 text-secondary" />
            <span className="font-semibold text-secondary text-sm">Active Weather Alert</span>
          </div>
          <p className="text-foreground font-medium">Heavy rain detected in your zone — you are covered</p>
          <p className="text-sm text-muted-foreground mt-1">Andheri West, Mumbai · Expected until 10:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default DisruptionAlert;
