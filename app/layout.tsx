import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookModalProvider } from "@/components/BookModalProvider";

export const metadata: Metadata = {
  title: {
    default: "A&J Virtual Assistance Services | Filipino Virtual Assistants",
    template: "%s | A&J Virtual Assistance Services",
  },
  description:
    "Scale faster with highly skilled Filipino Virtual Assistants. We streamline operations, boost productivity, and help you grow—while mentoring aspiring VAs.",
  icons: {
    icon: "/aandj-logo.jpeg",
    apple: "/aandj-logo.jpeg",
  },
  openGraph: {
    title: "A&J Virtual Assistance Services | Filipino Virtual Assistants",
    description:
      "Scale faster with highly skilled Filipino Virtual Assistants. Streamline operations, boost productivity, and scale effectively.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col relative">
        {/* Logo as subtle full-page background */}
        <div
          className="fixed inset-0 z-0 bg-background"
          aria-hidden
        >
          <div
            className="absolute inset-0 bg-[length:min(80vw,70rem)] bg-center bg-no-repeat opacity-[0.09]"
            style={{ backgroundImage: "url(/aandj-logo.jpeg)" }}
          />
          <div className="absolute inset-0 bg-background/50" />
        </div>
        <div className="relative z-10 flex min-h-screen flex-col">
          <BookModalProvider>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:rounded-md"
            >
              Skip to main content
            </a>
            <Header />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </BookModalProvider>
        </div>
      </body>
    </html>
  );
}
