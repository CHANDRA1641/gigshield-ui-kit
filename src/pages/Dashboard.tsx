import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, IndianRupee, CloudRain, Bell, TrendingUp, AlertTriangle, MapPin, Clock } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import Navbar from "@/components/shared/Navbar";
import BottomNav from "@/components/shared/BottomNav";
import DisruptionAlert from "@/components/shared/DisruptionAlert";

const earningsData = [
  { week: "W1", earnings: 8200, protected: 2500 },
  { week: "W2", earnings: 7800, protected: 0 },
  { week: "W3", earnings: 6100, protected: 1800 },
  { week: "W4", earnings: 9200, protected: 0 },
  { week: "W5", earnings: 5400, protected: 2200 },
  { week: "W6", earnings: 8700, protected: 0 },
];

const payouts = [
  { date: "Mar 12, 2026", event: "Heavy Rain", amount: "₹2,500", status: "Paid" },
  { date: "Mar 5, 2026", event: "Heatwave", amount: "₹1,800", status: "Paid" },
  { date: "Feb 28, 2026", event: "Platform Outage", amount: "₹1,200", status: "Paid" },
  { date: "Feb 20, 2026", event: "Heavy Rain", amount: "₹2,500", status: "Paid" },
];

const alerts = [
  { type: "warning", text: "Heavy rain expected in your zone (6PM - 10PM)", time: "2h ago" },
  { type: "info", text: "Coverage renewed for this week", time: "1d ago" },
  { type: "success", text: "Payout of ₹2,500 credited to UPI", time: "3d ago" },
];

const riskZones = [
  { zone: "Andheri West", risk: 78, color: "text-destructive" },
  { zone: "Bandra", risk: 62, color: "text-secondary" },
  { zone: "Powai", risk: 45, color: "text-primary" },
  { zone: "Colaba", risk: 34, color: "text-primary" },
  { zone: "Dadar", risk: 71, color: "text-secondary" },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Navbar />
      <main className="pt-16">
        <div className="container py-6 space-y-6">
          {/* Active Alert */}
          <DisruptionAlert />

          {/* Status Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="gradient-card border-primary/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-xs text-muted-foreground">Status</span>
                </div>
                <Badge className="bg-primary/20 text-primary border-primary/30">Active</Badge>
              </CardContent>
            </Card>
            <Card className="gradient-card border-border">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <IndianRupee className="w-4 h-4 text-primary" />
                  <span className="text-xs text-muted-foreground">Protected</span>
                </div>
                <p className="text-2xl font-bold font-display">₹8,700</p>
              </CardContent>
            </Card>
            <Card className="gradient-card border-border">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-xs text-muted-foreground">Total Payouts</span>
                </div>
                <p className="text-2xl font-bold font-display">₹8,000</p>
              </CardContent>
            </Card>
            <Card className="gradient-card border-border">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CloudRain className="w-4 h-4 text-accent" />
                  <span className="text-xs text-muted-foreground">Active Alerts</span>
                </div>
                <p className="text-2xl font-bold font-display text-secondary">1</p>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">Earnings vs Protected Income</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={earningsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(217 33% 25%)" />
                    <XAxis dataKey="week" stroke="hsl(215 20% 65%)" fontSize={12} />
                    <YAxis stroke="hsl(215 20% 65%)" fontSize={12} />
                    <Tooltip
                      contentStyle={{ backgroundColor: "hsl(217 33% 17%)", border: "1px solid hsl(217 33% 25%)", borderRadius: "8px" }}
                      labelStyle={{ color: "hsl(210 40% 98%)" }}
                    />
                    <Bar dataKey="earnings" fill="hsl(142 71% 45%)" radius={[4, 4, 0, 0]} name="Earnings" />
                    <Bar dataKey="protected" fill="hsl(199 89% 60%)" radius={[4, 4, 0, 0]} name="Protected" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Zone Risk */}
            <Card className="gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" /> Zone Risk Heatmap
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {riskZones.map((zone, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-sm w-28 text-muted-foreground">{zone.zone}</span>
                      <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            zone.risk > 70 ? "bg-destructive" : zone.risk > 50 ? "bg-secondary" : "bg-primary"
                          }`}
                          style={{ width: `${zone.risk}%` }}
                        />
                      </div>
                      <span className={`text-sm font-semibold w-10 text-right ${zone.color}`}>{zone.risk}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payout History & Notifications */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">Payout History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {payouts.map((p, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-border/50 last:border-0">
                      <div>
                        <p className="font-medium text-sm">{p.event}</p>
                        <p className="text-xs text-muted-foreground">{p.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-primary">{p.amount}</p>
                        <Badge variant="outline" className="text-xs border-primary/30 text-primary">{p.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Bell className="w-5 h-5" /> Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {alerts.map((a, i) => (
                    <div key={i} className="flex items-start gap-3 py-3 border-b border-border/50 last:border-0">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        a.type === "warning" ? "bg-secondary" : a.type === "success" ? "bg-primary" : "bg-accent"
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm">{a.text}</p>
                        <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {a.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default Dashboard;
