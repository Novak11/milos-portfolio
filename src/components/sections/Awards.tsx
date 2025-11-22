"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { awards } from "@/data/awards";
import { Trophy, Film, Star } from "lucide-react";

export function Awards() {
  return (
    <section id="awards" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-gold rounded-full" />
      </div>

      <Container className="relative z-10">
        <SectionTitle
          title="Nagrade"
          subtitle="Priznanja za izuzetan rad"
        />

        {awards.map((award) => (
          <ScrollReveal key={award.id}>
            <motion.div
              className="max-w-2xl mx-auto text-center"
              whileHover={{ scale: 1.02 }}
            >
              {/* Trophy icon with glow */}
              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 bg-gold/30 blur-3xl rounded-full" />
                <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-gold-dark via-gold to-gold-light flex items-center justify-center">
                  <Trophy className="w-16 h-16 text-background" />
                </div>
              </div>

              {/* Award name */}
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-gold-gradient mb-4">
                {award.name}
              </h3>

              {/* Film title */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <Film className="w-5 h-5 text-text-muted" />
                <span className="text-xl text-text-primary font-medium">
                  {award.project}
                </span>
              </div>

              {/* Description */}
              <p className="text-text-secondary mb-6">
                {award.description}
              </p>

              {/* Decorative stars */}
              <div className="flex items-center justify-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-gold fill-gold"
                  />
                ))}
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </Container>
    </section>
  );
}
