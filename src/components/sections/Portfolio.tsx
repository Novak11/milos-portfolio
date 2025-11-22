"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Tabs } from "@/components/ui/Tabs";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import { portfolioCategories, projects } from "@/data/portfolio";
import { Play, Award } from "lucide-react";

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("commercials");

  const tabs = portfolioCategories.map((cat) => ({
    id: cat.id,
    label: cat.name,
  }));

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );

  return (
    <section id="portfolio" className="section-padding bg-surface">
      <Container>
        <SectionTitle
          title="Izabrani Radovi"
          subtitle="Selected Works"
        />

        {/* Category Tabs */}
        <ScrollReveal>
          <div className="flex justify-center mb-12">
            <Tabs
              tabs={tabs}
              activeTab={activeCategory}
              onTabChange={setActiveCategory}
            />
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="group h-full">
                  {/* Thumbnail placeholder */}
                  <div className="relative aspect-video bg-background overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-surface-light to-surface flex items-center justify-center">
                      <Play className="w-12 h-12 text-text-muted group-hover:text-gold transition-colors" />
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors" />

                    {/* Award badge for special projects */}
                    {project.description && (
                      <div className="absolute top-3 right-3">
                        <Badge variant="gold" className="gap-1">
                          <Award size={12} />
                          Nagrada
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-medium text-text-primary mb-1 group-hover:text-gold transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-text-muted text-sm">
                      {project.client}
                    </p>
                    {project.description && (
                      <p className="text-gold text-xs mt-2">
                        {project.description}
                      </p>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Project count */}
        <ScrollReveal delay={0.3}>
          <p className="text-center text-text-muted text-sm mt-8">
            {filteredProjects.length} projekata u kategoriji{" "}
            <span className="text-gold">
              {portfolioCategories.find((c) => c.id === activeCategory)?.name}
            </span>
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
