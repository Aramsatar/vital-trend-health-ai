
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Trends() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Trends" 
        description="Analytics and insights about your health"
      />
      
      <Card className="p-6 text-center">
        <h3 className="text-lg font-medium">Trends Analysis Coming Soon</h3>
        <p className="text-muted-foreground mt-2">
          We're working on advanced trend analysis for your health data. 
          Check back soon for personalized insights and recommendations.
        </p>
      </Card>
    </div>
  );
}
