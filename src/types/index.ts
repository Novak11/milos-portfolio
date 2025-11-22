export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  about: string;
  aboutEnglish: string;
  email: string;
  phone: string;
  address: string;
  production: string;
  languages: string[];
  birthDate: string;
}

export interface Skill {
  id: string;
  name: string;
  nameEn: string;
  icon: string;
  description: string;
}

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

export interface PortfolioCategory {
  id: string;
  name: string;
  nameEn: string;
}

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

export interface Award {
  id: string;
  name: string;
  project: string;
  year: string;
  description: string;
  highlight: boolean;
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  year: string;
}

export interface Client {
  id: string;
  name: string;
  logo?: string;
}
