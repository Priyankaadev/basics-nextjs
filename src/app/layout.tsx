import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";

export const metadata: Metadata = {
  title: "Contact Manager",
  description: "Manage your contacts efficiently with Contact Manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="container mx-auto py-8 px-4">
            {children}
            </main>
        </div>
      </body>
    </html>
  );
}
