import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Shield, Smartphone, MapPin, Brain, CreditCard, ArrowRight, ArrowLeft, Check, Bike, ShoppingCart, Package } from "lucide-react";
import Navbar from "@/components/shared/Navbar";

const platforms = [
  { name: "Zomato", icon: Bike, color: "text-destructive" },
  { name: "Swiggy", icon: Bike, color: "text-secondary" },
  { name: "Amazon Flex", icon: Package, color: "text-accent" },
  { name: "Flipkart", icon: ShoppingCart, color: "text-accent" },
  { name: "Zepto", icon: Package, color: "text-primary" },
  { name: "Blinkit", icon: Package, color: "text-secondary" },
];

const plans = [
  { name: "Basic", price: "₹7/day", coverage: "₹500/event", badge: "Popular" },
  { name: "Standard", price: "₹15/day", coverage: "₹1,200/event", badge: "Recommended" },
  { name: "Premium", price: "₹30/day", coverage: "₹2,500/event", badge: "" },
];

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [city, setCity] = useState("");
  const [earnings, setEarnings] = useState("");
  const [selectedPlan, setSelectedPlan] = useState(1);
  const totalSteps = 5;

  const next = () => setStep((s) => Math.min(s + 1, totalSteps));
  const prev = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16 pb-8">
        <div className="container max-w-lg mx-auto py-8">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
              <span>Step {step} of {totalSteps}</span>
              <span>{Math.round((step / totalSteps) * 100)}%</span>
            </div>
            <Progress value={(step / totalSteps) * 100} className="h-2" />
          </div>

          {/* Step 1: Phone + OTP */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Enter Your Mobile Number</h2>
                <p className="text-muted-foreground">We'll send you a verification code</p>
              </div>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <div className="flex items-center px-4 rounded-lg border border-border bg-muted text-sm font-medium">+91</div>
                  <input
                    type="tel"
                    placeholder="Enter 10-digit mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-lg border border-border bg-muted/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    maxLength={10}
                  />
                </div>
                {phone.length === 10 && (
                  <div className="space-y-2 animate-fade-in">
                    <p className="text-sm text-muted-foreground">Enter OTP sent to +91 {phone}</p>
                    <input
                      type="text"
                      placeholder="Enter 6-digit OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 text-foreground text-center text-2xl tracking-[0.5em] font-mono placeholder:text-sm placeholder:tracking-normal focus:outline-none focus:ring-2 focus:ring-primary"
                      maxLength={6}
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Platform */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Select Your Platform</h2>
                <p className="text-muted-foreground">Which platform do you deliver for?</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {platforms.map((p) => (
                  <button
                    key={p.name}
                    onClick={() => setSelectedPlatform(p.name)}
                    className={`glass-card p-5 text-center transition-all duration-200 ${
                      selectedPlatform === p.name ? "border-primary glow-primary" : "hover:border-muted-foreground/30"
                    }`}
                  >
                    <p.icon className={`w-8 h-8 ${p.color} mx-auto mb-2`} />
                    <p className="font-medium text-sm">{p.name}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Details */}
          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-secondary" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Your Delivery Details</h2>
                <p className="text-muted-foreground">Help us find the best plan for you</p>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-1 block">City</label>
                  <input
                    type="text"
                    placeholder="e.g., Mumbai, Delhi, Bangalore"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-1 block">Delivery Zone</label>
                  <input
                    type="text"
                    placeholder="e.g., Andheri West, Koramangala"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-1 block">Weekly Earnings (₹)</label>
                  <input
                    type="number"
                    placeholder="e.g., 8000"
                    value={earnings}
                    onChange={(e) => setEarnings(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Risk Tier + Plan */}
          {step === 4 && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Your AI Risk Assessment</h2>
                <p className="text-muted-foreground">Based on your zone and platform data</p>
              </div>
              
              <Card className="gradient-card border-accent/30">
                <CardContent className="p-6 text-center">
                  <Badge className="bg-secondary/20 text-secondary border-secondary/30 mb-3">Medium Risk Zone</Badge>
                  <p className="text-3xl font-bold font-display text-accent">Risk Score: 64</p>
                  <p className="text-sm text-muted-foreground mt-2">Your zone has moderate weather disruption frequency</p>
                </CardContent>
              </Card>

              <div className="space-y-3">
                <p className="font-semibold text-center">Recommended Plans</p>
                {plans.map((plan, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedPlan(i)}
                    className={`w-full glass-card p-4 text-left transition-all duration-200 flex items-center justify-between ${
                      selectedPlan === i ? "border-primary glow-primary" : "hover:border-muted-foreground/30"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold">{plan.name}</p>
                        {plan.badge && <Badge variant="outline" className="text-xs border-primary/30 text-primary">{plan.badge}</Badge>}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Coverage: {plan.coverage}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-primary">{plan.price}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Payment */}
          {step === 5 && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Complete Payment</h2>
                <p className="text-muted-foreground">Choose your payment method</p>
              </div>

              <Card className="gradient-card border-primary/20">
                <CardContent className="p-6">
                  <div className="flex justify-between mb-4">
                    <span className="text-muted-foreground">Plan</span>
                    <span className="font-semibold">{plans[selectedPlan].name}</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="text-muted-foreground">Coverage</span>
                    <span className="font-semibold">{plans[selectedPlan].coverage}</span>
                  </div>
                  <div className="border-t border-border pt-4 flex justify-between">
                    <span className="font-semibold">Amount</span>
                    <span className="text-xl font-bold text-primary">{plans[selectedPlan].price}</span>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-3">
                {["UPI (GPay / PhonePe)", "Paytm Wallet", "Debit Card"].map((method) => (
                  <button
                    key={method}
                    className="w-full glass-card p-4 text-left hover:border-primary/30 transition-all flex items-center justify-between"
                  >
                    <span className="font-medium">{method}</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex gap-3 mt-8">
            {step > 1 && (
              <Button variant="outline" onClick={prev} className="flex-1 h-12 gap-2">
                <ArrowLeft className="w-4 h-4" /> Back
              </Button>
            )}
            <Button variant="hero" onClick={next} className="flex-1 h-12 gap-2" disabled={step === totalSteps}>
              {step === totalSteps ? (
                <><Check className="w-4 h-4" /> Pay Now</>
              ) : (
                <>Continue <ArrowRight className="w-4 h-4" /></>
              )}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Onboarding;
