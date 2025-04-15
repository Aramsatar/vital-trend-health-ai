
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Heart, Activity, LineChart, Shield, Bell, Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { useState } from "react";

export function Landing() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(0);
  
  const handleGetStarted = () => {
    navigate('/auth');
  };

  const handleSignIn = () => {
    navigate('/auth');
  };

  const features = [
    {
      icon: <Brain className="w-10 h-10 text-primary" />,
      title: "AI Health Assistant",
      description: "Get personalized health insights and recommendations based on your metrics."
    },
    {
      icon: <Activity className="w-10 h-10 text-primary" />,
      title: "Comprehensive Metrics",
      description: "Track blood pressure, glucose levels, weight, sleep, and more."
    },
    {
      icon: <Heart className="w-10 h-10 text-primary" />,
      title: "Heart Health",
      description: "Monitor cardiovascular health with detailed analysis and trends."
    },
    {
      icon: <Bell className="w-10 h-10 text-primary" />,
      title: "Medication Reminders",
      description: "Never miss a dose with customizable reminders and tracking."
    },
    {
      icon: <LineChart className="w-10 h-10 text-primary" />,
      title: "Data Visualization",
      description: "View your health journey with beautiful charts and insightful reports."
    },
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: "Privacy Focused",
      description: "Your health data is encrypted and secure, giving you peace of mind."
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Track Your Metrics",
      description: "Record your vital health metrics including blood pressure, glucose levels, and heart rate in a few simple taps."
    },
    {
      number: 2,
      title: "Visualize Your Health",
      description: "See your health trends with beautiful charts and graphs that make understanding your data simple and intuitive."
    },
    {
      number: 3,
      title: "Get Smart Insights",
      description: "Receive personalized health insights and recommendations based on your metrics and health history."
    },
    {
      number: 4,
      title: "Share With Your Doctor",
      description: "Easily share your health metrics and insights with your healthcare provider for better informed care."
    },
    {
      number: 5,
      title: "Set Health Goals",
      description: "Set personalized health goals and track your progress with motivating visualizations and achievements."
    }
  ];

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
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-3 py-1 text-sm">Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your complete health companion</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Track your vital health metrics and get personalized AI-powered insights, all in one beautifully designed platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="rounded-full bg-primary/10 p-3 w-16 h-16 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Take control of your health</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Our platform makes it easy to monitor, understand, and improve your health with these simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-4 ${activeSection === index ? 'opacity-100' : 'opacity-60'}`}
                  onMouseEnter={() => setActiveSection(index)}
                >
                  <div className="rounded-full bg-primary/10 border-2 border-primary flex-shrink-0 w-12 h-12 flex items-center justify-center text-primary font-semibold">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Carousel>
                <CarouselContent>
                  {[
                    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
                    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
                    "https://images.unsplash.com/photo-1576091160550-2173dba999ef"
                  ].map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <div className="rounded-xl overflow-hidden">
                          <img src={image} alt={`Health metrics screenshot ${index + 1}`} className="w-full h-auto" />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Preview Section */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-3 py-1 text-sm">Metrics</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Track what matters</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Monitor all your vital health metrics in one place with beautiful visualizations and actionable insights.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-slate-700">
            <div className="mb-6 flex flex-wrap gap-2 justify-center">
              <Badge variant="secondary" className="bg-primary text-white hover:bg-primary/90 cursor-pointer">Blood Pressure</Badge>
              <Badge variant="outline" className="cursor-pointer">Glucose</Badge>
              <Badge variant="outline" className="cursor-pointer">Weight</Badge>
            </div>
            
            <div className="h-64 w-full bg-slate-100 dark:bg-slate-700 rounded-lg mb-8 flex items-center justify-center">
              <img 
                src="public/lovable-uploads/72aa061a-c8a1-435b-9061-7ff855a452be.png" 
                alt="Health metrics chart"
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Blood Pressure</p>
                <p className="text-2xl font-semibold">140/90</p>
                <div className="flex items-center text-health-elevated">
                  <ArrowRight className="rotate-45 w-4 h-4 mr-1" />
                  <span className="text-sm">5%</span>
                </div>
                <p className="text-xs text-slate-500">Last measured today</p>
              </div>
              
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Glucose</p>
                <p className="text-2xl font-semibold">105 mg/dL</p>
                <div className="flex items-center text-health-normal">
                  <ArrowRight className="rotate-[135deg] w-4 h-4 mr-1" />
                  <span className="text-sm">3%</span>
                </div>
                <p className="text-xs text-slate-500">Last measured yesterday</p>
              </div>
              
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Weight</p>
                <p className="text-2xl font-semibold">165 lbs</p>
                <div className="flex items-center text-slate-500">
                  <ArrowRight className="rotate-90 w-4 h-4 mr-1" />
                  <span className="text-sm">0%</span>
                </div>
                <p className="text-xs text-slate-500">Last measured 2 days ago</p>
              </div>
            </div>
            
            <div className="flex justify-center mt-4">
              <Button variant="outline" onClick={() => navigate('/metrics')}>
                View Detailed Metrics
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant Preview Section */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-3 py-1 text-sm">AI Assistant</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your personal health guide</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Get personalized health recommendations and insights from our AI-powered assistant, trained on the latest medical research.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 max-w-2xl mx-auto overflow-hidden">
            <div className="bg-primary p-4 text-white flex items-center gap-2">
              <Brain className="w-5 h-5" />
              <h3 className="font-semibold">AI Health Assistant</h3>
            </div>
            
            <div className="p-4 space-y-4 min-h-[300px]">
              <div className="flex gap-3">
                <div className="bg-primary/20 p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                  <Brain className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                  <p>Hi there! I'm your healthcare assistant. How can I help you today?</p>
                </div>
              </div>
              
              <div className="flex gap-3 justify-end">
                <div className="bg-primary/10 p-3 rounded-lg rounded-tr-none max-w-[80%]">
                  <p>I've been having headaches lately and my blood pressure readings are higher than normal. Should I be concerned?</p>
                </div>
                <div className="bg-blue-500 p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                  <div className="text-white text-sm">You</div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="bg-primary/20 p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                  <Brain className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                  <p>I see you're concerned about headaches and elevated blood pressure. Based on your recent readings (145/92), this is indeed higher than your normal range (120/80). While I can't diagnose conditions, persistent headaches with elevated blood pressure should be discussed with your healthcare provider.</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t border-slate-200 dark:border-slate-700 flex gap-2">
              <input 
                type="text" 
                placeholder="Type your health question here..." 
                className="flex-1 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="sm">Send</Button>
            </div>
            <div className="px-4 pb-4 text-xs text-slate-500 text-center">
              Your data is private and secure. We never share your health information.
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            <Button onClick={() => navigate('/chat')}>
              Talk to Your AI Assistant
            </Button>
          </div>
        </div>
      </section>

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
