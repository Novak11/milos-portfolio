# Miloš Popović - Film Director Portfolio - Implementation Guide

**Purpose:** Build a cinematic, award-winning portfolio showcasing a TV & Film Director's body of work
**Target User:** Production companies, clients, agencies seeking a director for commercials, music videos, documentaries, TV
**Core Goal:** Professional portfolio + client acquisition for Zahar Video Production

**Tech Stack:**
- Framework: Next.js 15 (App Router) + TypeScript
- Styling: Tailwind CSS + Framer Motion (cinematic animations)
- UI Components: Custom-built with film/cinema aesthetics
- Deployment: AWS S3 + CloudFront (static export)

**Estimated Timeline:** 3 sessions / 12-15 hours total

---

## Success Metrics
- [ ] Lighthouse Performance 95+
- [ ] Cinematic, immersive UI with smooth transitions
- [ ] All portfolio sections with work categories
- [ ] Mobile responsive (works on all devices)
- [ ] Deployed to AWS with CI/CD

---

## Design System

### Theme: "Cinematic Noir"

A dark, dramatic design inspired by film editing suites, cinema experiences, and award ceremonies. The aesthetic evokes the feeling of being in a darkened cinema or professional editing bay.

### Color Palette
```
Background:       #0A0A0A (True black - cinema darkness)
Surface:          #141414 (Charcoal - cards/sections)
Surface Light:    #1F1F1F (Elevated surfaces)
Surface Hover:    #2A2A2A (Hover states)

Gold:             #D4AF37 (Awards, highlights, CTAs)
Gold Light:       #F4D03F (Gold hover/accent)
Gold Dark:        #B8860B (Gold pressed)

Crimson:          #8B0000 (Cinema curtains, accent)
Crimson Light:    #DC143C (Hover state)

Text Primary:     #F5F5F5 (Off-white - main text)
Text Secondary:   #A0A0A0 (Gray - secondary text)
Text Muted:       #666666 (Subtle text)

Border:           #2A2A2A (Subtle borders)
Border Light:     #3A3A3A (Hover borders)
```

### Typography
- Headings: Playfair Display (elegant, cinematic serif)
- Body: Inter (clean, readable sans-serif)
- Accent: Bebas Neue (bold, dramatic for section titles)

### Spacing System
- Base: 4px
- Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128

### Animation Guidelines (Cinematic Feel)
- Page transitions: Fade to black + fade in (like film cuts)
- Section reveals: Slow fade-in with subtle zoom (0.6s ease-out)
- Hover effects: Subtle brightness increase, gold glow
- Cards: Letterbox expand effect on hover
- Film grain overlay: Subtle animated noise texture
- Transitions inspired by: Cross dissolves, fade-to-black, slide wipes

### Visual Elements
- **Letterboxing**: Subtle black bars on hero section (cinematic aspect ratio feel)
- **Film grain**: Light animated noise overlay
- **Spotlight effect**: Gradient spotlights on key elements
- **Golden accents**: Award badges, highlighted achievements
- **Frame lines**: Subtle viewfinder/camera frame elements

---

## Creative UI Concepts

### 1. Hero Section - "Director's Vision"
```
┌─────────────────────────────────────────────────────────────────┐
│ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ (letterbox bar)          │
│                                                                 │
│              MILOŠ POPOVIĆ                                      │
│              ─────────────                                      │
│              REDITELJ · DIRECTOR                                │
│                                                                 │
│   "Award-winning director crafting visual stories               │
│    that captivate and inspire"                                  │
│                                                                 │
│        [🏆 Zlatni Vitez Winner]                                 │
│                                                                 │
│   [View Showreel]     [Contact for Projects]                    │
│                                                                 │
│ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ (letterbox bar)          │
└─────────────────────────────────────────────────────────────────┘
```
- Full-screen dark background with subtle film grain
- Letterbox bars (top/bottom) for cinematic ratio feel
- Director's photo with dramatic lighting/shadow
- Gold accent on award badge
- Slow fade-in reveal animation
- Optional: Background video loop of director's best shots

### 2. Portfolio Section - "Selected Works" (Categorized)
- **Tab navigation**: Reklame | Spotovi | Dokumentarci | TV Emisije | Promo
- Each category shows project cards in a masonry/grid layout
- Cards have:
  - Thumbnail with play button overlay
  - Project title
  - Client name
  - Year
  - Hover: Brightness increase + "View Project" CTA
- Click opens lightbox/modal with video embed or details

### 3. Awards & Recognition - "Accolades"
- Prominent display of "Zlatni Vitez" award
- Golden trophy/badge iconography
- Film strip decoration
- Award name, film title, year
- Subtle golden glow animation

### 4. Skills Section - "The Craft"
```
┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
│  🎬      │  │  🎥      │  │  ✂️      │  │  📝      │
│ REŽIJA   │  │ KAMERA   │  │ MONTAŽA  │  │ SCENARIO │
│ Director │  │ Cinema-  │  │ Editor   │  │ Screen-  │
│          │  │ tographer│  │          │  │ writer   │
└──────────┘  └──────────┘  └──────────┘  └──────────┘
```
- Four main skills as elegant cards
- Icons with golden accents
- Hover reveals brief description
- Subtle film reel decoration

### 5. Experience Section - "Filmography"
- Timeline or credits-style layout
- Production company logos/names
- Role and duration
- Notable projects listed
- Film slate/clapperboard visual element

### 6. About Section - "O Reditelju"
- Elegant two-column layout
- Director's photo with dramatic lighting
- Biography text
- Education highlights (Academy of Arts)
- SCUBA diving certification (underwater filming capability)

### 7. Clients Section - "Trusted By"
- Logo wall of notable clients
- Exit Festival, Banca Intesa, Ministries, etc.
- Subtle hover animations
- Grayscale → color on hover

