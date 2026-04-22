import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { bebas, libre, jetbrains } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Imagine Dreams Africa | Building Digital Africa",
  description: "Building Africa's digital civilisation from Kampala. 6 pillars. 3 ventures. One mission: a sovereign, connected, prosperous digital Africa.",
  keywords: ["Imagine Dreams Africa", "African digital infrastructure", "Uganda tech company", "Digital sovereignty", "Kampala startups"],
  authors: [{ name: "Imagine Dreams Africa" }],
  openGraph: {
    title: "Imagine Dreams Africa | Building Digital Africa",
    description: "Building Africa's digital civilisation from Kampala.",
    url: "https://imaginedreams.org",
    siteName: "Imagine Dreams Africa",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        bebas.variable,
        libre.variable,
        jetbrains.variable
      )}
      style={{
        fontFamily: 'var(--font-mono)',
      }}
    >
      <body 
        className="min-h-full flex flex-col background-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
