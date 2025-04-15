
import * as React from "react";
import { cn } from "@/lib/utils";

interface GlowProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "bottom" | "top";
}

export function Glow({
  className,
  variant = "bottom",
  ...props
}: GlowProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute left-1/2 z-0 select-none -translate-x-1/2",
        variant === "bottom" ? "-bottom-40" : "-top-40",
        "h-[200px] w-[600px] sm:w-[800px] md:w-[1000px] lg:w-[1200px]",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "h-full w-full rounded-[50%] bg-primary/20 blur-[100px]",
          "dark:bg-primary/10"
        )}
      />
    </div>
  );
}
