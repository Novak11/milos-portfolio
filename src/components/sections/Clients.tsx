"use client";

import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { clients } from "@/data/clients";

export function Clients() {
  return (
    <section className="section-padding bg-background">
      <Container>
        <SectionTitle
          title="Klijenti"
          subtitle="Trusted By"
        />

        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {clients.map((client) => (
              <div
                key={client.id}
                className="group p-6 md:p-8 bg-surface rounded-lg border border-border/50 hover:border-gold/30 transition-all duration-300 flex items-center justify-center"
              >
                <span className="text-lg md:text-xl font-serif text-text-secondary group-hover:text-gold transition-colors text-center">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
