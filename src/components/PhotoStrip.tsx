import type { Lang } from "../i18n/translations";
import { asset } from "../lib/assets";

export function PhotoStrip({ photos, lang }: { photos: string[]; lang: Lang }) {
  const isAr = lang === "ar";

  return (
    <div className="relative px-6 py-12">
      <div className={`mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 ${isAr ? "gap-y-8" : ""}`}>
        {photos.map((src, i) => (
          <div key={src} className={`relative ${i % 2 === 1 ? "sm:translate-y-12" : ""}`}>
            <div className="relative overflow-hidden border border-gold-deep/40 bg-cream/60 p-1.5">
              <div className="relative border border-gold/40">
                <img
                  src={asset(src)}
                  alt=""
                  loading="lazy"
                  className="block h-[340px] w-full object-cover sm:h-[380px]"
                />
                {["tl", "tr", "bl", "br"].map((corner) => (
                  <span
                    key={corner}
                    className={`pointer-events-none absolute h-6 w-6 border-gold ${
                      corner === "tl" ? "left-2 top-2 border-l border-t" :
                      corner === "tr" ? "right-2 top-2 border-r border-t" :
                      corner === "bl" ? "left-2 bottom-2 border-b border-l" :
                      "right-2 bottom-2 border-b border-r"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
