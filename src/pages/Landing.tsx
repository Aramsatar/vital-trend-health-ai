
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FeaturesSection } from "@/components/blocks/features-section";
import { StepsSection } from "@/components/blocks/steps-section";
import { MetricsPreview } from "@/components/blocks/metrics-preview";
import { AIAssistantPreview } from "@/components/blocks/ai-assistant-preview";

export function Landing() {
  const navigate = useNavigate();
  
  const handleGetStarted = () => {
    navigate('/auth');
  };

  const handleSignIn = () => {
    navigate('/auth');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
              HealthMetrics AI
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              The only platform that combines advanced health metrics tracking with AI-powered insights for your wellness journey.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" onClick={handleGetStarted} className="text-md">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/welcome')} className="text-md">
                View Demo
              </Button>
            </div>
          </div>
          <div className="mt-12 rounded-xl overflow-hidden shadow-2xl bg-white dark:bg-slate-800">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
              alt="Health metrics dashboard preview"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* How It Works Section */}
      <StepsSection />

      {/* Metrics Preview Section */}
      <MetricsPreview />

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
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20" onClick={handleSignIn}>
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
    </div>
  );
}
