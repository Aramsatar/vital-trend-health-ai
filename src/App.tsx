import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import { useAuth } from "@/lib/auth";
import { useState, useEffect } from "react";

import { Layout } from "@/components/Layout";
import { Dashboard } from "@/pages/Dashboard";
import { Metrics } from "@/pages/Metrics";
import { Trends } from "@/pages/Trends";
import { Calendar } from "@/pages/Calendar";
import { Chat } from "@/pages/Chat";
import { Profile } from "@/pages/Profile";
import { Settings } from "@/pages/Settings";
import { Welcome } from "@/pages/Welcome";
import { Auth } from "@/pages/Auth";
import { Landing } from "@/pages/Landing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Protected route component
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }
  
  if (!user) {
    return <Navigate to="/auth" replace />;
  }
  
  return <>{children}</>;
}

// Authentication routes
function AuthRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }
  
  if (user) {
    return <Navigate to="/" replace />;
  }
  
  return <>{children}</>;
}

const App = () => {
  const [initialized, setInitialized] = useState(false);
  
  useEffect(() => {
    // This ensures auth is initialized before rendering
    setInitialized(true);
  }, []);
  
  if (!initialized) {
    return <div className="flex h-screen items-center justify-center">Initializing...</div>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <Routes>
              {/* Public landing page */}
              <Route path="/" element={<Landing />} />
              <Route path="/landing" element={<Landing />} />
              
              <Route path="/auth" element={
                <AuthRoute>
                  <Auth />
                </AuthRoute>
              } />
              
              <Route element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/metrics" element={<Metrics />} />
                <Route path="/trends" element={<Trends />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