### 8. Contact Section - "Start Your Project"
- Professional inquiry form
- Direct contact info prominently displayed
- Production company: Zahar Video Production
- Location: Belgrade, Serbia
- Dark form with gold submit button

---

## Folder Structure

```
milos-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout with fonts, metadata
│   │   ├── page.tsx             # Home page (all sections)
│   │   └── globals.css          # Global styles, Tailwind imports
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx       # Navigation header
│   │   │   ├── Footer.tsx       # Footer with socials
│   │   │   └── Container.tsx    # Max-width wrapper
│   │   ├── sections/
│   │   │   ├── Hero.tsx         # Cinematic hero
│   │   │   ├── About.tsx        # About the director
│   │   │   ├── Portfolio.tsx    # Categorized portfolio
│   │   │   ├── Awards.tsx       # Awards & recognition
│   │   │   ├── Skills.tsx       # The craft - skills
│   │   │   ├── Experience.tsx   # Filmography/experience
│   │   │   ├── Clients.tsx      # Client logos
│   │   │   └── Contact.tsx      # Contact form
│   │   ├── ui/
│   │   │   ├── Button.tsx       # Button variants
│   │   │   ├── Card.tsx         # Base card component
│   │   │   ├── Badge.tsx        # Award/skill badges
│   │   │   ├── Tabs.tsx         # Portfolio category tabs
│   │   │   ├── Modal.tsx        # Video/project modal
│   │   │   ├── FilmGrain.tsx    # Film grain overlay
│   │   │   └── ScrollReveal.tsx # Scroll animation wrapper
│   │   └── effects/
│   │       ├── Letterbox.tsx    # Letterbox bars effect
│   │       └── Spotlight.tsx    # Spotlight gradient effect
│   ├── data/
│   │   ├── profile.ts           # Miloš's profile data
│   │   ├── portfolio.ts         # Portfolio projects by category
│   │   ├── skills.ts            # Skills data
│   │   ├── experience.ts        # Work experience data
│   │   ├── awards.ts            # Awards data
│   │   └── clients.ts           # Client logos/names
│   ├── lib/
│   │   ├── utils.ts             # Utility functions (cn, etc.)
│   │   └── animations.ts        # Framer Motion variants
│   └── types/
│       └── index.ts             # TypeScript interfaces
├── public/
│   ├── images/
│   │   ├── milos.webp           # Profile photo
│   │   ├── portfolio/           # Project thumbnails
│   │   └── clients/             # Client logos
│   ├── videos/
│   │   └── showreel.mp4         # Optional showreel background
│   └── icons/
│       └── [icons].svg          # Custom icons
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Data Structures

### Profile Data (src/data/profile.ts)
```typescript
export const profile = {
  name: "Miloš Popović",
  title: "Reditelj · Director",
  tagline: "Award-winning director crafting visual stories that captivate and inspire",
  location: "Beograd, Srbija",
  about: `Diplomirani televizijski i filmski reditelj. Dobitnik nagrade "Zlatni vitez" za dokumentarni film "Deca besmrtnosti". Nakon fakulteta, usavršavao se u gotovo svim televizijskim i filmskim formatima.

Osnovao sopstvenu produkciju Zahar Video Production i stekao veliko iskustvo u snimanju, montaži, produkciji i pisanju scenarija.`,
  aboutEnglish: `Graduate TV and Film Director. Winner of the "Golden Knight" award for the documentary film "Children of Immortality". After graduation, perfected skills in almost all television and film formats.

Founded Zahar Video Production and gained extensive experience in filming, editing, production, and screenwriting.`,
  email: "videoproductionzahar@gmail.com",
  phone: "+381 65 301 0101",
  address: "Jurija Gagarina 257, Beograd, 11000, Srbija",
  production: "Zahar Video Production",
  languages: ["Serbian (Native)", "English (Advanced)"],
  birthDate: "November 3, 1983",
};
```

### Skills Data (src/data/skills.ts)
```typescript
export interface Skill {
  id: string;
  name: string;
  nameEn: string;
  icon: string;
  description: string;
}

export const skills: Skill[] = [
  {
    id: "directing",
    name: "Režija",
    nameEn: "Directing",
    icon: "clapperboard",
    description: "Vođenje kreativne vizije projekta od koncepta do finalne realizacije",
  },
  {
    id: "cinematography",
    name: "Snimanje",
    nameEn: "Cinematography",
    icon: "camera",
    description: "Profesionalno snimanje sa okom za kompoziciju i svetlo",
  },
  {
    id: "editing",
    name: "Montaža",
    nameEn: "Editing",
    icon: "scissors",
    description: "Kreativna montaža koja daje ritam i emociju priči",
  },
  {
    id: "screenwriting",
    name: "Scenarista",
    nameEn: "Screenwriting",
    icon: "pen-tool",
    description: "Pisanje scenarija i razvoj narativa",
  },
];
```

### Portfolio Data (src/data/portfolio.ts)
```typescript
export interface Project {
  id: string;
  title: string;
  client: string;
  category: "commercials" | "music-videos" | "documentaries" | "tv-shows" | "promo";
  year?: string;
  thumbnail?: string;
  videoUrl?: string;
  description?: string;
}

export const portfolioCategories = [
  { id: "commercials", name: "Reklame", nameEn: "Commercials" },
  { id: "music-videos", name: "Spotovi", nameEn: "Music Videos" },
  { id: "documentaries", name: "Dokumentarci", nameEn: "Documentaries" },
  { id: "tv-shows", name: "TV Emisije", nameEn: "TV Shows" },
  { id: "promo", name: "Promo & Event", nameEn: "Promo & Events" },
];

