import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionTitle({ title, subtitle, className, align = "center" }: SectionTitleProps) {
  return (
    <div className={cn("mb-12 md:mb-16", align === "center" && "text-center", className)}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-lg">{subtitle}</p>
      )}
      <div className={cn("w-24 h-1 bg-gold mt-6", align === "center" && "mx-auto")} />
    </div>
  );
}
