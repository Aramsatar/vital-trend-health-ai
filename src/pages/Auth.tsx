
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn, signUp } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const navigate = useNavigate();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      if (mode === "signin") {
        const { data, error } = await signIn(email, password);
        if (error) throw error;
        
        toast.success("Signed in successfully!");
        navigate("/welcome");
      } else {
        const { data, error } = await signUp(email, password);
        if (error) throw error;
        
        toast.success("Account created! Please check your email for verification.");
        setMode("signin");
      }
    } catch (error: any) {
      toast.error(error.message || "Authentication failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">HealthMetrics AI</h1>
          <p className="mt-2 text-muted-foreground">
            Track, analyze, and improve your health with AI
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>{mode === "signin" ? "Sign In" : "Create Account"}</CardTitle>
            <CardDescription>
              {mode === "signin" 
                ? "Enter your credentials to access your account" 
                : "Sign up for a new account to get started"}
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleAuth}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your@email.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : mode === "signin" ? "Sign In" : "Sign Up"}
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                className="w-full"
                onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
              >
                {mode === "signin" ? "Create an account" : "Already have an account?"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
