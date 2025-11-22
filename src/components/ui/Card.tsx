"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gold?: boolean;
}

export function Card({ children, className, hover = true, gold = false }: CardProps) {
  return (
    <motion.div
      className={cn(
        "bg-surface rounded-lg border overflow-hidden transition-all duration-300",
        gold ? "border-gold/30" : "border-border/50",
        hover && "hover:border-gold/50 hover:shadow-lg hover:shadow-gold/10",
        className
      )}
      whileHover={hover ? { y: -5 } : {}}
    >
      {children}
    </motion.div>
  );
}

export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("p-6", className)}>{children}</div>;
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("px-6 pb-6", className)}>{children}</div>;
}
