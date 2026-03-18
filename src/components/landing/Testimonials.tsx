import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Kumar",
    role: "Zomato Delivery Partner",
    city: "Mumbai",
    quote: "Last monsoon I lost ₹3,000 in two days. With GigShield, I got ₹2,500 paid into my UPI within an hour of the heavy rain alert.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Swiggy Delivery Partner",
    city: "Delhi",
    quote: "The best part? I didn't have to file any claim. The money just appeared in my account when the heatwave was confirmed.",
    rating: 5,
  },
  {
    name: "Suresh Reddy",
    role: "Amazon Flex Driver",
    city: "Hyderabad",
    quote: "₹30 per week for peace of mind is nothing. My family doesn't worry about my income during bad weather anymore.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Trusted by Workers</h2>
          <p className="text-muted-foreground text-lg">
            Real stories from delivery partners across India
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card p-6 flex flex-col">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground/90 mb-6 flex-1 leading-relaxed">"{t.quote}"</p>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role} · {t.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
