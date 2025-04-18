
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function MetricsPreview() {
  const navigate = useNavigate();

  return (
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
  );
}
