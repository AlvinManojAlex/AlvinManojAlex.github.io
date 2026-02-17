import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alvin Manoj Alex - Portfolio",
  description: "Software developer portfolio showcasing projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
