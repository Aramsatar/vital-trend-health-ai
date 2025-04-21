
import { PageHeader } from "@/components/PageHeader";
import { TrendingUp } from "lucide-react";

export function Trends() {
  return (
    <div className="min-h-[70vh] flex flex-col gap-12 justify-center items-center bg-gradient-to-br from-[#9b87f5] via-[#E5DEFF] to-white rounded-xl shadow-md px-4 py-10 animate-fade-in">
      <div className="flex flex-col items-center">
        <TrendingUp className="w-16 h-16 text-violet-700 mb-4 drop-shadow-xl" />
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900/90 mb-3 drop-shadow-lg">
          Trends Analysis
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl text-center mb-4">
          Advanced trend analysis for your health data with personalized insights is coming soon!
        </p>
      </div>
      <div>
        <span className="inline-block px-4 py-2 rounded-lg bg-white/80 text-violet-700 shadow-inner font-semibold text-lg">
          🚀 Stay tuned for updates!
        </span>
      </div>
    </div>
  );
}
