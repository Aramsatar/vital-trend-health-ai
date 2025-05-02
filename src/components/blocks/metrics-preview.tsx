
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChartLine, ChartBar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

// Mock data for the charts
const bloodPressureData = [
  { date: 'Apr 25', systolic: 130, diastolic: 85 },
  { date: 'Apr 26', systolic: 135, diastolic: 87 },
  { date: 'Apr 27', systolic: 132, diastolic: 84 },
  { date: 'Apr 28', systolic: 140, diastolic: 90 },
  { date: 'Apr 29', systolic: 135, diastolic: 85 },
  { date: 'Apr 30', systolic: 128, diastolic: 82 },
  { date: 'May 1', systolic: 129, diastolic: 83 },
];

const glucoseData = [
  { date: 'Apr 25', level: 92 },
  { date: 'Apr 26', level: 88 },
  { date: 'Apr 27', level: 95 },
  { date: 'Apr 28', level: 100 },
  { date: 'Apr 29', level: 98 },
  { date: 'Apr 30', level: 90 },
  { date: 'May 1', level: 93 },
];

const weightData = [
  { date: 'Apr 25', weight: 165 },
  { date: 'Apr 26', weight: 164.5 },
  { date: 'Apr 27', weight: 164 },
  { date: 'Apr 28', weight: 164 },
  { date: 'Apr 29', weight: 163.5 },
  { date: 'Apr 30', weight: 163 },
  { date: 'May 1', weight: 162.5 },
];

export function MetricsPreview() {
  const navigate = useNavigate();
  const [activeMetric, setActiveMetric] = useState('bloodPressure');

  const renderChart = () => {
    switch (activeMetric) {
      case 'bloodPressure':
        return (
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={bloodPressureData} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="date" tick={{ fontSize: 12, fill: 'var(--muted-foreground)' }} />
              <YAxis domain={[70, 160]} tick={{ fontSize: 12, fill: 'var(--muted-foreground)' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--card)', 
                  borderColor: 'var(--border)',
                  color: 'var(--foreground)',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="systolic" 
                stroke="#3b82f6" 
                strokeWidth={2} 
                dot={{ r: 0 }}
                activeDot={{ r: 4 }}
                name="Systolic"
              />
              <Line 
                type="monotone" 
                dataKey="diastolic" 
                stroke="#8b5cf6" 
                strokeWidth={2} 
                dot={{ r: 0 }}
                activeDot={{ r: 4 }}
                name="Diastolic"
              />
            </LineChart>
          </ResponsiveContainer>
        );
      case 'glucose':
        return (
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={glucoseData} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="date" tick={{ fontSize: 12, fill: 'var(--muted-foreground)' }} />
              <YAxis domain={[80, 120]} tick={{ fontSize: 12, fill: 'var(--muted-foreground)' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--card)', 
                  borderColor: 'var(--border)',
                  color: 'var(--foreground)',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }}
              />
              <defs>
                <linearGradient id="colorGlucose" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area 
                type="monotone" 
                dataKey="level" 
                stroke="#10b981" 
                fillOpacity={1}
                fill="url(#colorGlucose)"
                name="Glucose"
              />
            </AreaChart>
          </ResponsiveContainer>
        );
      case 'weight':
        return (
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={weightData} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="date" tick={{ fontSize: 12, fill: 'var(--muted-foreground)' }} />
              <YAxis domain={[160, 170]} tick={{ fontSize: 12, fill: 'var(--muted-foreground)' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--card)', 
                  borderColor: 'var(--border)',
                  color: 'var(--foreground)',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }}
              />
              <Bar dataKey="weight" fill="#f59e0b" name="Weight" />
            </BarChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

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
              variant={activeMetric === 'bloodPressure' ? "secondary" : "outline"}
              className={`cursor-pointer transition-colors ${
                activeMetric === 'bloodPressure' 
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "hover:bg-accent"
              }`}
              onClick={() => setActiveMetric('bloodPressure')}
            >
              <ChartLine className="h-3 w-3 mr-1" />
              Blood Pressure
            </Badge>
            <Badge 
              variant={activeMetric === 'glucose' ? "secondary" : "outline"}
              className={`cursor-pointer transition-colors ${
                activeMetric === 'glucose' 
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "hover:bg-accent"
              }`}
              onClick={() => setActiveMetric('glucose')}
            >
              <ChartLine className="h-3 w-3 mr-1" />
              Glucose
            </Badge>
            <Badge 
              variant={activeMetric === 'weight' ? "secondary" : "outline"}
              className={`cursor-pointer transition-colors ${
                activeMetric === 'weight' 
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "hover:bg-accent"
              }`}
              onClick={() => setActiveMetric('weight')}
            >
              <ChartBar className="h-3 w-3 mr-1" />
              Weight
            </Badge>
          </div>
          
          <div className="h-[300px] w-full bg-black/5 dark:bg-white/5 rounded-lg mb-8 flex items-center justify-center backdrop-blur-sm p-4">
            {renderChart()}
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