export const projects: Project[] = [
  // Commercials
  { id: "starlux", title: "Starlux Games USA", client: "Starlux Games", category: "commercials" },
  { id: "mk-grupa", title: "MK Grupa", client: "MK Grupa", category: "commercials" },
  { id: "prihvatiliste", title: "Prihvatilište za decu", client: "Prihvatilište za decu Beograd", category: "commercials" },
  { id: "min-zivotna", title: "Ministarstvo zaštite životne sredine", client: "Ministarstvo", category: "commercials" },
  { id: "min-zdravlja", title: "Ministarstvo zdravlja", client: "Ministarstvo zdravlja", category: "commercials" },
  { id: "exit", title: "Exit Festival", client: "Exit Festival", category: "commercials" },
  { id: "banca-intesa", title: "Banca Intesa Leasing", client: "Banca Intesa", category: "commercials" },
  { id: "avon", title: "Avon", client: "Avon", category: "commercials" },
  { id: "sunoko", title: "Sunoko", client: "Sunoko", category: "commercials" },
  { id: "veuve", title: "Veuve Clicquot", client: "Veuve Clicquot", category: "commercials" },
  { id: "bitef", title: "Bitef Teatar", client: "Bitef", category: "commercials" },
  { id: "rubin", title: "Rubin Kruševac", client: "Rubin", category: "commercials" },
  { id: "bk-uni", title: "BK Univerzitet", client: "BK Univerzitet", category: "commercials" },
  { id: "stom-fak", title: "Stomatološki fakultet Beograd", client: "Stomatološki fakultet", category: "commercials" },
  { id: "ergo-sto", title: "Ergo Sto", client: "Ergo Sto", category: "commercials" },

  // Music Videos
  { id: "vrelina", title: "Vrelina", client: "Sevdah Baby", category: "music-videos" },
  { id: "zena-noc", title: "Žena za jednu noć", client: "Goca Tržan", category: "music-videos" },
  { id: "dubine", title: "Dubine", client: "Lena Kovačević", category: "music-videos" },
  { id: "pozuri", title: "Požuri", client: "Lena Kovačević", category: "music-videos" },
  { id: "trube", title: "Trube sviraju", client: "Aleksa Jelić", category: "music-videos" },
  { id: "gde-ljubav", title: "Gde ljubav putuje", client: "Tanja Savić", category: "music-videos" },
  { id: "bosanka", title: "Bosanka", client: "Lexington", category: "music-videos" },
  { id: "djindjuva", title: "Đinđuva / Vidovdan acoustic", client: "Goca Lazarević", category: "music-videos" },
  { id: "vaskrsnja", title: "Vaskršnja pesma", client: "Đurđevi Stupovi", category: "music-videos" },

  // Documentaries
  { id: "deca-besmrtnosti", title: "Deca besmrtnosti", client: "Eparhija Bačka", category: "documentaries", description: "Dobitnik nagrade Zlatni Vitez" },
  { id: "manastir", title: "Manastir Tronoša", client: "Eparhija Bačka", category: "documentaries" },
  { id: "loznica", title: "Loznica kroz vekove", client: "Eparhija Bačka", category: "documentaries" },
  { id: "konstantin", title: "Konstantin Veliki", client: "Eparhija Bačka", category: "documentaries" },
  { id: "ilarion", title: "Ilarion", client: "Eparhija Bačka", category: "documentaries" },
  { id: "bogoslovske", title: "Bogoslovske škole", client: "Eparhija Bačka", category: "documentaries" },
  { id: "kantakuzina", title: "Kantakuzina (Srpska gimnazija u Zagrebu)", client: "Eparhija Bačka", category: "documentaries" },

  // TV Shows
  { id: "savrseni-brak", title: "Moj savršeni brak", client: "TV", category: "tv-shows" },
  { id: "na-moj-nacin", title: "Na moj način", client: "TV", category: "tv-shows" },
  { id: "zaharov-klub", title: "Zaharov klub talenata", client: "Zahar Production", category: "tv-shows" },
  { id: "biseri", title: "Biseri", client: "Vanja Bulić", category: "tv-shows" },
  { id: "bez-kocnice", title: "Bez kočnice", client: "TV", category: "tv-shows" },
  { id: "verski-mozaik", title: "Verski mozaik", client: "RTS", category: "tv-shows" },

  // Promo & Events
  { id: "mk-promo", title: "MK Grupa", client: "MK Grupa", category: "promo" },
  { id: "nikola-vucevic", title: "Košarkaški kamp Nikola Vučević", client: "Nikola Vučević", category: "promo" },
  { id: "energy-star", title: "Energy Star – Moët", client: "Moët", category: "promo" },
  { id: "bansko", title: "Bansko Ski Fest", client: "Bansko", category: "promo" },
  { id: "sea-dance", title: "Sea Dance", client: "Sea Dance", category: "promo" },
  { id: "exit-promo", title: "Exit Festival", client: "Exit", category: "promo" },
  { id: "bwa", title: "Business Woman Award", client: "BWA", category: "promo" },
  { id: "rapsody", title: "Rapsody Travel", client: "Rapsody", category: "promo" },
  { id: "balkan-fun", title: "Balkan Fun", client: "Balkan Fun", category: "promo" },
  { id: "belgrade-night", title: "Belgrade at Night", client: "Belgrade", category: "promo" },
  { id: "top-hill", title: "Top Hill", client: "Top Hill", category: "promo" },
];
```

### Experience Data (src/data/experience.ts)
```typescript
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights?: string[];
}

