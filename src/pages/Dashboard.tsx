
import { PageHeader } from "@/components/PageHeader";
import { MetricCard } from "@/components/MetricCard";
import { MetricChart } from "@/components/MetricChart";
import { RecentReadings } from "@/components/RecentReadings";
import { AddReadingForm } from "@/components/AddReadingForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const userName = "Mike Taylor"; // This would normally come from auth context

  return (
    <div className="space-y-6 p-1 md:p-4 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{userName}</h1>
          <p className="text-muted-foreground">Monitor your health metrics and track your progress</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full pl-8 bg-background"
            />
          </div>
          <AddReadingForm />
        </div>
      </div>
      
      <Tabs defaultValue="overview" className="space-y-4" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="readings">Recent Readings</TabsTrigger>
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 border-primary/10 shadow-sm overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader className="pb-2 pt-4">
                <CardTitle className="text-base font-medium flex items-center justify-between">
                  <div>Blood Pressure</div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-primary">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary">
                      120/80
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      mmHg
                    </div>
                  </div>
                </div>
                <div className="h-[100px] w-full">
                  <MetricChart 
                    title="" 
                    metricType="bloodPressure"
                    className="h-full" 
                    showTitle={false}
                    showAxis={false}
                    minimalUI={true}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-500/10 shadow-sm overflow-hidden bg-gradient-to-br from-amber-500/5 to-amber-500/10">
              <CardHeader className="pb-2 pt-4">
                <CardTitle className="text-base font-medium flex items-center justify-between">
                  <div>Temperature</div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-amber-500">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-amber-500">
                      98.6
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      °F
                    </div>
                  </div>
                </div>
                <div className="h-[100px] w-full">
                  <MetricChart 
                    title="" 
                    metricType="heartRate"
                    className="h-full" 
                    showTitle={false}
                    showAxis={false}
                    minimalUI={true}
                    lineColor="#f59e0b"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-500/10 shadow-sm overflow-hidden bg-gradient-to-br from-indigo-500/5 to-indigo-500/10">
              <CardHeader className="pb-2 pt-4">
                <CardTitle className="text-base font-medium flex items-center justify-between">
                  <div>Heart Rate</div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-indigo-500">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-indigo-500">
                      72
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      BPM
                    </div>
                  </div>
                </div>
                <div className="h-[100px] w-full">
                  <MetricChart 
                    title="" 
                    metricType="glucose"
                    className="h-full" 
                    showTitle={false}
                    showAxis={false}
                    minimalUI={true}
                    lineColor="#6366f1"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {/* Detailed Blood Pressure Chart */}
            <Card className="shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Blood Pressure History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <MetricChart 
                    title="" 
                    metricType="bloodPressure"
                    className="h-full" 
                    showTitle={false}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Heart ECG Chart */}
            <Card className="shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Heart ECG</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <svg viewBox="0 0 800 200" className="w-full h-full">
                    <path
                      d="M0,100 Q50,100 60,50 T100,100 T140,100 T150,50 T200,100 T250,100 T300,100 Q310,100 320,50 T350,100 T400,100 T450,100 Q460,100 470,50 T500,100 T550,100 T600,100 Q610,100 620,50 T650,100 T700,100 T750,100 Q760,100 770,50 T800,100"
                      fill="none"
                      stroke="#6366f1"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="col-span-1 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Latest Readings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-muted/50 rounded-md">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-sm font-medium">Blood Pressure</span>
                    </div>
                    <span>120/80 mmHg</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted/50 rounded-md">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                      <span className="text-sm font-medium">Temperature</span>
                    </div>
                    <span>98.6 °F</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted/50 rounded-md">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                      <span className="text-sm font-medium">Heart Rate</span>
                    </div>
                    <span>72 BPM</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted/50 rounded-md">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-sm font-medium">Glucose</span>
                    </div>
                    <span>95 mg/dL</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="col-span-2 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Health Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-muted/50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold">110/70</div>
                    <div className="text-xs text-muted-foreground mt-1">Blood Pressure</div>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold">85</div>
                    <div className="text-xs text-muted-foreground mt-1">Heart Rate (BPM)</div>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold">95</div>
                    <div className="text-xs text-muted-foreground mt-1">Glucose (mg/dL)</div>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold">9,456</div>
                    <div className="text-xs text-muted-foreground mt-1">Blood Count (/mL)</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="readings" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <RecentReadings />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="appointments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Dr. Angela Taylor</h4>
                    <p className="text-sm text-muted-foreground">Heart Specialist</p>
                    <p className="text-sm">10:30am - 11:00am</p>
                  </div>
                  <Button>Join Call</Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Dr. Michael Rodriguez</h4>
                    <p className="text-sm text-muted-foreground">Nutritionist</p>
                    <p className="text-sm">2:00pm - 2:30pm</p>
                  </div>
                  <Button>Join Call</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
