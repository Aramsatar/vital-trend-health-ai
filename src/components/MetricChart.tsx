
import { useState } from "react";
import { format } from "date-fns";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MetricType, bloodPressureData, glucoseData, heartRateData } from "@/data/mockData";

interface MetricChartProps {
  metricType: MetricType;
  title: string;
  className?: string;
  showTitle?: boolean;
  showAxis?: boolean;
  minimalUI?: boolean;
  lineColor?: string;
}

export function MetricChart({ 
  metricType, 
  title, 
  className, 
  showTitle = true, 
  showAxis = true,
  minimalUI = false,
  lineColor
}: MetricChartProps) {
  const [timeRange, setTimeRange] = useState<"7d" | "14d" | "30d">("7d");
  
  const getChartData = () => {
    let data;
    switch (metricType) {
      case 'bloodPressure':
        data = bloodPressureData;
        break;
      case 'glucose':
        data = glucoseData;
        break;
      case 'heartRate':
        data = heartRateData;
        break;
      default:
        data = [];
    }
    
    const range = timeRange === "7d" ? 7 : timeRange === "14d" ? 14 : 30;
    return data
      .slice(0, range)
      .map(item => ({
        ...item,
        date: format(item.date, "MMM dd"),
      }))
      .reverse();
  };
  
  const renderChart = () => {
    const data = getChartData();
    
    switch (metricType) {
      case 'bloodPressure':
        return (
          <ResponsiveContainer width="100%" height={minimalUI ? 100 : 300}>
            <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              {showAxis && <CartesianGrid strokeDasharray="3 3" vertical={false} />}
              {showAxis && <XAxis dataKey="date" tick={{ fontSize: 12 }} />}
              {showAxis && <YAxis domain={[60, 160]} tick={{ fontSize: 12 }} />}
              {!minimalUI && (
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--border)",
                    borderRadius: "var(--radius)",
                  }}
                />
              )}
              <Line
                type="monotone"
                dataKey="systolic"
                stroke={lineColor || "#3b82f6"}
                strokeWidth={2}
                name="Systolic"
                dot={{ r: 0 }}
                activeDot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="diastolic"
                stroke={lineColor || "#8b5cf6"}
                strokeWidth={2}
                name="Diastolic"
                dot={{ r: 0 }}
                activeDot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        );
      case 'glucose':
        return (
          <ResponsiveContainer width="100%" height={minimalUI ? 100 : 300}>
            <AreaChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              {showAxis && <CartesianGrid strokeDasharray="3 3" vertical={false} />}
              {showAxis && <XAxis dataKey="date" tick={{ fontSize: 12 }} />}
              {showAxis && <YAxis domain={[70, 150]} tick={{ fontSize: 12 }} />}
              {!minimalUI && (
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--border)",
                    borderRadius: "var(--radius)",
                  }}
                />
              )}
              <defs>
                <linearGradient id="colorGlucose" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={lineColor || "#10b981"} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={lineColor || "#10b981"} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="level"
                stroke={lineColor || "#10b981"}
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorGlucose)"
                name="Glucose"
              />
            </AreaChart>
          </ResponsiveContainer>
        );
      case 'heartRate':
        return (
          <ResponsiveContainer width="100%" height={minimalUI ? 100 : 300}>
            <AreaChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              {showAxis && <CartesianGrid strokeDasharray="3 3" vertical={false} />}
              {showAxis && <XAxis dataKey="date" tick={{ fontSize: 12 }} />}
              {showAxis && <YAxis domain={[50, 110]} tick={{ fontSize: 12 }} />}
              {!minimalUI && (
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--border)",
                    borderRadius: "var(--radius)",
                  }}
                />
              )}
              <defs>
                <linearGradient id="colorHeartRate" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={lineColor || "#ef4444"} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={lineColor || "#ef4444"} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="rate"
                stroke={lineColor || "#ef4444"}
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorHeartRate)"
                name="Heart Rate"
              />
            </AreaChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };
  
  return (
    <Card className={className}>
      {showTitle && (
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg">{title}</CardTitle>
          {!minimalUI && (
            <Tabs defaultValue="7d" value={timeRange} onValueChange={(value) => setTimeRange(value as any)}>
              <TabsList className="grid grid-cols-3 h-8">
                <TabsTrigger value="7d" className="text-xs">7 days</TabsTrigger>
                <TabsTrigger value="14d" className="text-xs">14 days</TabsTrigger>
                <TabsTrigger value="30d" className="text-xs">30 days</TabsTrigger>
              </TabsList>
            </Tabs>
          )}
        </CardHeader>
      )}
      <CardContent>{renderChart()}</CardContent>
    </Card>
  );
}
