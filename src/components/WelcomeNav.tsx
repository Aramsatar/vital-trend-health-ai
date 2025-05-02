
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Heart } from "lucide-react";
import { Icons } from "@/components/ui/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function WelcomeNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Icons.healthlyLogo className="h-8 w-8" />
          <span className="text-xl font-bold">Healthly AI</span>
        </div>
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
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
                        to="#features"
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
                    <Link to="#features" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">AI Assistant</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Get personalized health insights and recommendations
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link to="#metrics-preview" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Metrics</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Track your vital health metrics in one place
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link to="#how-it-works" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">How It Works</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Learn more about our simple 3-step process
                      </p>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/welcome" className="text-sm font-medium transition-colors hover:text-primary">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Demo</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/auth?mode=signin">
              Sign In
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/auth?mode=signup">
              Get Started
            </Link>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
