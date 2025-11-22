import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "default";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    gold: "bg-gold/10 text-gold border border-gold/30",
    default: "bg-surface-light text-text-secondary border border-border",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-full",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
