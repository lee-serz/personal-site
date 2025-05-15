import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./reset.css";
import "animate.css";
import "hover.css/css/hover-min.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "derante",
  description: "derante's personal site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={sora.variable}>{children}</body>
    </html>
  );
}
