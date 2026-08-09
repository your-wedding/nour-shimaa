import type { T, Lang } from "../i18n/translations";
import { OrnamentDivider } from "./OrnamentDivider";
import { asset } from "../lib/assets";

export function Bridesmaids({ t, lang }: { t: T; lang: Lang }) {
  const isAr = lang === "ar";

  return (
    <section className="relative px-6 py-16">
      <div className="text-center">
        <div className={`text-[10px] text-gold-deep/70 ${isAr ? "font-arabic text-sm" : "tracking-[0.5em] uppercase"}`}>
          {t.bridesmaidsKicker}
        </div>
        <h2 className={`mt-2 text-5xl text-gold-deep ${isAr ? "font-calligraphy" : "font-script"}`}>
          {t.bridesmaidsTitle}
        </h2>
        <OrnamentDivider className="mx-auto mt-3 h-5 w-40 text-gold-deep" />
      </div>
      <div className="mx-auto mt-10 max-w-md">
        <div className="relative overflow-hidden border border-gold-deep/40 bg-cream/60 p-1.5">
          <div className="relative border border-gold/40">
            <img
              src={asset("/gallery/gallery-4.jpg")}
              alt={t.bridesmaidsTitle}
              loading="lazy"
              className="block w-full object-cover"
              style={{ height: "400px" }}
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
    </section>
  );
}