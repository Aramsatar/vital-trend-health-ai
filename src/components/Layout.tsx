
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <div className="min-h-screen flex bg-background">
      <Sidebar className={cn(
        isMobile && "fixed top-0 bottom-0 z-40",
        isMobile && !sidebarOpen && "transform -translate-x-full",
        "transition-transform duration-300"
      )} />

      <div className="flex-1 flex flex-col min-h-screen">
        <Header onMenuToggle={toggleSidebar} />
        
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

      {/* Mobile backdrop */}
      {isMobile && sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
