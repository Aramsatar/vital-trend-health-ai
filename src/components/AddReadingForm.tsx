
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/sonner";
import { PlusCircle } from "lucide-react";

export function AddReadingForm() {
  const [open, setOpen] = useState(false);
  const [metricType, setMetricType] = useState("bloodPressure");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast("Reading added", {
      description: "Your health metric has been recorded successfully.",
    });
    
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Reading
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Reading</DialogTitle>
          <DialogDescription>
            Record a new health metric reading.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="metricType">Metric Type</Label>
              <Select
                value={metricType}
                onValueChange={setMetricType}
              >
                <SelectTrigger id="metricType">
                  <SelectValue placeholder="Select metric type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bloodPressure">Blood Pressure</SelectItem>
                  <SelectItem value="glucose">Glucose</SelectItem>
                  <SelectItem value="heartRate">Heart Rate</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {metricType === "bloodPressure" && (
              <>
                <div className="grid gap-2">
                  <Label htmlFor="systolic">Systolic (mmHg)</Label>
                  <Input
                    id="systolic"
                    type="number"
                    placeholder="120"
                    min={70}
                    max={200}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="diastolic">Diastolic (mmHg)</Label>
                  <Input
                    id="diastolic"
                    type="number"
                    placeholder="80"
                    min={40}
                    max={120}
                  />
                </div>
              </>
            )}

            {metricType === "glucose" && (
              <div className="grid gap-2">
                <Label htmlFor="glucose">Glucose Level (mg/dL)</Label>
                <Input
                  id="glucose"
                  type="number"
                  placeholder="100"
                  min={40}
                  max={400}
                />
              </div>
            )}

            {metricType === "heartRate" && (
              <div className="grid gap-2">
                <Label htmlFor="heartRate">Heart Rate (BPM)</Label>
                <Input
                  id="heartRate"
                  type="number"
                  placeholder="75"
                  min={40}
                  max={200}
                />
              </div>
            )}

            <div className="grid gap-2">
              <Label htmlFor="date">Date & Time</Label>
              <Input
                id="date"
                type="datetime-local"
                defaultValue={new Date().toISOString().slice(0, 16)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save Reading</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
