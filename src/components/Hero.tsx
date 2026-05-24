"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f5f1ec] px-5 pt-24 pb-14">
      <div className="mx-auto max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-center text-[11px] tracking-[0.35em] text-[#a67c52] uppercase">
            Floo Fashion
          </p>

          <h1 className="text-center text-5xl leading-[1.05] font-semibold text-[#2b2b2b]">
            Elevate
            <br />
            Your Style
          </h1>

          <p className="mx-auto mt-5 max-w-xs text-center text-sm leading-7 text-[#777]">
            Premium modest fashion with timeless elegance and modern comfort.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <button className="rounded-full bg-[#a67c52] py-4 text-sm font-medium text-white">
              Shop Collection
            </button>

            <button className="rounded-full border border-[#a67c52] py-4 text-sm font-medium text-[#a67c52]">
              Explore Lookbook
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
