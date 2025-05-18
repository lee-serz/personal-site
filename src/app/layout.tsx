import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./reset.css";
import "animate.css";
import "hover.css/css/hover-min.css";
import Script from "next/script";
import { Toaster } from "sonner";

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
      <body className={sora.variable}>
        {children}
        <Toaster
          position="top-center"
          richColors
          closeButton
          toastOptions={{
            duration: 5000,
          }}
        />
        <Script
          src={process.env.RYBBIT_URL}
          data-site-id={process.env.RYBBIT_ID}
          defer
        />
      </body>
    </html>
  );
}
