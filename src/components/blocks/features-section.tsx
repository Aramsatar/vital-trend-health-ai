
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Activity, Heart, Bell, LineChart, Shield } from "lucide-react";

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

export function FeaturesSection() {
  return (
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
  );
}
