
import { HeroSection } from "@/components/blocks/hero-section";
import { Icons } from "@/components/ui/icons";
import { PageHeader } from "@/components/PageHeader";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Welcome() {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate('/');
  };

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Welcome to HealthMetrics AI"
        description="Your personal health monitoring platform"
      >
        <Button onClick={goToDashboard}>
          Go to Dashboard
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
            text: "View Dashboard",
            href: "/",
            variant: "default",
          },
          {
            text: "Explore Features",
            href: "/metrics",
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
    </div>
  );
}
