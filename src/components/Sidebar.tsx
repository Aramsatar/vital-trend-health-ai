import { useState } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { 
  Activity, 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  Home, 
  LineChart, 
  MessageSquare, 
  Settings, 
  User 
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const isMobile = useIsMobile();

  // If on mobile and not explicitly opened, keep it collapsed
  const isCollapsed = isMobile || collapsed;

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const navItems = [
    { name: "Dashboard", path: "/", icon: Home },
    { name: "Metrics", path: "/metrics", icon: Activity },
    { name: "Trends", path: "/trends", icon: LineChart },
    { name: "Calendar", path: "/calendar", icon: Calendar },
    { name: "AI Chat", path: "/chat", icon: MessageSquare }
  ];

  const accountItems = [
    { name: "Profile", path: "/profile", icon: User },
    { name: "Settings", path: "/settings", icon: Settings }
  ];

  return (
    <aside
      className={cn(
        "bg-sidebar border-r border-border relative transition-all flex flex-col",
        isCollapsed ? "w-[70px]" : "w-[240px]",
        className
      )}
    >
      <div className="flex items-center justify-between px-4 h-16 border-b border-border">
        <div className={cn("flex items-center", isCollapsed && "justify-center w-full")}>
          {!isCollapsed && (
            <span className="text-xl font-bold text-primary">
              HealthMetrics
            </span>
          )}
          {isCollapsed && (
            <span className="text-xl font-bold text-primary">HM</span>
          )}
        </div>
        {!isMobile && (
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto"
            onClick={toggleSidebar}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </Button>
        )}
      </div>

      <div className="flex flex-col flex-1 py-4 overflow-y-auto">
        <nav className="space-y-1 px-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                cn(
                  "flex items-center px-3 py-2 rounded-md transition-colors",
                  isActive 
                    ? "bg-primary/10 text-primary font-medium" 
                    : "text-sidebar-foreground hover:bg-sidebar-accent",
                  isCollapsed && "justify-center"
                )
              }
            >
              <item.icon size={20} className={!isCollapsed ? "mr-3" : ""} />
              {!isCollapsed && <span>{item.name}</span>}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto space-y-1 px-2">
          {accountItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                cn(
                  "flex items-center px-3 py-2 rounded-md transition-colors",
                  isActive 
                    ? "bg-primary/10 text-primary font-medium" 
                    : "text-sidebar-foreground hover:bg-sidebar-accent",
                  isCollapsed && "justify-center"
                )
              }
            >
              <item.icon size={20} className={!isCollapsed ? "mr-3" : ""} />
              {!isCollapsed && <span>{item.name}</span>}
            </NavLink>
          ))}
          <div className={cn("mt-4 px-3", isCollapsed && "flex justify-center")}>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </aside>
  );
}
