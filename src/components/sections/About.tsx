"use client";

import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { profile } from "@/data/profile";
import { education, additionalTraining } from "@/data/education";
import { GraduationCap, Award, Waves, Music } from "lucide-react";
import Image from "next/image";

const highlights = [
  {
    icon: GraduationCap,
    title: "Diplomirana režija",
    description: "Akademija umetnosti Beograd",
  },
  {
    icon: Award,
    title: "Zlatni Vitez",
    description: "Deca besmrtnosti",
  },
  {
    icon: Waves,
    title: "SCUBA Certified",
    description: "Podvodno snimanje",
  },
  {
    icon: Music,
    title: "Muzička škola",
    description: "Klavirski odsek",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-surface">
      <Container>
        <SectionTitle
          title="O Reditelju"
          subtitle="Kreativna vizija i profesionalno iskustvo"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <ScrollReveal>
            <div className="relative">
              {/* Frame effect */}
              <div className="absolute -inset-4 border-2 border-gold/20 rounded-lg" />
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src="/images/milos.jpg"
                  alt={profile.name}
                  fill
                  className="object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <div>
            <ScrollReveal delay={0.2}>
              <h3 className="text-2xl font-serif font-bold text-text-primary mb-4">
                {profile.name}
              </h3>
              <p className="text-gold text-sm uppercase tracking-wider mb-6">
                {profile.production}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="prose prose-invert max-w-none mb-8">
                <p className="text-text-secondary leading-relaxed whitespace-pre-line">
                  {profile.about}
                </p>
              </div>
            </ScrollReveal>

            {/* Highlights */}
            <ScrollReveal delay={0.4}>
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="p-4 bg-background rounded-lg border border-border/50 hover:border-gold/30 transition-colors"
                  >
                    <item.icon className="w-6 h-6 text-gold mb-2" />
                    <h4 className="text-text-primary font-medium text-sm">
                      {item.title}
                    </h4>
                    <p className="text-text-muted text-xs">{item.description}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Languages */}
            <ScrollReveal delay={0.5}>
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="text-text-muted text-sm uppercase tracking-wider mb-3">
                  Jezici
                </h4>
                <div className="flex gap-4">
                  {profile.languages.map((lang) => (
                    <span
                      key={lang}
                      className="text-text-secondary text-sm"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
