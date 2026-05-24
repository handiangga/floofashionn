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
    <section className="bg-[#f5f1ec] px-5 pt-10 pb-24">
      <div className="mx-auto max-w-md">
        {/* Heading */}
        <div className="mb-8">
          <p className="mb-2 text-[11px] tracking-[0.3em] text-[#a67c52] uppercase">
            Lookbook
          </p>

          <h2 className="text-4xl leading-tight text-[#2b2b2b]">
            Inspired
            <br />
            Everyday Moments
          </h2>
        </div>

        {/* Grid Images */}
        <div className="grid grid-cols-2 gap-4 auto-rows-[220px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className={`overflow-hidden rounded-[28px] shadow-[0_10px_30px_rgba(0,0,0,0.06)]
              ${index === 0 ? "row-span-2" : ""}
              ${index === 3 ? "row-span-2" : ""}
            `}
            >
              <Image
                src={image}
                alt="lookbook"
                width={500}
                height={700}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <button className="w-full rounded-full bg-[#2b2b2b] py-4 text-sm font-medium text-white transition hover:opacity-90">
            View Full Collection
          </button>
        </div>
      </div>
    </section>
  );
}
    