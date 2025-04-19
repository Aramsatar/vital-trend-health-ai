import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { 
  Sidebar, 
  SidebarBody,
  SidebarLink, 
  SidebarProvider
} from "@/components/ui/sidebar-new";
import { signOut } from "@/lib/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Icons } from "@/components/ui/icons";

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
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <Icons.healthlyLogo />
                  <span className={cn(
                    "font-semibold text-lg text-foreground",
                    !sidebarOpen && "hidden"
                  )}>
                    Healthly AI
                  </span>
                </div>
              </div>
              
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <SidebarLink 
                    key={item.name} 
                    link={item}
                    className="transition-all duration-200 hover:bg-primary/10 rounded-lg text-foreground/80 hover:text-primary data-[active=true]:bg-primary/15 data-[active=true]:text-primary"
                  />
                ))}
              </nav>
            </div>
            
            <div className="space-y-2">
              <button
                onClick={() => document.documentElement.classList.toggle('dark')}
                className="flex items-center gap-3 w-full p-2.5 rounded-lg text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-200"
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
                className="flex items-center gap-3 w-full p-2.5 rounded-lg text-red-500 hover:text-red-600 hover:bg-red-500/10 transition-all duration-200"
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
          
          <main className="flex-1 overflow-y-auto bg-background/95">
            <div className="container mx-auto max-w-7xl h-full py-6">
              <Outlet />
            </div>
          </main>
          
          <footer className="py-4 px-6 border-t border-border bg-background/95">
            <div className="text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Healthy AI. All rights reserved.
            </div>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
}
