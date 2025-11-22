"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { skills } from "@/data/skills";
import { Clapperboard, Camera, Scissors, PenTool } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  clapperboard: Clapperboard,
  camera: Camera,
  scissors: Scissors,
  "pen-tool": PenTool,
};

export function Skills() {
  return (
    <section className="section-padding bg-background">
      <Container>
        <SectionTitle
          title="Zanat"
          subtitle="The Craft"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon] || Clapperboard;

            return (
              <ScrollReveal key={skill.id} delay={index * 0.1}>
                <motion.div whileHover={{ y: -5 }}>
                  <Card className="p-6 md:p-8 text-center h-full" gold>
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-4">
                      <Icon className="w-8 h-8 text-gold" />
                    </div>

                    {/* Name */}
                    <h3 className="text-xl font-serif font-bold text-text-primary mb-1">
                      {skill.name}
                    </h3>
                    <p className="text-text-muted text-sm mb-4">
                      {skill.nameEn}
                    </p>

                    {/* Description */}
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </Card>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
