
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BloodPressureReading,
  GlucoseReading,
  HeartRateReading,
  bloodPressureData, 
  glucoseData, 
  heartRateData 
} from "@/data/mockData";

export function RecentReadings() {
  // Combine all readings and sort by date
  const allReadings = [
    ...bloodPressureData.slice(0, 10).map(reading => ({
      ...reading,
      type: 'bloodPressure' as const,
      value: `${reading.systolic}/${reading.diastolic} mmHg`,
    })),
    ...glucoseData.slice(0, 10).map(reading => ({
      ...reading,
      type: 'glucose' as const,
      value: `${reading.level} mg/dL`,
    })),
    ...heartRateData.slice(0, 10).map(reading => ({
      ...reading,
      type: 'heartRate' as const,
      value: `${reading.rate} BPM`,
    })),
  ].sort((a, b) => b.date.getTime() - a.date.getTime()).slice(0, 10);

  const getMetricLabel = (type: string) => {
    switch (type) {
      case 'bloodPressure':
        return 'Blood Pressure';
      case 'glucose':
        return 'Glucose';
      case 'heartRate':
        return 'Heart Rate';
      default:
        return 'Unknown';
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Readings</CardTitle>
      </CardHeader>
      <CardContent className="px-2">
        <div className="divide-y">
          {allReadings.map((reading, i) => (
            <div key={i} className="py-3 px-2">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{getMetricLabel(reading.type)}</p>
                  <p className="text-sm text-muted-foreground">
                    {format(reading.date, "MMM dd, yyyy 'at' h:mm a")}
                  </p>
                </div>
                <div className="text-right">
                  <p className={`font-medium ${getStatusClass(reading.status)}`}>
                    {reading.value}
                  </p>
                  <p className="text-sm capitalize text-muted-foreground">
                    {reading.status}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
