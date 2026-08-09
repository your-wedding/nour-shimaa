import type { T } from "../i18n/translations";
import { OrnamentDivider } from "./OrnamentDivider";
import { FallingPetals } from "./FallingPetals";
import { asset } from "../lib/assets";

export function Hero({ t, lang, visible, petalsVisible }: { t: T; lang: string; visible: boolean; petalsVisible?: boolean }) {
  const isAr = lang === "ar";

  return (
    <section className={`relative h-[100dvh] min-h-[640px] w-full overflow-hidden ${visible ? "curtains-open" : ""}`}>
      <img src={asset("/hero-bg.jpg")} alt="Venue" className="absolute inset-0 h-full w-full object-cover"
        style={{ filter: "saturate(0.9) brightness(1.02)" }} />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center top, transparent 30%, oklch(0.6 0.06 60 / 0.35) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-transparent to-ink/40" />
      <div className="pointer-events-none absolute inset-4 border border-gold/40 sm:inset-6" />
      <div className="pointer-events-none absolute inset-5 border border-gold/20 sm:inset-7" />
      {["tl", "tr", "bl", "br"].map((corner) => (
        <span
          key={corner}
          className={`pointer-events-none absolute z-20 h-8 w-8 border-gold-deep ${
            corner === "tl" ? "left-5 top-5 border-l-2 border-t-2 sm:left-7 sm:top-7" :
            corner === "tr" ? "right-5 top-5 border-r-2 border-t-2 sm:right-7 sm:top-7" :
            corner === "bl" ? "left-5 bottom-5 border-b-2 border-l-2 sm:left-7 sm:bottom-7" :
            "right-5 bottom-5 border-b-2 border-r-2 sm:right-7 sm:bottom-7"
          }`}
        />
      ))}
      <div className="absolute left-1/2 top-0 z-30 chandelier-sway">
        <img src={asset("/chandelier.png")} alt="" className="h-[34vh] w-auto max-w-[60vw] object-contain"
          style={{ filter: "drop-shadow(0 8px 16px oklch(0.4 0.1 60 / 0.4))" }} />
      </div>
      <img src={asset("/curtain.png")} alt="" className="curtain curtain-left" />
      <img src={asset("/curtain.png")} alt="" className="curtain curtain-right" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center">
        <div className={visible ? "" : "opacity-0"}>
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-gold/60 bg-cream/60 shadow-[0_0_0_6px_oklch(0.95_0.04_85/0.6),0_0_0_7px_oklch(0.78_0.1_65/0.4),0_10px_30px_-10px_oklch(0.4_0.1_60/0.5)] backdrop-blur-sm fade-up" style={{ animationDelay: "0.15s" }}>
            <span className="font-names text-4xl text-gold-gradient">N<span className="font-serif-elegant text-xl italic text-gold-deep">&hearts;</span>S</span>
          </div>
          <div className={`mb-4 text-[10px] tracking-[0.5em] text-gold-deep/80 fade-up ${isAr ? "font-arabic text-sm tracking-normal" : "uppercase"}`} style={{ animationDelay: "0.3s" }}>
            {t.withHonor}
          </div>
          <h1 className="font-names text-[clamp(3.5rem,14vw,7rem)] leading-[0.85] text-ink/85 fade-up" style={{ animationDelay: "0.5s", filter: "drop-shadow(0 2px 8px oklch(0.95 0.02 90 / 0.6))" }}>
           Nour 
          </h1>
          <div className="my-1 font-serif-elegant text-2xl italic text-gold-deep fade-up" style={{ animationDelay: "0.65s" }}>&</div>
          <h1 className="font-names text-[clamp(3.5rem,14vw,7rem)] leading-[0.85] text-ink/85 fade-up" style={{ animationDelay: "0.8s", filter: "drop-shadow(0 2px 8px oklch(0.95 0.02 90 / 0.6))" }}>
            Shimaa
          </h1>
          <OrnamentDivider className="mx-auto mt-6 h-6 w-44 text-gold-deep fade-up" />
          <div className={`mt-4 text-sm md:text-base text-ink/80 fade-up ${isAr ? "font-arabic" : "font-display"}`} style={{ animationDelay: "1.1s", textShadow: "0 1px 6px oklch(0.98 0.01 90/0.8)" }}>
            {t.date}
          </div>
          <div className={`mt-1 text-xs text-ink/60 fade-up ${isAr ? "font-arabic" : "italic"}`} style={{ animationDelay: "1.2s", textShadow: "0 1px 6px oklch(0.98 0.01 90/0.8)" }}>
            {t.time}
          </div>
        </div>
        </div>
      </div>
      {petalsVisible && <FallingPetals count={26} />}
      <div className="absolute bottom-6 left-1/2 z-30 -translate-x-1/2 fade-up">
        <div className="flex flex-col items-center gap-2 text-gold-deep/80">
          <span className={`text-[10px] ${isAr ? "font-arabic" : "tracking-[0.35em] uppercase"}`}>
            {t.scroll}
          </span>
          <span className="block h-8 w-px animate-pulse bg-gold-deep/60" />
        </div>
      </div>
    </section>
  );
}