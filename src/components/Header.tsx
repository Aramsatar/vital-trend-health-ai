
import { useTheme } from "@/context/ThemeContext";
import { Menu } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar-new";
import { 
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator
} from "@/components/ui/menubar";
import { useNavigate } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export function Header() {
  const { theme, setTheme } = useTheme();
  const { open, setOpen } = useSidebar();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 px-6 py-3 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setOpen(!open)}
          >
            <Menu className="h-5 w-5" />
          </button>
          
          <div className="flex items-center gap-2 md:hidden">
            <img 
              src="/lovable-uploads/4d3ab7f0-86f1-4f8e-9d38-45eb6e1f8063.png" 
              alt="Healthy AI" 
              className="h-6 w-6"
            />
            <span className="font-semibold">Healthy AI</span>
          </div>

          <Menubar className="hidden md:flex border-none bg-transparent">
            <MenubarMenu>
              <MenubarTrigger className="cursor-pointer">Navigation</MenubarTrigger>
              <MenubarContent>
                <MenubarItem onClick={() => navigate('/')}>
                  Landing Page
                </MenubarItem>
                <MenubarItem onClick={() => navigate('/dashboard')}>
                  Dashboard
                </MenubarItem>
                <MenubarItem onClick={() => navigate('/welcome')}>
                  Welcome Page
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem onClick={() => navigate('/metrics')}>
                  Metrics
                </MenubarItem>
                <MenubarItem onClick={() => navigate('/trends')}>
                  Trends
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            
            <MenubarMenu>
              <MenubarTrigger className="cursor-pointer">Features</MenubarTrigger>
              <MenubarContent>
                <MenubarItem onClick={() => navigate('/chat')}>
                  Chat with AI
                </MenubarItem>
                <MenubarItem onClick={() => navigate('/calendar')}>
                  Calendar
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-sm font-medium text-muted-foreground hidden md:block">
            Welcome to Healthy AI Dashboard
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/')}
              className="hidden sm:inline-flex"
            >
              Back to Home
            </Button>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
