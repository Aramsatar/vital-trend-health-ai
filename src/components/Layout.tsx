
import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { 
  Sidebar, 
  SidebarBody, 
  SidebarLink, 
  Logo, 
  LogoIcon,
  SidebarProvider
} from "@/components/ui/sidebar-new";
import { signOut } from "@/lib/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Icons } from "@/components/ui/icons";

// Navigation items for the sidebar
const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: <Icons.home className="w-5 h-5 flex-shrink-0" /> },
  { name: 'Metrics', href: '/metrics', icon: <Icons.barChart className="w-5 h-5 flex-shrink-0" /> },
  { name: 'Trends', href: '/trends', icon: <Icons.trendingUp className="w-5 h-5 flex-shrink-0" /> },
  { name: 'Calendar', href: '/calendar', icon: <Icons.calendar className="w-5 h-5 flex-shrink-0" /> },
  { name: 'Chat', href: '/chat', icon: <Icons.messageSquare className="w-5 h-5 flex-shrink-0" /> },
  { name: 'Profile', href: '/profile', icon: <Icons.user className="w-5 h-5 flex-shrink-0" /> },
  { name: 'Settings', href: '/settings', icon: <Icons.settings className="w-5 h-5 flex-shrink-0" /> },
];

export function Layout() {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  const navigate = useNavigate();
  
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
    <SidebarProvider open={sidebarOpen} setOpen={setSidebarOpen}>
      <div className="min-h-screen flex bg-background">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen}>
          <SidebarBody className="flex flex-col justify-between h-full p-4 gap-6">
            <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
              <div className="flex items-center justify-between mb-6">
                {sidebarOpen ? <Logo /> : <LogoIcon />}
              </div>
              
              <nav className="space-y-1.5">
                {navigation.map((item) => (
                  <SidebarLink 
                    key={item.name} 
                    link={item}
                    className="transition-colors duration-200 hover:bg-accent/50 rounded-lg"
                  />
                ))}
              </nav>
            </div>
            
            <div className="space-y-1.5">
              <button
                onClick={() => document.documentElement.classList.toggle('dark')}
                className="flex items-center gap-3 w-full p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors duration-200"
              >
                <Icons.sun className="w-5 h-5 flex-shrink-0 dark:hidden" />
                <Icons.moon className="w-5 h-5 flex-shrink-0 hidden dark:block" />
                <span className={cn(
                  "text-sm font-medium",
                  !sidebarOpen && "hidden"
                )}>
                  Toggle Theme
                </span>
              </button>
              
              <button
                onClick={handleSignOut}
                className="flex items-center gap-3 w-full p-2.5 rounded-lg text-red-500 hover:text-red-600 hover:bg-red-500/10 transition-colors duration-200"
              >
                <Icons.logOut className="w-5 h-5 flex-shrink-0" />
                <span className={cn(
                  "text-sm font-medium",
                  !sidebarOpen && "hidden"
                )}>
                  Sign Out
                </span>
              </button>
            </div>
          </SidebarBody>
        </Sidebar>

        <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
          <Header />
          
          <main className="flex-1 overflow-y-auto">
            <div className="container mx-auto max-w-7xl h-full">
              <Outlet />
            </div>
          </main>
          
          <footer className="py-4 px-6 border-t border-border">
            <div className="text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} HealthMetrics AI. All rights reserved.
            </div>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
}
