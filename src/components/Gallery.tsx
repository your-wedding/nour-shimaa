import { useState } from "react";
import type { T, Lang } from "../i18n/translations";
import { OrnamentDivider } from "./OrnamentDivider";
import { asset } from "../lib/assets";

const PHOTOS = Array.from({ length: 8 }, (_, i) => `/gallery/gallery-${i + 1}.jpg`);

export function Gallery({ t, lang }: { t: T; lang: Lang }) {
  const isAr = lang === "ar";
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <div className={`text-[10px] text-gold-deep/70 ${isAr ? "font-arabic text-sm" : "tracking-[0.5em] uppercase"}`}>
            {t.galleryKicker}
          </div>
          <h2 className={`mt-2 text-5xl text-gold-deep ${isAr ? "font-calligraphy" : "font-script"}`}>
            {t.galleryTitle}
          </h2>
          <OrnamentDivider className="mx-auto mt-3 h-5 w-40 text-gold-deep" />
          <p className={`mt-4 text-sm leading-relaxed text-ink/75 ${isAr ? "font-arabic text-base" : ""}`}>
            {t.galleryText}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {PHOTOS.map((src, i) => (
            <button
              key={src}
              onClick={() => setOpen(i)}
              className="group relative aspect-[3/4] overflow-hidden border border-gold-deep/40 bg-cream/60 p-1.5 transition hover:border-gold-deep"
            >
              <img
                src={asset(src)}
                alt={`${t.galleryTitle} ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-2 ring-1 ring-inset ring-cream/30" />
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4"
          onClick={() => setOpen(null)}
        >
          <img
            src={asset(PHOTOS[open])}
            alt={`${t.galleryTitle} ${open + 1}`}
            className="max-h-[90vh] max-w-full border border-gold/50 object-contain"
          />
          <button
            onClick={() => setOpen(null)}
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 text-2xl text-cream transition hover:bg-gold-deep hover:text-cream"
          >
            ×
          </button>
          {open > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); setOpen(open - 1); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-gold/50 px-4 py-2 text-xl text-cream transition hover:bg-gold-deep"
            >
              ‹
            </button>
          )}
          {open < PHOTOS.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); setOpen(open + 1); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-gold/50 px-4 py-2 text-xl text-cream transition hover:bg-gold-deep"
            >
              ›
            </button>
          )}
        </div>
      )}
    </section>
  );
}
