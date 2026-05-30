import Link from "next/link";

export default function ComingSoon() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f1ec] px-6">
      <div className="max-w-md text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#a67c52]">
          FLOO_FASHIONN
        </p>

        <h1 className="font-luxury text-6xl leading-none text-[#2b2b2b]">
          Coming
          <br />
          Soon
        </h1>

        <div className="mx-auto mt-6 h-px w-20 bg-[#a67c52]/40" />

        <p className="mt-8 text-sm leading-7 text-[#777]">
          Website collection sedang kami persiapkan untuk memberikan pengalaman
          terbaik dalam memilih kebaya dan outfit spesial Anda.
        </p>

        <div className="mt-10">
          <Link
            href="https://wa.me/6281393354305"
            className="
              inline-flex
              h-14
              items-center
              justify-center
              rounded-full
              bg-[#a67c52]
              px-8
              text-white
              shadow-[0_15px_35px_rgba(166,124,82,0.25)]
              transition
              hover:bg-[#9a734c]
            "
          >
            Chat Admin
          </Link>
        </div>

        <p className="mt-6 text-xs text-[#999]">
          Untuk sementara, seluruh koleksi dapat dilihat melalui WhatsApp,
          Shopee, dan TikTok.
        </p>
      </div>
    </main>
  );
}
