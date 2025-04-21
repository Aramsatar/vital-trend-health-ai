
import { CalendarDemo } from "./CalendarDemo";

export function Calendar() {
  return (
    <div className="flex flex-1 min-h-[70vh] items-center justify-center py-6 animate-fade-in">
      <div className="w-full max-w-5xl">
        <CalendarDemo />
      </div>
    </div>
  );
}