export const experiences: Experience[] = [
  {
    id: "zahar",
    title: "Reditelj / Director",
    company: "Zahar Video Production",
    location: "Beograd",
    startDate: "Novembar 2017",
    endDate: "Trenutno",
    description: "Osnivač i glavni reditelj sopstvene produkcijske kuće. Režija reklamnih spotova, muzičkih spotova, promo materijala i TV emisija.",
    highlights: [
      "Reklamni spotovi za Exit Festival, Banca Intesa, Avon, Veuve Clicquot",
      "Muzički spotovi za Gocu Tržan, Lenu Kovačević, Tanju Savić, Lexington",
      "Promo i event video produkcija",
    ],
  },
  {
    id: "eparhija",
    title: "Reditelj / Director",
    company: "Privatna produkcija - Eparhija Bačka",
    location: "Beograd",
    startDate: "Oktobar 2013",
    endDate: "Oktobar 2022",
    description: "Reditelj verskog programa RTS-a. Režija dokumentarnih filmova i emisije 'Verski mozaik'.",
    highlights: [
      "Nagrada 'Zlatni vitez' za dokumentarni film 'Deca besmrtnosti'",
      "Dokumentarni filmovi: Manastir Tronoša, Konstantin Veliki, Ilarion",
      "Emisija 'Verski mozaik'",
    ],
  },
  {
    id: "tv-happy",
    title: "Reditelj / Director",
    company: "TV Happy",
    location: "Beograd",
    startDate: "Septembar 2010",
    endDate: "Jun 2013",
    description: "Reditelj zabavnog programa televizije Happy.",
  },
];
```

### Awards Data (src/data/awards.ts)
```typescript
export interface Award {
  id: string;
  name: string;
  project: string;
  year: string;
  description: string;
  highlight: boolean;
}

export const awards: Award[] = [
  {
    id: "zlatni-vitez",
    name: "Zlatni Vitez",
    project: "Deca besmrtnosti",
    year: "2013-2022", // During Eparhija period
    description: "Nagrada za najbolji dokumentarni film",
    highlight: true,
  },
];
```

### Education Data (src/data/education.ts)
```typescript
export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  year: string;
}

export const education: Education[] = [
  {
    id: "akademija",
    degree: "Diplomske studije",
    field: "Televizijska i filmska režija",
    institution: "Akademija umetnosti Beograd",
    location: "Beograd",
    year: "2011",
  },
  {
    id: "mokranjac",
    degree: "Srednja škola",
    field: "Klavirski odsek",
    institution: "Muzička škola 'Mokranjac'",
    location: "Beograd",
    year: "2003",
  },
];

export const additionalTraining = [
  {
    id: "gluma",
    name: "Kurs glume",
    institution: "Teatar Levo - Ivo Lola Ribar",
    period: "Oktobar 2009 – Avgust 2013",
  },
  {
    id: "scuba",
    name: "SCUBA Diving (podvodno snimanje)",
    institution: "Svet ronjenja",
    period: "Oktobar 2023",
  },
];

