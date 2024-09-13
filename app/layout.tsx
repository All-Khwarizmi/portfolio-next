import GlobalBackground from "@/app/components/design/Background";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jason Suarez | Développeur Frontend React & TypeScript",
  description:
    "Portfolio de Jason Suarez, développeur frontend expert en React, TypeScript et Next.js. Découvrez mes projets innovants et mon approche moderne du développement web.",
  metadataBase: new URL("https://jason-suarez.com"),
  authors: [{ name: "Jason Suarez" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://jason-suarez.com/",
    siteName: "Portfolio de Jason Suarez",
    title: "Jason Suarez | Développeur Frontend React & TypeScript",
    description:
      "Explorez mon portfolio pour découvrir mes compétences en développement web, mes projets innovants, et comment je peux aider votre entreprise à créer des interfaces utilisateur performantes et modernes.",
    images: [
      {
        url: "/portfolio-cover.png",
        width: 1200,
        height: 630,
        alt: "Portfolio de Jason Suarez - Développeur Frontend",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@swarecito",
    creator: "@swarecito",
    title: "Jason Suarez | Développeur Frontend React & TypeScript",
    description:
      "Découvrez mon portfolio de développeur frontend spécialisé en React, TypeScript et Next.js. Projets innovants et solutions web modernes.",
    images: ["/portfolio-cover.png"],
  },
  themeColor: "#000000",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/portfolio-cover.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <GlobalBackground />
        {children}
      </body>
    </html>
  );
}
