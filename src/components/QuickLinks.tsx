"use client";

import { Globe, MessageCircle, Store, MapPin, Smartphone } from "lucide-react";

const links = [
  {
    title: "Website",
    subtitle: "Official Collection",
    icon: Globe,
    href: "#",
  },
  {
    title: "Shopee",
    subtitle: "Shop With Promo",
    icon: Store,
    href: "#",
  },
  {
    title: "WhatsApp",
    subtitle: "Fast Response",
    icon: MessageCircle,
    href: "#",
  },
  {
    title: "TikTok Shop",
    subtitle: "Trending Collection",
    icon: Smartphone,
    href: "#",
  },
  {
    title: "Offline Store",
    subtitle: "Visit Our Store",
    icon: MapPin,
    href: "#",
  },
];

export default function QuickLinks() {
  return (
    <section className="bg-[#f5f1ec] px-6 pb-24">
      <div className="mx-auto max-w-md space-y-4">
        {links.map((item, index) => {
          const Icon = item.icon;

          return (
            <a
              key={index}
              href={item.href}
              className="group flex items-center justify-between rounded-[24px] border border-[#e7d9ca] bg-white/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#a67c52]/10">
                  <Icon className="h-6 w-6 text-[#a67c52]" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#2b2b2b]">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#777]">{item.subtitle}</p>
                </div>
              </div>

              <div className="text-sm text-[#a67c52] transition group-hover:translate-x-1">
                Explore →
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