export const additionalExperience = [
  {
    id: "asistent",
    role: "Asistent kamere",
    project: "Dugometražni igrani filmovi 'Rajska prevara' i 'Apsurdni eksperiment'",
    period: "Oktobar 2023",
  },
  {
    id: "robbie",
    role: "Kamera operater",
    project: "Robbie Williams koncert u Beogradu",
    period: "Jun 2015 – Jun 2017",
  },
];
```

### Clients Data (src/data/clients.ts)
```typescript
export const clients = [
  { id: "exit", name: "Exit Festival", logo: "/images/clients/exit.svg" },
  { id: "banca-intesa", name: "Banca Intesa", logo: "/images/clients/banca-intesa.svg" },
  { id: "avon", name: "Avon", logo: "/images/clients/avon.svg" },
  { id: "veuve", name: "Veuve Clicquot", logo: "/images/clients/veuve.svg" },
  { id: "rts", name: "RTS", logo: "/images/clients/rts.svg" },
  { id: "sunoko", name: "Sunoko", logo: "/images/clients/sunoko.svg" },
  { id: "moet", name: "Moët", logo: "/images/clients/moet.svg" },
  { id: "mk-grupa", name: "MK Grupa", logo: "/images/clients/mk-grupa.svg" },
];
```

---

## Implementation Phases

---

## Phase 1: Project Foundation & Cinematic Setup (Session 1)

**Goal:** Initialize Next.js project, configure Tailwind with cinematic theme, set up folder structure, create base components and film effects

**Time Estimate:** 4-5 hours
**Token Estimate:** ~12,000 tokens (Safe)

### Tasks:

1. **Initialize Next.js Project**
   ```bash
   cd /home/novak/projects/milos-portfolio
   npx create-next-app@latest . --typescript --tailwind --app --eslint --src-dir
   ```
   - Accept defaults for all prompts

2. **Install Dependencies**
   ```bash
   npm install framer-motion lucide-react clsx tailwind-merge
   npm install -D @tailwindcss/typography
   ```

3. **Configure Tailwind (tailwind.config.ts) - Cinematic Theme**
   ```typescript
   import type { Config } from "tailwindcss";

   const config: Config = {
     content: [
       "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
       "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
       "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
     ],
     theme: {
       extend: {
         colors: {
           background: "#0A0A0A",
           surface: {
             DEFAULT: "#141414",
             light: "#1F1F1F",
             hover: "#2A2A2A",
           },
           gold: {
             DEFAULT: "#D4AF37",
             light: "#F4D03F",
             dark: "#B8860B",
           },
           crimson: {
             DEFAULT: "#8B0000",
             light: "#DC143C",
           },
           border: {
             DEFAULT: "#2A2A2A",
             light: "#3A3A3A",
           },
         },
         fontFamily: {
           serif: ["Playfair Display", "serif"],
           sans: ["Inter", "sans-serif"],
           display: ["Bebas Neue", "sans-serif"],
         },
         animation: {
           "fade-in": "fadeIn 0.6s ease-out",
           "slide-up": "slideUp 0.6s ease-out",
           "film-grain": "grain 0.5s steps(10) infinite",
           "glow-pulse": "glowPulse 2s ease-in-out infinite",
           "spotlight": "spotlight 3s ease-in-out infinite",
         },
         keyframes: {
           fadeIn: {
             "0%": { opacity: "0" },
             "100%": { opacity: "1" },
           },
           slideUp: {
             "0%": { opacity: "0", transform: "translateY(30px)" },
             "100%": { opacity: "1", transform: "translateY(0)" },
           },
           grain: {
             "0%, 100%": { transform: "translate(0, 0)" },
             "10%": { transform: "translate(-5%, -10%)" },
             "20%": { transform: "translate(-15%, 5%)" },
             "30%": { transform: "translate(7%, -25%)" },
             "40%": { transform: "translate(-5%, 25%)" },
             "50%": { transform: "translate(-15%, 10%)" },
             "60%": { transform: "translate(15%, 0%)" },
             "70%": { transform: "translate(0%, 15%)" },
             "80%": { transform: "translate(3%, 35%)" },
             "90%": { transform: "translate(-10%, 10%)" },
           },
           glowPulse: {
             "0%, 100%": { boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)" },
             "50%": { boxShadow: "0 0 40px rgba(212, 175, 55, 0.6)" },
           },
           spotlight: {
             "0%, 100%": { opacity: "0.3" },
             "50%": { opacity: "0.5" },
           },
         },
       },
     },
     plugins: [require("@tailwindcss/typography")],
   };
   export default config;
   ```

4. **Create Utility Functions (src/lib/utils.ts)**
   ```typescript
   import { clsx, type ClassValue } from "clsx";
   import { twMerge } from "tailwind-merge";

   export function cn(...inputs: ClassValue[]) {
     return twMerge(clsx(inputs));
   }
   ```

5. **Create Animation Variants (src/lib/animations.ts)**
   ```typescript
   // Cinematic animation variants
   export const fadeIn = {
     hidden: { opacity: 0 },
     visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
   };

   export const slideUp = {
     hidden: { opacity: 0, y: 30 },
     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
   };

   export const cinematicReveal = {
     hidden: { opacity: 0, scale: 0.95 },
     visible: {
       opacity: 1,
       scale: 1,
       transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
     },
   };

   export const staggerContainer = {
     hidden: { opacity: 0 },
     visible: {
       opacity: 1,
       transition: { staggerChildren: 0.15, delayChildren: 0.1 },
     },
   };

   export const cardHover = {
     rest: { scale: 1, y: 0 },
     hover: { scale: 1.02, y: -5, transition: { duration: 0.3 } },
   };

   export const letterboxReveal = {
     hidden: { scaleY: 1 },
     visible: { scaleY: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } },
   };
   ```

6. **Create TypeScript Types (src/types/index.ts)**
   - Create interfaces for Profile, Skill, Project, Experience, Award, Education, Client

7. **Create Data Files**
   - Create all data files in src/data/ with the structures defined above
   - profile.ts, portfolio.ts, skills.ts, experience.ts, awards.ts, education.ts, clients.ts

8. **Set Up Global Styles (src/app/globals.css)**
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

   @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');

   @layer base {
     html {
       scroll-behavior: smooth;
     }
     body {
       @apply bg-background text-gray-100 font-sans antialiased;
     }
   }

   @layer components {
     .section-padding {
       @apply py-20 md:py-32;
     }
     .container-padding {
       @apply px-4 md:px-6 lg:px-8;
     }
     .text-gold-gradient {
       @apply bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent;
     }
     .card-cinema {
       @apply bg-surface rounded-lg border border-border/50 overflow-hidden;
     }
     .glow-gold {
       @apply shadow-lg shadow-gold/20;
     }
     .letterbox-bar {
       @apply h-12 md:h-16 bg-black w-full;
     }
   }

   /* Film grain overlay */
   .film-grain::before {
     content: "";
     position: fixed;
     top: -50%;
     left: -50%;
     right: -50%;
     bottom: -50%;
     width: 200%;
     height: 200%;
     background: transparent url('/images/noise.png') repeat 0 0;
     opacity: 0.03;
     pointer-events: none;
     animation: grain 0.5s steps(10) infinite;
     z-index: 9999;
   }

   /* Custom scrollbar - cinema dark */
   ::-webkit-scrollbar {
     width: 8px;
   }
   ::-webkit-scrollbar-track {
     @apply bg-background;
   }
   ::-webkit-scrollbar-thumb {
     @apply bg-surface-light rounded-full;
   }
   ::-webkit-scrollbar-thumb:hover {
     @apply bg-gold/50;
   }

   /* Selection color */
   ::selection {
     @apply bg-gold/30 text-white;
   }
   ```

9. **Create Film Grain Component (src/components/effects/FilmGrain.tsx)**
   ```typescript
   "use client";

   export function FilmGrain() {
     return (
       <div
         className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]"
         style={{
           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
         }}
       />
     );
   }
   ```

10. **Create Letterbox Component (src/components/effects/Letterbox.tsx)**
    ```typescript
    "use client";
    import { motion } from "framer-motion";

    interface LetterboxProps {
      children: React.ReactNode;
    }

    export function Letterbox({ children }: LetterboxProps) {
      return (
        <div className="relative">
          <div className="letterbox-bar absolute top-0 left-0 right-0 z-10" />
          {children}
          <div className="letterbox-bar absolute bottom-0 left-0 right-0 z-10" />
        </div>
      );
    }
    ```

11. **Create Layout Components**

    **Header (src/components/layout/Header.tsx)**
    - Dark header with gold accent on logo
    - Navigation: Portfolio | O meni | Kontakt
    - Mobile menu with slide-down animation
    - Scroll effect: Background blur on scroll

    **Footer (src/components/layout/Footer.tsx)**
    - Production company name: Zahar Video Production
    - Contact info
    - Social links
    - Copyright

    **Container (src/components/layout/Container.tsx)**
    - Max-width wrapper with responsive padding

