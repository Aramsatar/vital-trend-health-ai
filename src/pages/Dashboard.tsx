
import { Grid } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { MetricCard } from "@/components/MetricCard";
import { MetricChart } from "@/components/MetricChart";
import { RecentReadings } from "@/components/RecentReadings";
import { AddReadingForm } from "@/components/AddReadingForm";

export function Dashboard() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Dashboard" 
        description="Overview of your health metrics"
      >
        <AddReadingForm />
      </PageHeader>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <MetricCard 
          title="Blood Pressure" 
          metricType="bloodPressure" 
        />
        <MetricCard 
          title="Glucose" 
          metricType="glucose" 
        />
        <MetricCard 
          title="Heart Rate" 
          metricType="heartRate" 
        />
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <MetricChart 
          title="Blood Pressure" 
          metricType="bloodPressure" 
        />
        <MetricChart 
          title="Glucose" 
          metricType="glucose" 
        />
        <MetricChart 
          title="Heart Rate" 
          metricType="heartRate" 
          className="md:col-span-2 lg:col-span-1"
        />
        <RecentReadings className="md:col-span-2 lg:col-span-1" />
      </div>
    </div>
  );
}
