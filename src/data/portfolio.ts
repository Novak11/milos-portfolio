import { Project, PortfolioCategory } from "@/types";

export const portfolioCategories: PortfolioCategory[] = [
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
