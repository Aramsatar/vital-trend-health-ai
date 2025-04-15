
import * as React from "react";
import { cn } from "@/lib/utils";

interface MockupProps {
  children: React.ReactNode;
  className?: string;
  type?: "browser" | "responsive" | "phone";
}

export function Mockup({ children, className, type = "browser" }: MockupProps) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-background shadow-md",
        {
          "overflow-hidden": type === "browser",
          "mx-auto max-w-full": type === "responsive",
          "mx-auto max-w-[300px] overflow-hidden": type === "phone",
        },
        className
      )}
    >
      {type === "browser" && (
        <div className="flex items-center gap-1 border-b bg-muted/50 px-4 py-3">
          <div className="h-2 w-2 rounded-full bg-red-500" />
          <div className="h-2 w-2 rounded-full bg-yellow-500" />
          <div className="h-2 w-2 rounded-full bg-green-500" />
        </div>
      )}
      {children}
    </div>
  );
}

interface MockupFrameProps {
  children: React.ReactNode;
  className?: string;
  size?: "small" | "medium" | "large" | "full";
}

export function MockupFrame({
  children,
  className,
  size = "medium",
}: MockupFrameProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[1200px]",
        {
          "max-w-[800px]": size === "small",
          "max-w-[1000px]": size === "medium",
          "max-w-container": size === "large",
          "max-w-none": size === "full",
        },
        className
      )}
    >
      {children}
    </div>
  );
}
