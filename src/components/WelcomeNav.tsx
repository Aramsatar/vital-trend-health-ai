import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Heart, Brain } from "lucide-react";

export function WelcomeNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">HealthMetrics AI</span>
        </div>
        
        <nav className="flex items-center gap-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/landing#features" className="text-sm font-medium transition-colors hover:text-primary">
            Features
          </Link>
          <Link to="/landing#how-it-works" className="text-sm font-medium transition-colors hover:text-primary">
            How It Works
          </Link>
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
        </nav>
      </div>
    </header>
  );
} 