import type { Metadata } from "next";
import "./globals.css";

import { Poppins, Cormorant_Garamond } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Floo_Fashionn",
  description: "Luxury Modest Wear",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${poppins.variable}
          ${cormorant.variable}
          font-sans
          antialiased
          bg-[#f5f1ec]
          text-[#2b2b2b]
        `}
      >
        {children}
      </body>
    </html>
  );
}
