import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, AlertTriangle, Clock, Zap, Shield, Search } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import BottomNav from "@/components/shared/BottomNav";

const claimSteps = [
  { label: "Trigger Detected", icon: Zap, status: "done" },
  { label: "Validation", icon: Shield, status: "done" },
  { label: "Fraud Score", icon: Search, status: "done" },
  { label: "Approval", icon: Check, status: "active" },
  { label: "Payout", icon: Check, status: "pending" },
];

const claims = [
  { id: "CLM-2841", event: "Heavy Rain", date: "Mar 12, 2026", amount: "₹2,500", status: "Auto-approved", fraud: 12 },
  { id: "CLM-2790", event: "Heatwave", date: "Mar 5, 2026", amount: "₹1,800", status: "Auto-approved", fraud: 8 },
  { id: "CLM-2688", event: "Platform Outage", date: "Feb 28, 2026", amount: "₹1,200", status: "Under review", fraud: 45 },
  { id: "CLM-2601", event: "Heavy Rain", date: "Feb 20, 2026", amount: "₹2,500", status: "Flagged", fraud: 78 },
];

const Claims = () => {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Navbar />
      <main className="pt-16">
        <div className="container py-6 space-y-6">
          <h1 className="text-2xl font-bold">Claim Automation</h1>

          {/* Visual Stepper */}
          <Card className="gradient-card border-accent/20">
            <CardHeader>
              <CardTitle className="text-lg">Current Claim Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                {claimSteps.map((step, i) => (
                  <div key={i} className="flex flex-col items-center flex-1">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                      step.status === "done" ? "bg-primary text-primary-foreground" :
                      step.status === "active" ? "bg-accent text-accent-foreground animate-pulse" :
                      "bg-muted text-muted-foreground"
                    }`}>
                      {step.status === "done" ? <Check className="w-5 h-5" /> : <step.icon className="w-5 h-5" />}
                    </div>
                    <span className="text-[10px] sm:text-xs text-center text-muted-foreground">{step.label}</span>
                    {i < claimSteps.length - 1 && (
                      <div className="hidden" /> 
                    )}
                  </div>
                ))}
              </div>
              {/* Connector lines */}
              <div className="flex items-center mt-[-36px] mb-6 px-5">
                {claimSteps.slice(0, -1).map((step, i) => (
                  <div key={i} className={`flex-1 h-0.5 ${
                    step.status === "done" ? "bg-primary" : "bg-muted"
                  }`} />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Claims Table */}
          <Card className="gradient-card border-border">
            <CardHeader>
              <CardTitle className="text-lg">Claims History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 text-muted-foreground font-medium">ID</th>
                      <th className="text-left py-3 text-muted-foreground font-medium">Event</th>
                      <th className="text-left py-3 text-muted-foreground font-medium hidden sm:table-cell">Date</th>
                      <th className="text-right py-3 text-muted-foreground font-medium">Amount</th>
                      <th className="text-right py-3 text-muted-foreground font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {claims.map((c, i) => (
                      <tr key={i} className="border-b border-border/50 last:border-0">
                        <td className="py-3 font-mono text-xs">{c.id}</td>
                        <td className="py-3">{c.event}</td>
                        <td className="py-3 text-muted-foreground hidden sm:table-cell">{c.date}</td>
                        <td className="py-3 text-right font-semibold">{c.amount}</td>
                        <td className="py-3 text-right">
                          <Badge variant="outline" className={`text-xs ${
                            c.status === "Auto-approved" ? "border-primary/30 text-primary" :
                            c.status === "Under review" ? "border-secondary/30 text-secondary" :
                            "border-destructive/30 text-destructive"
                          }`}>
                            {c.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default Claims;
