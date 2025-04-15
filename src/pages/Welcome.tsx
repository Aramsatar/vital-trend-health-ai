import { HeroSection } from "@/components/blocks/hero-section";
import { Icons } from "@/components/ui/icons";
import { PageHeader } from "@/components/PageHeader";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { WelcomeNav } from "@/components/WelcomeNav";
import { useAuth } from "@/lib/auth";

export function Welcome() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleGetStarted = () => {
    if (!user) {
      navigate('/auth?mode=signup');
    } else {
      navigate('/dashboard');
    }
  };

  const features = [
    {
      icon: <Icons.barChart className="w-10 h-10 text-primary" />,
      title: "Track Your Metrics",
      description: "Record blood pressure, glucose, heart rate, and more in a few simple taps."
    },
    {
      icon: <Icons.trendingUp className="w-10 h-10 text-primary" />,
      title: "Visualize Health Trends",
      description: "See your health trends with beautiful charts and graphs."
    },
    {
      icon: <Icons.messageSquare className="w-10 h-10 text-primary" />,
      title: "AI Health Assistant",
      description: "Get personalized health insights from our AI assistant."
    }
  ];

  return (
    <div className="min-h-screen">
      <WelcomeNav />
      <div className="container mx-auto px-4 py-8">
        <PageHeader 
          title="Welcome to HealthMetrics AI"
          description="Let's get started with your personal health monitoring journey"
        >
          <Button onClick={handleGetStarted}>
            {user ? "Go to Dashboard" : "Get Started"}
          </Button>
        </PageHeader>

        <HeroSection
          badge={{
            text: "Your health journey begins here",
            action: {
              text: "Learn more",
              href: "/metrics",
            },
          }}
          title="Track, Analyze, and Improve"
          description="HealthMetrics AI helps you monitor your vital health metrics, identify trends, and make informed decisions about your wellbeing."
          actions={[
            {
              text: user ? "View Dashboard" : "Sign Up Now",
              href: user ? "/dashboard" : "/auth?mode=signup",
              variant: "default",
            },
            {
              text: "Explore Features",
              href: "/landing#features",
              variant: "glow",
              icon: <Icons.arrowRight className="h-5 w-5" />,
            },
          ]}
          image={{
            light: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
            dark: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
            alt: "Health metrics dashboard preview",
          }}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <Card key={index} className="border border-slate-200 dark:border-slate-700">
              <CardHeader className="pb-2">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="border border-slate-200 dark:border-slate-700 bg-primary/5 mt-12">
          <CardHeader>
            <CardTitle>Ready to start tracking?</CardTitle>
            <CardDescription>Your health metrics dashboard is ready for you to begin your wellness journey.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={handleGetStarted}>
              {user ? "Go to Dashboard" : "Get Started"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
