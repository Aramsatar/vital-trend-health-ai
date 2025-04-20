
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function MetricsPreview() {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-background/80">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 px-3 py-1 text-sm bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
            Metrics
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Track what matters</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Monitor all your vital health metrics in one place with beautiful visualizations and actionable insights.
          </p>
        </div>

        <div className="bg-card rounded-xl shadow-lg p-8 border border-border backdrop-blur-sm">
          <div className="mb-6 flex flex-wrap gap-3 justify-center">
            <Badge 
              variant="secondary" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer transition-colors"
            >
              Blood Pressure
            </Badge>
            <Badge 
              variant="outline" 
              className="cursor-pointer hover:bg-accent transition-colors"
            >
              Glucose
            </Badge>
            <Badge 
              variant="outline" 
              className="cursor-pointer hover:bg-accent transition-colors"
            >
              Weight
            </Badge>
          </div>
          
          <div className="h-64 w-full bg-black/5 dark:bg-white/5 rounded-lg mb-8 flex items-center justify-center backdrop-blur-sm">
            <img 
              src="/lovable-uploads/72aa061a-c8a1-435b-9061-7ff855a452be.png" 
              alt="Health metrics chart"
              className="w-full h-full object-contain p-4"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground font-medium mb-2">Blood Pressure</p>
              <p className="text-2xl font-semibold text-foreground mb-2">140/90</p>
              <div className="flex items-center text-health-elevated mb-1">
                <ArrowRight className="rotate-45 w-4 h-4 mr-1" />
                <span className="text-sm">5%</span>
              </div>
              <p className="text-xs text-muted-foreground">Last measured today</p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground font-medium mb-2">Glucose</p>
              <p className="text-2xl font-semibold text-foreground mb-2">105 mg/dL</p>
              <div className="flex items-center text-health-normal mb-1">
                <ArrowRight className="rotate-[135deg] w-4 h-4 mr-1" />
                <span className="text-sm">3%</span>
              </div>
              <p className="text-xs text-muted-foreground">Last measured yesterday</p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground font-medium mb-2">Weight</p>
              <p className="text-2xl font-semibold text-foreground mb-2">165 lbs</p>
              <div className="flex items-center text-muted-foreground mb-1">
                <ArrowRight className="rotate-90 w-4 h-4 mr-1" />
                <span className="text-sm">0%</span>
              </div>
              <p className="text-xs text-muted-foreground">Last measured 2 days ago</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button 
              variant="outline" 
              onClick={() => navigate('/metrics')}
              className="hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              View Detailed Metrics
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
