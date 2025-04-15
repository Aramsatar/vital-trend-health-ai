import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { signOut } from "@/lib/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const navigation = [
  { name: 'Dashboard', href: '/', icon: Icons.home },
  { name: 'Metrics', href: '/metrics', icon: Icons.barChart },
  { name: 'Trends', href: '/trends', icon: Icons.trendingUp },
  { name: 'Calendar', href: '/calendar', icon: Icons.calendar },
  { name: 'Chat', href: '/chat', icon: Icons.messageSquare },
  { name: 'Profile', href: '/profile', icon: Icons.user },
  { name: 'Settings', href: '/settings', icon: Icons.settings },
];

export function Sidebar({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast.error("Failed to sign out.");
    } else {
      toast.success("Signed out successfully!");
      navigate('/auth');
    }
  };

  return (
    <aside className={cn(
      "w-64 border-r border-r-border bg-sidebar shadow-md transition-transform duration-300",
      className
    )}>
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between py-4 px-6">
          <span className="font-bold text-lg">HealthMetrics AI</span>
          {isMobile && (
            <button onClick={() => setOpen(!open)}>
              {open ? 'Close' : 'Open'}
            </button>
          )}
        </div>

        <nav className="flex-1 py-4">
          <ul>
            {navigation.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-2 py-2 px-6 hover:bg-accent hover:text-accent-foreground transition-colors",
                      isActive ? "bg-accent text-accent-foreground font-medium" : "text-muted-foreground"
                    )
                  }
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-t-border py-4 px-6">
          <button
            onClick={toggleTheme}
            className="w-full flex items-center gap-2 py-2 px-4 hover:bg-accent hover:text-accent-foreground transition-colors text-muted-foreground"
          >
            {theme === "light" ? <Icons.moon className="w-4 h-4" /> : <Icons.sun className="w-4 h-4" />}
            Toggle Theme
          </button>
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-2 py-2 px-4 hover:bg-accent hover:text-accent-foreground transition-colors text-muted-foreground"
          >
            <Icons.logOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </div>
    </aside>
  );
}
