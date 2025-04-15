
import { useTheme } from "@/context/ThemeContext";
import { useSidebar } from "@/components/ui/sidebar-new";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

export function Header() {
  const { theme, setTheme } = useTheme();
  const { setOpen } = useSidebar();

  const toggleSidebar = () => {
    setOpen((prev) => !prev);
  };

  return (
    <header className="px-6 py-3 border-b border-border bg-background">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button 
            onClick={toggleSidebar}
            className="md:hidden text-muted-foreground"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="text-sm text-muted-foreground hidden md:block">
            HealthMetrics AI Dashboard
          </div>
        </div>
      </div>
    </header>
  );
}
