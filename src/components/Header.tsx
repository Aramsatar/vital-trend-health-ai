
import { useTheme } from "@/context/ThemeContext";
import { Heart } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar-new";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

export function Header() {
  const { theme, setTheme } = useTheme();
  const { open, setOpen } = useSidebar();

  return (
    <header className="sticky top-0 z-50 px-6 py-3 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setOpen(!open)}
          >
            <Icons.menu className="h-5 w-5" />
          </button>
          
          <div className="flex items-center gap-2">
            <Icons.healthlyLogo />
            <span className="text-xl font-bold">Healthly AI</span>
          </div>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/dashboard"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/20 to-primary/40 p-6 no-underline outline-none focus:shadow-md"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium">
                            HealthMetrics AI
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Your complete health companion with AI-powered insights
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <Link to="/chat" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">AI Assistant</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Get personalized health insights and recommendations
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/metrics" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Metrics</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Track your vital health metrics in one place
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/calendar" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Calendar</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Schedule and track your health activities
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-sm font-medium text-muted-foreground hidden md:block">
            Welcome to Healthy AI Dashboard
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              asChild
              className="hidden sm:inline-flex"
            >
              <Link to="/chat">Talk to AI Assistant</Link>
            </Button>
            <Button size="sm" asChild className="bg-primary hover:bg-primary/90">
              <Link to="/metrics">View Health Metrics</Link>
            </Button>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
