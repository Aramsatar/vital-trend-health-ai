
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { MetricType, getLatestReading, getAverageReading } from "@/data/mockData";

interface MetricCardProps {
  title: string;
  metricType: MetricType;
  className?: string;
}

export function MetricCard({ title, metricType, className }: MetricCardProps) {
  const latestReading = getLatestReading(metricType);
  const averageReading = getAverageReading(metricType);
  
  const renderMetricValue = () => {
    if (!latestReading) return "No data";
    
    switch (metricType) {
      case 'bloodPressure': {
        const bp = latestReading as any;
        return (
          <div className="flex items-baseline gap-1">
            <span className={`text-2xl font-bold ${getStatusClass(bp.status)}`}>
              {bp.systolic}/{bp.diastolic}
            </span>
            <span className="text-sm text-muted-foreground">mmHg</span>
          </div>
        );
      }
      case 'glucose': {
        const glucose = latestReading as any;
        return (
          <div className="flex items-baseline gap-1">
            <span className={`text-2xl font-bold ${getStatusClass(glucose.status)}`}>
              {glucose.level}
            </span>
            <span className="text-sm text-muted-foreground">mg/dL</span>
          </div>
        );
      }
      case 'heartRate': {
        const hr = latestReading as any;
        return (
          <div className="flex items-baseline gap-1">
            <span className={`text-2xl font-bold ${getStatusClass(hr.status)}`}>
              {hr.rate}
            </span>
            <span className="text-sm text-muted-foreground">BPM</span>
          </div>
        );
      }
      default:
        return "Unknown metric";
    }
  };
  
  const renderAverageValue = () => {
    if (!averageReading) return "N/A";
    
    switch (metricType) {
      case 'bloodPressure': {
        const avg = averageReading as any;
        return `${avg.systolic}/${avg.diastolic} mmHg`;
      }
      case 'glucose':
        return `${averageReading} mg/dL`;
      case 'heartRate':
        return `${averageReading} BPM`;
      default:
        return "N/A";
    }
  };
  
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'normal':
        return 'metric-normal';
      case 'elevated':
        return 'metric-elevated';
      case 'high':
        return 'metric-high';
      default:
        return '';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'normal':
        return (
          <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
            Normal
          </span>
        );
      case 'elevated':
        return (
          <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">
            Elevated
          </span>
        );
      case 'high':
        return (
          <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100">
            High
          </span>
        );
      default:
        return null;
    }
  };
  
  return (
    <Card className={cn("shadow-sm", className)}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{title}</CardTitle>
          {latestReading && getStatusLabel((latestReading as any).status)}
        </div>
        <CardDescription>Latest reading</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {renderMetricValue()}
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">30-day average</span>
            <span className="font-medium">{renderAverageValue()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
