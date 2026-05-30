"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/images/look1.png",
  "/images/look2.png",
  "/images/look3.png",
  "/images/look4.png",
  "/images/look5.png",
  "/images/look6.png",
];

export default function Lookbook() {
  return (
    <section className="bg-[#f5f1ec] px-5 pt-4 pb-12">
      <div>
        {/* Header */}
        <div className="mb-8 text-center">
          <p className="mb-2 text-[11px] uppercase tracking-[0.4em] text-[#a67c52]">
            LOOKBOOK
          </p>

          <h2 className="font-luxury text-5xl leading-none text-[#2b2b2b]">
            Couple
            <br />
            Collection
          </h2>

          <div className="mx-auto mt-5 h-px w-20 bg-[#a67c52]/40" />

          <p className="mt-5 text-sm leading-7 text-[#777]">
            Inspirasi kebaya dan couple outfit untuk momen spesial yang
            berkesan.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid auto-rows-[210px] grid-cols-2 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className={`
                overflow-hidden
                rounded-[30px]
                bg-white
                shadow-[0_15px_35px_rgba(0,0,0,0.08)]
                ${index === 0 || index === 3 ? "row-span-2" : ""}
              `}
            >
              <Image
                src={image}
                alt={`Lookbook ${index + 1}`}
                width={600}
                height={900}
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8">
          <a
            href="https://www.instagram.com/floo_fashionn/"
            className="
              flex
              h-14
              w-full
              items-center
              justify-center
              rounded-full
              bg-[#2b2b2b]
              text-sm
              font-medium
              text-white
              shadow-[0_15px_30px_rgba(0,0,0,0.15)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:opacity-95
            "
          >
            View Full Collection
          </a>
        </div>

        {/* Divider ke Testimoni */}
        <div className="flex justify-center py-10">
          <div className="h-px w-24 bg-[#a67c52]/30" />
        </div>
      </div>
    </section>
  );
}