12. **Create Root Layout (src/app/layout.tsx)**
    ```typescript
    import type { Metadata } from "next";
    import { Header } from "@/components/layout/Header";
    import { Footer } from "@/components/layout/Footer";
    import { FilmGrain } from "@/components/effects/FilmGrain";
    import "./globals.css";

    export const metadata: Metadata = {
      title: "Miloš Popović | Reditelj · Film & TV Director",
      description: "Diplomirani televizijski i filmski reditelj. Dobitnik nagrade Zlatni Vitez. Režija reklama, spotova, dokumentaraca i TV emisija.",
      keywords: ["Reditelj", "Director", "Film", "TV", "Reklame", "Spotovi", "Dokumentarci", "Beograd", "Serbia"],
      authors: [{ name: "Miloš Popović" }],
      openGraph: {
        title: "Miloš Popović | Reditelj",
        description: "Award-winning TV & Film Director. Commercials, Music Videos, Documentaries.",
        type: "website",
        locale: "sr_RS",
      },
    };

    export default function RootLayout({
      children,
    }: {
      children: React.ReactNode;
    }) {
      return (
        <html lang="sr" className="scroll-smooth">
          <body className="min-h-screen flex flex-col">
            <FilmGrain />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </body>
        </html>
      );
    }
    ```

13. **Convert Profile Image**
    ```bash
    # Convert JPG to WebP
    convert "/home/novak/projects/milos-portfolio/--1.jpg" -quality 85 "/home/novak/projects/milos-portfolio/public/images/milos.webp"
    ```

14. **Test Development Server**
    ```bash
    npm run dev
    ```

### Deliverables - Phase 1:
- [ ] Next.js project initialized with TypeScript
- [ ] Tailwind configured with cinematic dark theme
- [ ] All dependencies installed
- [ ] Folder structure created
- [ ] Data files with Miloš's information
- [ ] Film grain and letterbox effects created
- [ ] Layout components (Header, Footer, Container)
- [ ] Global styles with cinematic aesthetic
- [ ] Profile image converted to WebP
- [ ] Dev server runs without errors
- [ ] Git commit: "feat: cinematic foundation with layout and data"

---

## Phase 2: Hero, About & Core UI Components (Session 2)

**Goal:** Build cinematic Hero section, About section, core UI components with film aesthetics

**Time Estimate:** 4-5 hours
**Token Estimate:** ~15,000 tokens (Safe)

### Tasks:

1. **Create Button Component (src/components/ui/Button.tsx)**
   - Variants: primary (gold), secondary (outline), ghost
   - Cinematic hover effects with glow
   - Loading state

2. **Create Badge Component (src/components/ui/Badge.tsx)**
   - Gold award badges
   - Category badges
   - Animated gold glow for featured items

3. **Create Card Component (src/components/ui/Card.tsx)**
   - Cinema-style dark cards
   - Hover brightness effect
   - Gold border variant for highlights

4. **Create ScrollReveal Component (src/components/ui/ScrollReveal.tsx)**
   - Cinematic fade-in on scroll
   - Uses Framer Motion useInView

5. **Build Hero Section (src/components/sections/Hero.tsx)**
   Design:
   - Full-screen dark background
   - Optional letterbox bars (top/bottom)
   - Large name: "MILOŠ POPOVIĆ" in Playfair Display or Bebas Neue
   - Subtitle: "REDITELJ · DIRECTOR"
   - Tagline with slow fade-in
   - Award badge: "🏆 Zlatni Vitez Winner" with gold styling
   - CTA buttons: [View Portfolio] [Contact]
   - Profile photo with dramatic shadow/lighting
   - Subtle spotlight gradient in background
   - Slow, cinematic animations (0.8s+ durations)

6. **Build About Section (src/components/sections/About.tsx)**
   Design:
   - Section title: "O Reditelju" with decorative line
   - Two-column layout on desktop
   - Left: Profile photo with frame/border effect
   - Right: Biography text
   - Key highlights with icons:
     - 🎬 Diplomirana režija - Akademija umetnosti
     - 🏆 Zlatni Vitez - Deca besmrtnosti
     - 🏊 SCUBA certified - Underwater filming
     - 🎹 Musical background - Piano
   - Languages section
   - Subtle film reel decoration

7. **Build Awards Section (src/components/sections/Awards.tsx)**
   Design:
   - Prominent "Zlatni Vitez" display
   - Golden trophy/laurel wreath icon
   - Film title: "Deca besmrtnosti"
   - Award description
   - Gold glow animation
   - Film strip decoration

8. **Update Home Page (src/app/page.tsx)**
   - Import Hero, About, Awards sections
   - Test scroll behavior

### Deliverables - Phase 2:
- [ ] All UI components created and working
- [ ] Cinematic Hero section with letterbox feel
- [ ] About section with biography
- [ ] Awards section featuring Zlatni Vitez
- [ ] Smooth cinematic animations
- [ ] Mobile responsive
- [ ] Git commit: "feat: cinematic hero, about, and awards sections"

---

## Phase 3: Portfolio, Skills, Experience & Contact (Session 3)

**Goal:** Build tabbed Portfolio section, Skills, Experience timeline, Clients, and Contact

**Time Estimate:** 5-6 hours
**Token Estimate:** ~18,000 tokens (Safe)

### Tasks:

1. **Create Tabs Component (src/components/ui/Tabs.tsx)**
   - Tab navigation for portfolio categories
   - Animated indicator line
   - Gold active state

2. **Create Modal Component (src/components/ui/Modal.tsx)**
   - For project details/video playback
   - Dark overlay with fade
   - Close on click outside or X button

