import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FeaturesSection } from "@/components/blocks/features-section";
import { StepsSection } from "@/components/blocks/steps-section";
import { MetricsPreview } from "@/components/blocks/metrics-preview";
import { AIAssistantPreview } from "@/components/blocks/ai-assistant-preview";
import { WelcomeNav } from "@/components/WelcomeNav";
import { HeroSection } from "@/components/blocks/hero-section";
export function Landing() {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate('/auth');
  };
  return <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <WelcomeNav />
      
      {/* Hero Section */}
      <HeroSection badge={{
      text: "New AI Features",
      action: {
        text: "Learn more",
        href: "#features"
      }
    }} title="Take control of your health with AI-powered insights" description="Track your vital health metrics and get personalized recommendations from our advanced AI assistant, all in one beautifully designed platform." actions={[{
      text: "Get Started",
      href: "/auth?mode=signup",
      variant: "glow",
      icon: <ArrowRight className="h-4 w-4" />
    }, {
      text: "View Demo",
      href: "/welcome",
      variant: "default"
    }]} image={{
      light: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      dark: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Health metrics dashboard preview"
    }} />

      {/* Features Section with anchor for navigation */}
      <div id="features">
        <FeaturesSection />
      </div>

      {/* How It Works Section with anchor for navigation */}
      <div id="how-it-works">
        <StepsSection />
      </div>

      {/* Metrics Preview Section with anchor for navigation */}
      <div id="metrics-preview">
        <MetricsPreview />
      </div>

      {/* AI Assistant Preview Section */}
      <AIAssistantPreview />

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary to-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to take control of your health?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of users who are transforming their health journey with HealthMetrics AI.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" onClick={handleGetStarted} variant="secondary" className="text-primary font-semibold">
              Get Started For Free
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/auth')} className="border-white hover:bg-white/20 text-sky-950">
              Sign In
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900 text-slate-400">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-white font-semibold flex items-center">
                <div className="h-5 w-6 bg-primary rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0 mr-2" />
                HealthMetrics AI
              </h3>
            </div>
            <div className="text-sm">
              &copy; {new Date().getFullYear()} HealthMetrics AI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>;
}