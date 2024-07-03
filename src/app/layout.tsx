import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TrackVentory",
  description: "Sistema de gestão de estoque",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
