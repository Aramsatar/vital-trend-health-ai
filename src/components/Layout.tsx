
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
  { name: 'Dashboard', href: '/', icon: <Icons.home className="w-5 h-5 flex-shrink-0" /> },
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
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
              {sidebarOpen ? <Logo /> : <LogoIcon />}
              <div className="mt-8 flex flex-col gap-2">
                {navigation.map((item) => (
                  <SidebarLink key={item.name} link={item} />
                ))}
              </div>
            </div>
            <div className="space-y-2">
              {/* Theme toggle */}
              <button
                onClick={() => document.documentElement.classList.toggle('dark')}
                className="flex items-center gap-2 group/sidebar py-2 w-full"
              >
                <Icons.sun className="w-5 h-5 flex-shrink-0 dark:hidden" />
                <Icons.moon className="w-5 h-5 flex-shrink-0 hidden dark:block" />
                <span className={cn(
                  "text-sm whitespace-pre transition duration-150",
                  !sidebarOpen && "hidden"
                )}>
                  Toggle Theme
                </span>
              </button>
              
              {/* Sign out button */}
              <button
                onClick={handleSignOut}
                className="flex items-center gap-2 group/sidebar py-2 w-full text-red-500 hover:text-red-600"
              >
                <Icons.logOut className="w-5 h-5 flex-shrink-0" />
                <span className={cn(
                  "text-sm whitespace-pre transition duration-150",
                  !sidebarOpen && "hidden"
                )}>
                  Sign Out
                </span>
              </button>
            </div>
          </SidebarBody>
        </Sidebar>

        <div className="flex-1 flex flex-col min-h-screen">
          <Header />
          
          <main className="flex-1 p-4 md:p-6">
            <div className="mx-auto max-w-7xl">
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
