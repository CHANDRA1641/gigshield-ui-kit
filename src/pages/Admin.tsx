import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IndianRupee, Users, TrendingDown, Activity, AlertTriangle, Shield } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import Navbar from "@/components/shared/Navbar";

const metrics = [
  { label: "Total Premiums", value: "₹24.5L", icon: IndianRupee, change: "+12%", color: "text-primary" },
  { label: "Total Payouts", value: "₹18.2L", icon: TrendingDown, change: "+8%", color: "text-accent" },
  { label: "Loss Ratio", value: "74.3%", icon: Activity, change: "-2%", color: "text-secondary" },
  { label: "Active Users", value: "12,847", icon: Users, change: "+340", color: "text-primary" },
];

const claimsByZone = [
  { zone: "Mumbai", claims: 342 },
  { zone: "Delhi", claims: 287 },
  { zone: "Bangalore", claims: 198 },
  { zone: "Hyderabad", claims: 156 },
  { zone: "Chennai", claims: 134 },
  { zone: "Pune", claims: 98 },
];

const segmentData = [
  { name: "Food", value: 45, color: "hsl(142 71% 45%)" },
  { name: "E-Commerce", value: 30, color: "hsl(199 89% 60%)" },
  { name: "Grocery", value: 25, color: "hsl(38 92% 50%)" },
];

const flaggedClaims = [
  { id: "CLM-2601", user: "Vikram S.", score: 92, reason: "Multiple claims in 24h", amount: "₹2,500" },
  { id: "CLM-2588", user: "Amit P.", score: 85, reason: "Location mismatch", amount: "₹1,800" },
  { id: "CLM-2571", user: "Raju K.", score: 78, reason: "Pattern anomaly", amount: "₹2,500" },
  { id: "CLM-2540", user: "Deepak M.", score: 72, reason: "Frequency spike", amount: "₹1,200" },
];

const Admin = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <div className="container py-6 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <Badge variant="outline" className="border-primary/30 text-primary">Live</Badge>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((m, i) => (
              <Card key={i} className="gradient-card border-border">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <m.icon className={`w-4 h-4 ${m.color}`} />
                    <span className="text-xs text-muted-foreground">{m.label}</span>
                  </div>
                  <p className="text-2xl font-bold font-display">{m.value}</p>
                  <span className="text-xs text-primary">{m.change}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">Claims by Zone</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={claimsByZone}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(217 33% 25%)" />
                    <XAxis dataKey="zone" stroke="hsl(215 20% 65%)" fontSize={12} />
                    <YAxis stroke="hsl(215 20% 65%)" fontSize={12} />
                    <Tooltip
                      contentStyle={{ backgroundColor: "hsl(217 33% 17%)", border: "1px solid hsl(217 33% 25%)", borderRadius: "8px" }}
                    />
                    <Bar dataKey="claims" fill="hsl(199 89% 60%)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">Segment Distribution</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <ResponsiveContainer width={200} height={200}>
                    <PieChart>
                      <Pie data={segmentData} dataKey="value" cx="50%" cy="50%" outerRadius={80} innerRadius={50}>
                        {segmentData.map((entry, i) => (
                          <Cell key={i} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="space-y-3">
                    {segmentData.map((s, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: s.color }} />
                        <span className="text-sm">{s.name}</span>
                        <span className="text-sm font-semibold text-muted-foreground">{s.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Fraud Detection */}
          <Card className="gradient-card border-destructive/20">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-destructive" /> Fraud Detection Panel
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 text-muted-foreground font-medium">Claim ID</th>
                      <th className="text-left py-3 text-muted-foreground font-medium">User</th>
                      <th className="text-left py-3 text-muted-foreground font-medium hidden sm:table-cell">Reason</th>
                      <th className="text-right py-3 text-muted-foreground font-medium">Amount</th>
                      <th className="text-right py-3 text-muted-foreground font-medium">Risk Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {flaggedClaims.map((c, i) => (
                      <tr key={i} className="border-b border-border/50 last:border-0">
                        <td className="py-3 font-mono text-xs">{c.id}</td>
                        <td className="py-3">{c.user}</td>
                        <td className="py-3 text-muted-foreground hidden sm:table-cell">{c.reason}</td>
                        <td className="py-3 text-right font-semibold">{c.amount}</td>
                        <td className="py-3 text-right">
                          <Badge variant="outline" className={`text-xs ${
                            c.score > 85 ? "border-destructive/50 text-destructive" :
                            c.score > 70 ? "border-secondary/50 text-secondary" :
                            "border-primary/50 text-primary"
                          }`}>
                            {c.score}
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
    </div>
  );
};

export default Admin;
