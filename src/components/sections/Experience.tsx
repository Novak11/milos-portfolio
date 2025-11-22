"use client";

import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { experiences } from "@/data/experience";
import { Briefcase, MapPin, Calendar, CheckCircle } from "lucide-react";

export function Experience() {
  return (
    <section className="section-padding bg-surface">
      <Container>
        <SectionTitle
          title="Filmografija"
          subtitle="Professional Experience"
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <ScrollReveal key={exp.id} delay={index * 0.15}>
              <div
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-gold rounded-full border-4 border-background -translate-x-1/2 md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-8 md:pl-0`}>
                  <Card className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                          <Briefcase className="w-5 h-5 text-gold" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-text-primary">
                            {exp.title}
                          </h3>
                          <p className="text-gold text-sm">{exp.company}</p>
                        </div>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-text-muted">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.startDate} – {exp.endDate}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary text-sm mb-4">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    {exp.highlights && (
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-text-secondary"
                          >
                            <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
