
import { PageHeader } from "@/components/PageHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MetricChart } from "@/components/MetricChart";
import { AddReadingForm } from "@/components/AddReadingForm";

export function Metrics() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Metrics" 
        description="Detailed view of your health metrics"
      >
        <AddReadingForm />
      </PageHeader>
      
      <Tabs defaultValue="bloodPressure" className="space-y-4">
        <TabsList>
          <TabsTrigger value="bloodPressure">Blood Pressure</TabsTrigger>
          <TabsTrigger value="glucose">Glucose</TabsTrigger>
          <TabsTrigger value="heartRate">Heart Rate</TabsTrigger>
        </TabsList>
        
        <TabsContent value="bloodPressure">
          <MetricChart 
            title="Blood Pressure History" 
            metricType="bloodPressure" 
          />
        </TabsContent>
        
        <TabsContent value="glucose">
          <MetricChart 
            title="Glucose History" 
            metricType="glucose" 
          />
        </TabsContent>
        
        <TabsContent value="heartRate">
          <MetricChart 
            title="Heart Rate History" 
            metricType="heartRate" 
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
