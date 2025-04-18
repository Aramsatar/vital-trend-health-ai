
import { PageHeader } from "@/components/PageHeader";
import { MetricCard } from "@/components/MetricCard";
import { MetricChart } from "@/components/MetricChart";
import { RecentReadings } from "@/components/RecentReadings";
import { AddReadingForm } from "@/components/AddReadingForm";

export function Dashboard() {
  return (
    <div className="space-y-8 p-1 md:p-4 animate-fade-in">
      <PageHeader 
        title="Dashboard" 
        description="Overview of your health metrics"
        className="mb-8"
      >
        <AddReadingForm />
      </PageHeader>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <MetricCard 
          title="Blood Pressure" 
          metricType="bloodPressure"
          className="transition-all duration-200 hover:scale-[1.02]" 
        />
        <MetricCard 
          title="Glucose" 
          metricType="glucose"
          className="transition-all duration-200 hover:scale-[1.02]" 
        />
        <MetricCard 
          title="Heart Rate" 
          metricType="heartRate"
          className="transition-all duration-200 hover:scale-[1.02]" 
        />
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <MetricChart 
          title="Blood Pressure" 
          metricType="bloodPressure"
          className="rounded-xl border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md" 
        />
        <MetricChart 
          title="Glucose" 
          metricType="glucose"
          className="rounded-xl border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md" 
        />
        <MetricChart 
          title="Heart Rate" 
          metricType="heartRate"
          className="rounded-xl border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md md:col-span-2 lg:col-span-1"
        />
        <div className="md:col-span-2 lg:col-span-1">
          <RecentReadings className="rounded-xl border bg-card h-full p-6 shadow-sm transition-all duration-200 hover:shadow-md" />
        </div>
      </div>
    </div>
  );
}
