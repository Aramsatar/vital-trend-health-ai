
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Calendar() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Calendar" 
        description="Schedule and track health-related events"
      />
      
      <Card className="p-6 text-center">
        <h3 className="text-lg font-medium">Calendar View Coming Soon</h3>
        <p className="text-muted-foreground mt-2">
          A comprehensive calendar for scheduling and tracking your health events
          is currently in development. Check back soon!
        </p>
      </Card>
    </div>
  );
}
