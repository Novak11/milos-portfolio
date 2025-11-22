import { Container } from "./Container";
import { Mail, Phone, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-text-primary mb-2">
              {profile.name}
            </h3>
            <p className="text-text-secondary text-sm mb-4">
              {profile.title}
            </p>
            <p className="text-gold font-medium">
              {profile.production}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-text-muted mb-4">
              Kontakt
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 text-text-secondary hover:text-gold transition-colors text-sm"
                >
                  <Mail size={16} className="text-gold" />
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone}`}
                  className="flex items-center gap-3 text-text-secondary hover:text-gold transition-colors text-sm"
                >
                  <Phone size={16} className="text-gold" />
                  {profile.phone}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-text-secondary text-sm">
                  <MapPin size={16} className="text-gold" />
                  {profile.location}
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-text-muted mb-4">
              Navigacija
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#portfolio"
                  className="text-text-secondary hover:text-gold transition-colors text-sm"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-text-secondary hover:text-gold transition-colors text-sm"
                >
                  O meni
                </a>
              </li>
              <li>
                <a
                  href="#awards"
                  className="text-text-secondary hover:text-gold transition-colors text-sm"
                >
                  Nagrade
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-text-secondary hover:text-gold transition-colors text-sm"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-text-muted text-sm text-center">
            &copy; {new Date().getFullYear()} {profile.name}. Sva prava zadržana.
          </p>
        </div>
      </Container>
    </footer>
  );
}
