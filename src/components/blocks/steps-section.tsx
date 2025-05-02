
import { useState, useEffect } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

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

export function StepsSection() {
  const [activeSection, setActiveSection] = useState(0);
  
  // Auto-rotate through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % steps.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
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
                className={`flex items-start gap-4 transition-opacity duration-500 ${activeSection === index ? 'opacity-100' : 'opacity-60'}`}
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
  );
}