3. **Build Portfolio Section (src/components/sections/Portfolio.tsx)**
   Design:
   - Section title: "Izabrani Radovi · Selected Works"
   - Tab navigation: Reklame | Spotovi | Dokumentarci | TV | Promo
   - Grid of project cards (3 columns desktop, 2 tablet, 1 mobile)
   - Each card shows:
     - Project title
     - Client name
     - Play button overlay on hover
     - Hover: Brightness increase + border glow
   - Click opens modal with project details
   - Staggered reveal animation

4. **Build Skills Section (src/components/sections/Skills.tsx)**
   Design:
   - Section title: "Zanat · The Craft"
   - Four skill cards in a row:
     - Režija (Directing) - Clapperboard icon
     - Snimanje (Cinematography) - Camera icon
     - Montaža (Editing) - Scissors icon
     - Scenario (Screenwriting) - Pen icon
   - Each card has:
     - Large icon with gold accent
     - Skill name (Serbian)
     - English translation
     - Brief description on hover
   - Elegant hover effects

5. **Build Experience Section (src/components/sections/Experience.tsx)**
   Design:
   - Section title: "Filmografija · Experience"
   - Timeline layout with vertical line
   - Each role as a card:
     - Company name
     - Role title
     - Duration
     - Key highlights/projects
   - Scroll-triggered animations
   - Gold accent on timeline markers

6. **Build Clients Section (src/components/sections/Clients.tsx)**
   Design:
   - Section title: "Klijenti · Clients"
   - Logo wall or grid
   - Client names as text (or placeholder icons)
   - Exit Festival, Banca Intesa, Avon, Veuve Clicquot, RTS, etc.
   - Grayscale → gold on hover
   - Subtle marquee animation optional

7. **Build Contact Section (src/components/sections/Contact.tsx)**
   Design:
   - Section title: "Započnite Projekat · Start Your Project"
   - Two-column layout:
     - Left: Contact form (Name, Email, Project Type, Message)
     - Right: Direct contact info
       - Email: videoproductionzahar@gmail.com
       - Phone: +381 65 301 0101
       - Address: Belgrade, Serbia
       - Production: Zahar Video Production
   - Gold submit button with hover glow
   - Form validation
   - Success/error states

8. **Complete Home Page (src/app/page.tsx)**
   - Import all sections in order:
     1. Hero
     2. About
     3. Awards
     4. Portfolio
     5. Skills
     6. Experience
     7. Clients
     8. Contact
   - Section IDs for navigation

9. **Final Polish**
   - Test all interactions
   - Verify mobile responsiveness
   - Check accessibility
   - Lighthouse audit

### Deliverables - Phase 3:
- [ ] Portfolio section with tabbed categories
- [ ] Skills section with director's craft
- [ ] Experience timeline
- [ ] Clients section
- [ ] Contact section with form
- [ ] All sections properly styled in cinematic theme
- [ ] Mobile responsive throughout
- [ ] Lighthouse 90+ performance
- [ ] Git commit: "feat: complete portfolio, skills, and contact sections"

---

## Phase 4: Deployment to AWS (Session 4 - Optional)

**Goal:** Deploy static site to AWS S3 + CloudFront with CI/CD

**Time Estimate:** 2-3 hours
**Token Estimate:** ~8,000 tokens (Safe)

### Tasks:

1. **Configure Static Export (next.config.js)**
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   };
   module.exports = nextConfig;
   ```

2. **Build Static Site**
   ```bash
   npm run build
   ```

3. **Create S3 Bucket**
   - Bucket name: milos-popovic-portfolio (or similar)
   - Enable static website hosting
   - Configure bucket policy

4. **Create CloudFront Distribution**
   - Origin: S3 bucket with OAC
   - Enable HTTPS
   - Configure caching

5. **Set Up GitHub Actions CI/CD**
   - Deploy on push to main
   - Invalidate CloudFront cache

6. **Configure Billing Alerts**
   - CloudWatch alarm at $5 threshold

7. **Test Production Deployment**

### Deliverables - Phase 4:
- [ ] Static export configured
- [ ] S3 bucket created
- [ ] CloudFront distribution active
- [ ] CI/CD pipeline working
- [ ] Production URL live
- [ ] Git commit: "feat: AWS deployment with CI/CD"

---

## Quality Assurance Checklist

### Performance
- [ ] Lighthouse Performance 90+ (target 95+)
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Images optimized (WebP)
- [ ] Animations smooth (60fps)

### Accessibility
- [ ] Semantic HTML throughout
- [ ] ARIA labels on interactive elements
- [ ] Keyboard navigation works
- [ ] Color contrast meets standards

### SEO
- [ ] Title tags optimized
- [ ] Meta descriptions set
- [ ] Open Graph tags for social
- [ ] Serbian language tag

### UX
- [ ] Mobile responsive (320px - 1920px)
- [ ] Smooth scroll behavior
- [ ] All links work
- [ ] Form validation works

---

## Troubleshooting

### Issue: Film grain animation too intense
**Solution:** Reduce opacity in FilmGrain component (try 0.02 instead of 0.03)

### Issue: Gold colors look too bright
**Solution:** Use gold-dark (#B8860B) for most elements, reserve gold-light for hover

### Issue: Fonts not loading
**Solution:** Check Google Fonts import in globals.css, ensure Playfair Display and Bebas Neue are included

### Issue: Letterbox bars not showing
**Solution:** Ensure z-index is set and parent has relative positioning

---

## 📊 Session Prompt Line Counts

**Total Guide Length:** ~1,100 lines
**Estimated Total Tokens:** ~16,500 tokens

### Recommended Session Split

**Session 1: Foundation Setup**
- **Lines to copy:** 1-450 (Phase 1 complete)
- **Estimated tokens:** ~6,750 tokens
- **Risk level:** ✅ Safe
- **Implementation time:** 4-5 hours

**Session 2: Hero, About & Awards**
- **Lines to copy:** 451-650 (Phase 2 complete)
- **Estimated tokens:** ~3,000 tokens
- **Risk level:** ✅ Very Safe
- **Implementation time:** 4-5 hours

**Session 3: Portfolio, Skills, Experience & Contact**
- **Lines to copy:** 651-900 (Phase 3 complete)
- **Estimated tokens:** ~3,750 tokens
- **Risk level:** ✅ Safe
- **Implementation time:** 5-6 hours

**Session 4: AWS Deployment (Optional)**
- **Lines to copy:** 901-1100 (Phase 4 complete)
- **Estimated tokens:** ~3,000 tokens
- **Risk level:** ✅ Very Safe
- **Implementation time:** 2-3 hours

---

## Session Prompts (Ready to Use)

### Session 1 Prompt
```
Build Miloš Popović Director Portfolio - Phase 1: Cinematic Foundation

