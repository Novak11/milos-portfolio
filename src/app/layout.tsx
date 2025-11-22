import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FilmGrain } from "@/components/effects/FilmGrain";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miloš Popović | Reditelj · Film & TV Director",
  description: "Diplomirani televizijski i filmski reditelj. Dobitnik nagrade Zlatni Vitez. Režija reklama, spotova, dokumentaraca i TV emisija. Zahar Video Production.",
  keywords: ["Reditelj", "Director", "Film", "TV", "Reklame", "Spotovi", "Dokumentarci", "Beograd", "Serbia", "Miloš Popović", "Zahar Video Production"],
  authors: [{ name: "Miloš Popović" }],
  openGraph: {
    title: "Miloš Popović | Reditelj · Director",
    description: "Award-winning TV & Film Director. Commercials, Music Videos, Documentaries. Zahar Video Production, Belgrade.",
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
