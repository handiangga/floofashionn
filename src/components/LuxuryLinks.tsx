"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";

const links = [
  {
    title: "WhatsApp Admin",
    subtitle: "Fast Response Everyday",
    image: "/logo/wa.png",
    href: "https://wa.me/6281393354305",
  },
  {
    title: "Shopee Floo_Fashionn",
    subtitle: "Shop With Promo",
    image: "/logo/shopee.png",
    href: "https://shopee.co.id/floo_fashionn",
  },
  {
    title: "TikTok Floo_Fashionn",
    subtitle: "Trending Collection",
    image: "/logo/tiktok.png",
    href: "https://www.tiktok.com/@floo_fashionn",
  },
];

export default function LuxuryLinks() {
  return (
    <section className="relative overflow-hidden bg-[#f5f1ec] px-5 pt-6 pb-4">
      {/* Background Blur */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-24 -left-12 h-72 w-72 rounded-full bg-[#d6b18b] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#c8a27a] blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Hero */}
        <div className="mb-6 text-center">
          <Image
            src="/logo/logo.png"
            alt="Floo Fashionn"
            width={220}
            height={110}
            priority
            className="mx-auto mb-2 object-contain"
          />

          <h1 className="font-luxury text-5xl leading-[0.9] text-[#2b2b2b]">
            Kebaya
            <br />
            Collection
          </h1>

          <div className="mx-auto mt-4 h-px w-16 bg-[#a67c52]/40" />

          <p className="mt-3 text-sm leading-6 text-[#777]">
            Elegant outfit inspiration for timeless moments.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-5 grid grid-cols-3 gap-2">
          <div className="rounded-2xl bg-white/80 px-3 py-2 text-center shadow-sm">
            <p className="text-base font-semibold text-[#a67c52]">100K+</p>
            <p className="text-[10px] text-[#777]">Customers</p>
          </div>

          <div className="rounded-2xl bg-white/80 px-3 py-2 text-center shadow-sm">
            <p className="text-base font-semibold text-[#a67c52]">500+</p>
            <p className="text-[10px] text-[#777]">Collection</p>
          </div>

          <div className="rounded-2xl bg-white/80 px-3 py-2 text-center shadow-sm">
            <p className="text-base font-semibold text-[#a67c52]">4.9★</p>
            <p className="text-[10px] text-[#777]">Rating</p>
          </div>
        </div>

        {/* Website Button */}
        <Link
          href="/coming-soon"
          className="
            group
            mb-3
            flex
            items-center
            justify-between
            rounded-[28px]
            bg-[#a67c52]
            px-5
            py-4
            text-white
            shadow-[0_12px_30px_rgba(166,124,82,0.20)]
            transition-all
            duration-300
            hover:bg-[#9a734c]
          "
        >
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
              <Globe className="h-6 w-6 text-[#a67c52]" />
            </div>

            <div>
              <h3 className="text-sm font-semibold">Website Collection</h3>

              <p className="text-[11px] text-white/75">Explore Our Catalog</p>
            </div>
          </div>

          <span className="text-xl transition group-hover:translate-x-1">
            →
          </span>
        </Link>

        {/* Social Links */}
        <div className="space-y-3">
          {links.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                items-center
                justify-between
                rounded-[28px]
                bg-[#a67c52]
                px-5
                py-4
                text-white
                shadow-[0_12px_30px_rgba(166,124,82,0.20)]
                transition-all
                duration-300
                hover:bg-[#9a734c]
              "
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-sm font-semibold">{item.title}</h3>

                  <p className="text-[11px] text-white/75">{item.subtitle}</p>
                </div>
              </div>

              <span className="text-xl transition group-hover:translate-x-1">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
