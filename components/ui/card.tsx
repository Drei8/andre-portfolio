import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "border-t-0 border-r border-b border-l border-r-black/[0.06] border-b-black/[0.06] border-l-black/[0.03] dark:border-r-white/[0.07] dark:border-b-white/[0.07] dark:border-l-white/[0.035] bg-card text-card-foreground transition-all duration-300 hover:border-r-black/[0.14] hover:border-b-black/[0.14] hover:border-l-black/[0.08] dark:hover:border-r-white/[0.14] dark:hover:border-b-white/[0.14] dark:hover:border-l-white/[0.08] hover:shadow-[0_2px_10px_rgba(0,0,0,0.07)] dark:hover:shadow-[0_2px_10px_rgba(0,0,0,0.4)]",
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex items-center gap-2 p-4 pb-2", className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("text-lg font-bold text-foreground", className)} {...props} />;
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-4 pt-2", className)} {...props} />;
}
