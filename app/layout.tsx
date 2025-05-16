import "./globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { WizardProvider } from "@/lib/context/WizardContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Morphos AI Quickstart",
  description: "Configure your AI solution with Green Vectors™ technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WizardProvider>
          <div className="flex flex-col min-h-screen">
            {/* Sticky Header */}
            <header className="sticky top-0 bg-white shadow z-50 p-4 flex justify-between items-center">
              <h1 className="text-xl font-semibold">Morphos AI Quickstart</h1>
              <nav>
                <a href="/" className="text-blue-600 hover:underline">
                  Home
                </a>
              </nav>
            </header>

            {/* Main Content */}
            <main className="flex-1 p-4">{children}</main>

            {/* Sticky Footer */}
            <footer className="sticky bottom-0 bg-gray-100 text-center p-4 text-sm text-gray-600">
              © 2025 Morphos AI. All rights reserved.
            </footer>
          </div>
        </WizardProvider>
      </body>
    </html>
  );
}