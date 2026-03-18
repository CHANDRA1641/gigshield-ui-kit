import { Home, LayoutDashboard, Bell, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/dashboard", icon: Home, label: "Home" },
  { to: "/claims", icon: LayoutDashboard, label: "Claims" },
  { to: "/dashboard", icon: Bell, label: "Alerts" },
  { to: "/onboarding", icon: User, label: "Profile" },
];

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <Link
              key={item.label}
              to={item.to}
              className={`flex flex-col items-center gap-1 py-2 px-3 min-w-[48px] min-h-[48px] justify-center transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