Repository: /home/novak/projects/milos-portfolio (or GitHub URL after push)
Implementation Guide: Read IMPLEMENTATION-GUIDE.md

Complete Phase 1: Project Foundation & Cinematic Setup

Key tasks:
1. Initialize Next.js 15 with TypeScript and Tailwind
2. Install dependencies (framer-motion, lucide-react, clsx, tailwind-merge)
3. Configure Tailwind with CINEMATIC DARK THEME (gold, crimson, deep black)
4. Create folder structure as specified
5. Create all data files with Miloš's profile information (he's a DIRECTOR, not developer)
6. Create film effects: FilmGrain overlay, Letterbox component
7. Build layout components (Header, Footer, Container)
8. Set up global styles with cinematic aesthetic
9. Convert profile image to WebP
10. Test dev server

IMPORTANT: This is for a FILM DIRECTOR portfolio - use cinematic/film aesthetics, NOT tech/developer style.

Design theme: "Cinematic Noir" - deep blacks, gold accents, film grain, dramatic lighting

Deliverables:
- Working dev server at localhost:3000
- Cinematic dark theme configured
- Film grain effect visible
- Layout components rendering
- Git commit: "feat: cinematic foundation with layout and data"
```

### Session 2 Prompt
```
Build Miloš Popović Director Portfolio - Phase 2: Hero, About & Awards

Repository: [GitHub URL or local path]
Implementation Guide: IMPLEMENTATION-GUIDE.md

Continue from Phase 1. Complete Phase 2.

Key tasks:
1. Create Button component (gold primary, outline secondary)
2. Create Badge component (gold award badges)
3. Create Card component with cinema-style dark aesthetic
4. Create ScrollReveal component
5. Build Hero section:
   - Full-screen with letterbox feel
   - Large name "MILOŠ POPOVIĆ"
   - Subtitle "REDITELJ · DIRECTOR"
   - Award badge: "🏆 Zlatni Vitez Winner"
   - Dramatic, slow animations
   - Profile photo with dramatic lighting
6. Build About section:
   - Biography in Serbian
   - Key highlights (education, awards, SCUBA certification)
7. Build Awards section:
   - Prominent "Zlatni Vitez" display
   - Film: "Deca besmrtnosti"
   - Golden glow effects

Design notes:
- Cinematic, dramatic feel - NOT tech/developer style
- Slow, elegant animations (0.6s+)
- Gold accents on important elements
- Deep black backgrounds

Deliverables:
- Cinematic Hero section
- About section with biography
- Awards section featuring Zlatni Vitez
- Mobile responsive
- Git commit: "feat: cinematic hero, about, and awards sections"
```

### Session 3 Prompt
```
Build Miloš Popović Director Portfolio - Phase 3: Portfolio, Skills & Contact

Repository: [GitHub URL or local path]
Implementation Guide: IMPLEMENTATION-GUIDE.md

Continue from Phase 2. Complete all remaining sections.

Key tasks:
1. Build Portfolio section with TABS:
   - Categories: Reklame | Spotovi | Dokumentarci | TV | Promo
   - Grid of project cards
   - All projects from data file (commercials, music videos, etc.)
2. Build Skills section "Zanat · The Craft":
   - Four cards: Režija, Snimanje, Montaža, Scenario
   - Film-related icons
3. Build Experience section "Filmografija":
   - Timeline layout
   - Zahar Video Production (2017-present)
   - Eparhija Bačka (2013-2022)
   - TV Happy (2010-2013)
4. Build Clients section:
   - Logo/text wall: Exit, Banca Intesa, Avon, Veuve Clicquot, RTS, etc.
5. Build Contact section:
   - Form: Name, Email, Project Type, Message
   - Contact info: videoproductionzahar@gmail.com, +381 65 301 0101
   - Production: Zahar Video Production
6. Complete home page with all sections
7. Final polish and testing

Deliverables:
- Tabbed Portfolio section
- Skills section
- Experience timeline
- Clients section
- Contact form
- All sections cinematic themed
- Lighthouse 90+ performance
- Git commit: "feat: complete portfolio, skills, and contact sections"
```

### Session 4 Prompt (AWS Deployment)
```
Deploy Miloš Popović Portfolio to AWS - Phase 4

Repository: [GitHub URL]
Implementation Guide: IMPLEMENTATION-GUIDE.md

Deploy completed portfolio to AWS S3 + CloudFront.

Key tasks:
1. Configure Next.js for static export
2. Build production bundle
3. Create S3 bucket: milos-popovic-portfolio-site (eu-central-1)
4. Create CloudFront distribution with OAC
5. Set up GitHub Actions CI/CD
6. Configure billing alerts
7. Test production deployment

Prerequisites:
- AWS credentials configured
- GitHub repository set up

Deliverables:
- Live production URL
- CI/CD pipeline working
- Billing alerts configured
- Git commit: "feat: AWS deployment with CI/CD"
```

---

**END OF IMPLEMENTATION GUIDE**
