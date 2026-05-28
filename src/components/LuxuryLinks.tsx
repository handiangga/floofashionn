"use client";
import Image from "next/image";
import { Globe } from "lucide-react";

const links = [
  {
    title: "Website Collection",
    subtitle: "Explore Our Catalog",
    icon: <Globe className="h-6 w-6" />,
    href: "#",
  },
  {
    title: "WhatsApp Admin",
    subtitle: "Fast Response Everyday",
    image: "/logo/wa.png", // masukkan logo WA di folder public/logo
    href: "https://wa.me/6281393354305",
  },
  {
    title: "Shopee Floo_Fashionn",
    subtitle: "Shop With Promo",
    image: "/logo/shopee.png", // masukkan logo Shopee di folder public/logo
    href: "https://shopee.co.id/floo_fashionn",
  },
  {
    title: "TikTok Floo_Fashionn",
    subtitle: "Trending Collection",
    image: "/logo/tiktok.png", // masukkan logo TikTok di folder public/logo
    href: "https://www.tiktok.com/@floo_fashionn",
  },
];

export default function LuxuryLinks() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f5f1ec] px-5 py-10">
      {/* Background Blur */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-20 left-0 h-72 w-72 rounded-full bg-[#d6b18b] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#c8a27a] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-md">
        {/* Logo */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-[12px] uppercase tracking-[0.4em] text-[#a67c52]">
            FLOO_FASHIONN
          </p>

          <h1 className="text-5xl font-light leading-tight text-[#2b2b2b]">
            Luxury
            <br />
            Modest Wear
          </h1>

          <p className="mt-4 text-sm leading-7 text-[#777]">
            Elegant outfit inspiration for timeless moments.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-4">
          {links.map((item, index) => {
            return (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-[26px] bg-[#a67c52] px-5 py-4 text-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition duration-300 hover:scale-[1.015] hover:bg-[#9a734c]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#a67c52]">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    ) : (
                      item.icon
                    )}
                  </div>

                  <div>
                    <h3 className="text-base font-semibold">{item.title}</h3>

                    <p className="text-xs text-white/70">{item.subtitle}</p>
                  </div>
                </div>

                <span className="text-lg">→</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
