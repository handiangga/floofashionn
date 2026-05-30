import LuxuryLinks from "@/components/LuxuryLinks";
import Lookbook from "@/components/Lookbook";
import Testimoni from "@/components/Testimoni";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#ebe4dc]">
      {/* Background Blur Luxury */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#d6b18b]/20 blur-3xl" />
        <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-[#c8a27a]/20 blur-3xl" />
      </div>

      <div className="relative flex justify-center px-4 py-6 md:py-10">
        <div
          className="
            w-full
            max-w-md
            overflow-hidden
            rounded-[36px]
            bg-[#f5f1ec]
            shadow-[0_25px_80px_rgba(0,0,0,0.12)]
            ring-1
            ring-[#d8c7b5]/40
          "
        >
          <LuxuryLinks />
          <Lookbook />
          <Testimoni />
        </div>
      </div>
    </main>
  );
}
