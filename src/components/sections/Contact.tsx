"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { profile } from "@/data/profile";
import { Mail, Phone, MapPin, Send, Building } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link
    const subject = encodeURIComponent(`Novi projekat: ${formData.projectType}`);
    const body = encodeURIComponent(
      `Ime: ${formData.name}\nEmail: ${formData.email}\nTip projekta: ${formData.projectType}\n\nPoruka:\n${formData.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding bg-surface">
      <Container>
        <SectionTitle
          title="Započnite Projekat"
          subtitle="Start Your Project"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <ScrollReveal>
            <Card className="p-6 md:p-8" hover={false}>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text-secondary mb-2"
                  >
                    Ime i prezime
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-gold transition-colors"
                    placeholder="Vaše ime"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-secondary mb-2"
                  >
                    Email adresa
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-gold transition-colors"
                    placeholder="vas@email.com"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-medium text-text-secondary mb-2"
                  >
                    Tip projekta
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-text-primary focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="">Izaberite tip projekta</option>
                    <option value="Reklamni spot">Reklamni spot</option>
                    <option value="Muzički spot">Muzički spot</option>
                    <option value="Dokumentarni film">Dokumentarni film</option>
                    <option value="TV emisija">TV emisija</option>
                    <option value="Promo video">Promo video</option>
                    <option value="Event video">Event video</option>
                    <option value="Ostalo">Ostalo</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-secondary mb-2"
                  >
                    Poruka
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Opišite vaš projekat..."
                  />
                </div>

                {/* Submit */}
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  <Send size={18} className="mr-2" />
                  Pošaljite poruku
                </Button>
              </form>
            </Card>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif font-bold text-text-primary mb-2">
                  Kontaktirajte nas
                </h3>
                <p className="text-text-secondary">
                  Spremni smo da saslušamo vašu ideju i pretvorimo je u stvarnost.
                </p>
              </div>

              {/* Contact cards */}
              <div className="space-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border/50 hover:border-gold/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">Email</p>
                    <p className="text-text-primary group-hover:text-gold transition-colors">
                      {profile.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${profile.phone}`}
                  className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border/50 hover:border-gold/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">Telefon</p>
                    <p className="text-text-primary group-hover:text-gold transition-colors">
                      {profile.phone}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border/50">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">Adresa</p>
                    <p className="text-text-primary">{profile.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-background rounded-lg border border-gold/30">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <Building className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">Produkcija</p>
                    <p className="text-gold font-medium">{profile.production}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
