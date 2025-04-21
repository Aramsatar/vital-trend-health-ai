
"use client";

import * as React from "react";
import { 
  ChevronLeft, 
  ChevronRight,
  ChevronDown,
  Clock
} from "lucide-react";
import { 
  format, 
  isEqual, 
  isToday, 
  startOfDay,
  startOfToday 
} from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CalendarEvent {
  id: number;
  name: string;
  time: string;
  datetime: string;
}

interface CalendarDay {
  day: Date;
  events: CalendarEvent[];
}

interface FullScreenCalendarProps {
  data: CalendarDay[];
  className?: string;
}

export function FullScreenCalendar({ data, className }: FullScreenCalendarProps) {
  const [calendarDate, setCalendarDate] = React.useState<Date | undefined>(startOfToday());
  const [selectedDay, setSelectedDay] = React.useState<Date>(startOfToday());

  // Filter events for the selected day
  const selectedDayEvents = React.useMemo(() => {
    const dayData = data.find((item) => 
      isEqual(startOfDay(item.day), startOfDay(selectedDay))
    );
    return dayData ? dayData.events : [];
  }, [data, selectedDay]);

  // Handle calendar date change
  function handleCalendarSelect(date: Date | undefined) {
    if (date) {
      setCalendarDate(date);
      setSelectedDay(date);
    }
  }

  return (
    <div className={cn("flex flex-col h-full bg-background border rounded-xl overflow-hidden", className)}>
      <div className="flex flex-col md:flex-row h-full">
        {/* Calendar section */}
        <div className="w-full md:w-auto border-r p-4">
          <div className="flex flex-col space-y-4 h-full">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">
                {format(selectedDay, "MMMM yyyy")}
              </h2>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    const today = startOfToday();
                    setCalendarDate(today);
                    setSelectedDay(today);
                  }}
                >
                  Today
                </Button>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm">
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={calendarDate}
                      onSelect={handleCalendarSelect}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="grid grid-cols-7 mt-4 text-center text-sm text-muted-foreground">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="h-8 flex items-center justify-center">
                  {day}
                </div>
              ))}
            </div>
            <ScrollArea>
              <div className="p-1">
                <Calendar
                  mode="single"
                  selected={calendarDate}
                  onSelect={handleCalendarSelect}
                  showOutsideDays={true}
                  className="p-0 pointer-events-auto"
                />
              </div>
            </ScrollArea>
          </div>
        </div>

        {/* Events section */}
        <div className="flex-1 overflow-hidden">
          <div className="flex flex-col h-full">
            <div className="border-b px-6 py-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">
                  {format(selectedDay, "EEEE, MMMM d")}
                </h2>
                <div className="flex space-x-1">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      const prevDay = new Date(selectedDay);
                      prevDay.setDate(prevDay.getDate() - 1);
                      setSelectedDay(prevDay);
                      setCalendarDate(prevDay);
                    }}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      const nextDay = new Date(selectedDay);
                      nextDay.setDate(nextDay.getDate() + 1);
                      setSelectedDay(nextDay);
                      setCalendarDate(nextDay);
                    }}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              {isToday(selectedDay) && (
                <div className="mt-1">
                  <span className="text-sm px-2 py-1 bg-primary/10 text-primary rounded-md font-medium">
                    Today
                  </span>
                </div>
              )}
            </div>

            {/* Events List */}
            <ScrollArea className="flex-1 p-6">
              {selectedDayEvents.length > 0 ? (
                <div className="space-y-4">
                  {selectedDayEvents.map((event) => (
                    <div
                      key={event.id}
                      className="flex flex-col space-y-2 bg-card border p-4 rounded-lg"
                    >
                      <div className="font-medium text-lg">{event.name}</div>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="mr-2 h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-muted-foreground py-12">
                  <div className="text-4xl mb-2">📅</div>
                  <h3 className="text-xl font-medium mb-1">No Events</h3>
                  <p className="text-center text-sm">
                    No events scheduled for {format(selectedDay, "MMMM d, yyyy")}.
                  </p>
                </div>
              )}
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
}

