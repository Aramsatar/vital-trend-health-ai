
import { PageHeader } from "@/components/PageHeader";
import { BarChart, Calendar as CalendarIcon, LineChart, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Icons } from "@/components/ui/icons";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

// Sample data for charts
const bloodPressureData = [
  { date: '01/01', systolic: 120, diastolic: 80 },
  { date: '01/02', systolic: 122, diastolic: 81 },
  { date: '01/03', systolic: 125, diastolic: 82 },
  { date: '01/04', systolic: 123, diastolic: 80 },
  { date: '01/05', systolic: 121, diastolic: 79 },
  { date: '01/06', systolic: 119, diastolic: 78 },
  { date: '01/07', systolic: 120, diastolic: 80 },
];

const glucoseData = [
  { date: '01/01', glucose: 95 },
  { date: '01/02', glucose: 99 },
  { date: '01/03', glucose: 103 },
  { date: '01/04', glucose: 101 },
  { date: '01/05', glucose: 97 },
  { date: '01/06', glucose: 96 },
  { date: '01/07', glucose: 95 },
];

const weightData = [
  { month: 'Jan', weight: 185 },
  { month: 'Feb', weight: 182 },
  { month: 'Mar', weight: 180 },
  { month: 'Apr', weight: 178 },
  { month: 'May', weight: 177 },
  { month: 'Jun', weight: 176 },
];

const timeRanges = ["1W", "1M", "3M", "6M", "1Y", "All"];

export function Trends() {
  const [selectedRange, setSelectedRange] = useState("1W");
  const currentDate = new Date();

  return (
    <div className="space-y-8 p-1 md:p-4 animate-fade-in">
      <PageHeader
        title="Health Trends"
        description="Track your health metrics over time"
        className="mb-8"
      >
        <div className="flex items-center gap-2">
          <CalendarIcon className="h-4 w-4" />
          <span className="text-sm font-medium">
            {format(currentDate, "MMMM d, yyyy")}
          </span>
        </div>
      </PageHeader>

      {/* Time range selector */}
      <div className="flex flex-wrap gap-2">
        {timeRanges.map((range) => (
          <Button
            key={range}
            variant={selectedRange === range ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedRange(range)}
          >
            {range}
          </Button>
        ))}
      </div>

      {/* Charts grid */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Blood Pressure
              </CardTitle>
            </div>
            <CardDescription>Systolic and diastolic readings over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RechartsLineChart data={bloodPressureData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="systolic" stroke="#8884d8" name="Systolic" dot={{ strokeWidth: 2 }} />
                <Line type="monotone" dataKey="diastolic" stroke="#82ca9d" name="Diastolic" dot={{ strokeWidth: 2 }} />
              </RechartsLineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <LineChart className="h-5 w-5 text-primary" />
                Glucose Levels
              </CardTitle>
            </div>
            <CardDescription>Blood glucose readings over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RechartsLineChart data={glucoseData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="glucose" stroke="#ff7300" name="Glucose" activeDot={{ r: 6 }} />
              </RechartsLineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-sm md:col-span-2">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <BarChart className="h-5 w-5 text-primary" />
                Weight Tracking
              </CardTitle>
            </div>
            <CardDescription>Monthly weight measurements</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RechartsBarChart data={weightData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="weight" fill="#8884d8" name="Weight (lbs)" />
              </RechartsBarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
