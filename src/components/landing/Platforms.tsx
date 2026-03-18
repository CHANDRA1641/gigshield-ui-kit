import { Bike, ShoppingCart, Package } from "lucide-react";

const platforms = [
  { name: "Zomato", category: "Food Delivery", icon: Bike, color: "text-destructive" },
  { name: "Swiggy", category: "Food Delivery", icon: Bike, color: "text-secondary" },
  { name: "Amazon Flex", category: "E-Commerce", icon: Package, color: "text-accent" },
  { name: "Flipkart", category: "E-Commerce", icon: ShoppingCart, color: "text-accent" },
  { name: "Zepto", category: "Quick Commerce", icon: Package, color: "text-primary" },
  { name: "Blinkit", category: "Quick Commerce", icon: Package, color: "text-secondary" },
];

const Platforms = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Supported Platforms</h2>
          <p className="text-muted-foreground text-lg">
            Covering India's top delivery networks
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {platforms.map((platform, i) => (
            <div
              key={i}
              className="glass-card p-6 text-center hover:border-primary/30 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <platform.icon className={`w-6 h-6 ${platform.color}`} />
              </div>
              <p className="font-semibold text-sm">{platform.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{platform.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platforms;
