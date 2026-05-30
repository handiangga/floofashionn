"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const testimonials = [
  "/testimoni/testi1.png",
  "/testimoni/testi2.png",
  "/testimoni/testi3.png",
  "/testimoni/testi4.png",
  "/testimoni/testi5.png",
  "/testimoni/testi6.png",
];

export default function Testimoni() {
  return (
    <section className="relative overflow-hidden bg-[#f5f1ec] px-5 pb-20">
      {/* Blur */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#d6b18b]/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#c8a27a]/20 blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="mt-5 font-luxury text-5xl leading-none text-[#2b2b2b]">
            Testimoni
            <br />
            Customers
          </h2>

          <div className="mx-auto mt-5 h-px w-20 bg-[#a67c52]/40" />

          <p className="mt-5 text-sm leading-7 text-[#777]">
            Terima kasih telah mempercayakan momen spesial bersama Floo_Fashionn
            ✨
          </p>

          <div className="mt-4 flex justify-center gap-1 text-[#a67c52]">
            ★★★★★
          </div>

          <p className="mt-2 text-xs text-[#999]">100K++ pelanggan puas</p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          effect="coverflow"
          centeredSlides
          loop
          grabCursor
          slidesPerView={1.05}
          spaceBetween={20}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            scale: 0.92,
          }}
        >
          {testimonials.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="
                  overflow-hidden
                  rounded-[36px]
                  bg-white
                  p-2
                  shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                "
              >
                <div className="overflow-hidden rounded-[30px]">
                  <Image
                    src={image}
                    alt={`Testimoni ${index + 1}`}
                    width={1200}
                    height={1800}
                    priority={index === 0}
                    className="w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Footer */}
        <div className="mt-10 text-center">
          <div className="mx-auto h-px w-24 bg-[#a67c52]/30" />

          <p className="mt-6 text-xs tracking-[0.3em] text-[#a67c52] uppercase">
            FLOO_FASHIONN
          </p>
        </div>
      </div>
    </section>
  );
}
