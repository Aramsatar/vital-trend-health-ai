
import { useState } from "react";
import { format } from "date-fns";
import { 
  LineChart as RechartsLineChart, 
  BarChart as RechartsBarChart,
  Line, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Activity } from "lucide-react";

// Enhanced realistic data
const bloodPressureData = [
  { date: '01/01', systolic: 118, diastolic: 78 },
  { date: '01/02', systolic: 122, diastolic: 80 },
  { date: '01/03', systolic: 125, diastolic: 82 },
  { date: '01/04', systolic: 121, diastolic: 79 },
  { date: '01/05', systolic: 119, diastolic: 77 },
  { date: '01/06', systolic: 117, diastolic: 76 },
  { date: '01/07', systolic: 120, diastolic: 78 },
];

const glucoseData = [
  { date: '01/01', glucose: 92 },
  { date: '01/02', glucose: 98 },
  { date: '01/03', glucose: 105 },
  { date: '01/04', glucose: 101 },
  { date: '01/05', glucose: 97 },
  { date: '01/06', glucose: 95 },
  { date: '01/07', glucose: 93 },
];

const weightData = [
  { month: 'Jan', weight: 182 },
  { month: 'Feb', weight: 180 },
  { month: 'Mar', weight: 178 },
  { month: 'Apr', weight: 176 },
  { month: 'May', weight: 175 },
  { month: 'Jun', weight: 174 },
];

// Time range options
const timeRanges = [
  { id: "1W", label: "1W" },
  { id: "1M", label: "1M" },
  { id: "3M", label: "3M" },
  { id: "6M", label: "6M" },
  { id: "1Y", label: "1Y" },
  { id: "ALL", label: "All" }
];

export function Trends() {
  const [selectedRange, setSelectedRange] = useState("1W");
  const currentDate = new Date();

  return (
    <div className="space-y-6 p-1 md:p-4 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Health Trends</h1>
          <p className="text-muted-foreground">Track your health metrics over time</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarIcon className="h-4 w-4" />
          <span>{format(currentDate, "MMMM d, yyyy")}</span>
        </div>
      </div>

      {/* Time range selector */}
      <div className="flex overflow-x-auto pb-2">
        <div className="inline-flex items-center rounded-md bg-muted p-1">
          {timeRanges.map((range) => (
            <Button
              key={range.id}
              variant={selectedRange === range.id ? "default" : "ghost"}
              size="sm"
              className="px-3 h-8 text-xs"
              onClick={() => setSelectedRange(range.id)}
            >
              {range.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Charts grid */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="shadow-sm overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-medium flex items-center gap-2">
                <Icons.trendingUp className="h-4 w-4 text-primary" />
                Blood Pressure
              </CardTitle>
            </div>
            <CardDescription>Systolic and diastolic readings over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsLineChart 
                  data={bloodPressureData} 
                  margin={{ top: 5, right: 20, bottom: 25, left: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis domain={[30, 150]} />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="systolic" 
                    stroke="#8884d8" 
                    name="Systolic" 
                    strokeWidth={2}
                    dot={{ strokeWidth: 2 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="diastolic" 
                    stroke="#82ca9d" 
                    name="Diastolic" 
                    strokeWidth={2} 
                    dot={{ strokeWidth: 2 }}
                  />
                </RechartsLineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-medium flex items-center gap-2">
                <Activity className="h-4 w-4 text-primary" />
                Glucose Levels
              </CardTitle>
            </div>
            <CardDescription>Blood glucose readings over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsLineChart 
                  data={glucoseData} 
                  margin={{ top: 5, right: 20, bottom: 25, left: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis domain={[30, 140]} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="glucose" 
                    stroke="#ff7300" 
                    name="Glucose" 
                    strokeWidth={2}
                    activeDot={{ r: 6 }}
                  />
                </RechartsLineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm md:col-span-2 overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-medium flex items-center gap-2">
                <Icons.barChart className="h-4 w-4 text-primary" />
                Weight Tracking
              </CardTitle>
            </div>
            <CardDescription>Monthly weight measurements (lbs)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart 
                  data={weightData} 
                  margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" />
                  <YAxis domain={[0, 200]} />
                  <Tooltip />
                  <Legend />
                  <Bar 
                    dataKey="weight" 
                    fill="#8884d8" 
                    name="Weight (lbs)"
                    radius={[4, 4, 0, 0]}
                  />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
