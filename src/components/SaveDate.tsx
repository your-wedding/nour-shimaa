import type { T, Lang } from "../i18n/translations";
import { OrnamentDivider } from "./OrnamentDivider";
import { Countdown } from "./Countdown";
import { PhotoStrip } from "./PhotoStrip";

export function SaveDate({ t, lang, target }: { t: T; lang: Lang; target: Date }) {
  const isAr = lang === "ar";

  return (
    <>
      <section className="relative overflow-hidden px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className={`text-4xl text-gold-deep ${isAr ? "font-calligraphy" : "font-script"}`}>
            {t.countdownTitle}
          </h2>
          <OrnamentDivider className="mx-auto mt-3 h-5 w-40 text-gold-deep" />
          <div className="mt-10">
            <Countdown target={target} t={t} />
          </div>
        </div>
      </section>

      <PhotoStrip photos={["/gallery/gallery-2.jpg"]} />

      <section className="relative px-6 py-20">
        <div className="mx-auto max-w-md text-center">
          <h2 className={`text-4xl text-gold-deep ${isAr ? "font-calligraphy" : "font-script"}`}>
            {t.saveDateTitle}
          </h2>
          <div className="mx-auto mt-4 inline-block">
            <div className="relative px-8 py-2">
              <span className="absolute inset-x-0 top-0 h-full skew-x-[-8deg] border-y border-gold-deep/50 bg-gold-deep/10 shadow-[0_4px_12px_-4px_oklch(0.5_0.1_65/0.4)]" />
              <span className="absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rotate-45 border border-gold-deep/50 bg-gold-deep/10" />
              <span className="absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rotate-45 border border-gold-deep/50 bg-gold-deep/10" />
              <span className={`relative z-10 text-[10px] tracking-[0.4em] text-gold-deep ${isAr ? "font-arabic text-sm tracking-normal" : "uppercase"}`}>
                {t.monthYear}
              </span>
            </div>
          </div>
          <OrnamentDivider className="mx-auto mt-3 h-5 w-40 text-gold-deep" />
          <p className={`mt-6 text-sm leading-relaxed text-ink/75 ${isAr ? "font-arabic text-base" : ""}`}>
            {t.saveDateText}
          </p>
          <div className="relative mx-auto mt-8 inline-flex flex-col items-center gap-2 overflow-hidden border border-gold-deep/50 bg-cream/60 px-10 py-6 shadow-[0_15px_40px_-20px_oklch(0.35_0.07_60/0.4)]">
            <span className="pointer-events-none absolute inset-0 animate-[shimmer_4s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
            <div className={`relative text-[10px] text-gold-deep/80 ${isAr ? "font-arabic text-sm tracking-normal" : "font-display tracking-[0.4em] uppercase"}`}>
              {t.saturday}
            </div>
            <div className="font-script text-7xl leading-none text-gold-gradient">09</div>
            <div className={`text-xs text-ink/70 ${isAr ? "font-arabic text-sm" : "font-display tracking-[0.35em] uppercase"}`}>
              {t.monthYear}
            </div>
            <div className={`mt-1 text-[11px] text-ink/55 ${isAr ? "font-arabic text-xs" : "italic"}`}>
              {t.time}
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Mousa%20%26%20Shahd%20Wedding&dates=20261009T153000Z/20261009T200000Z&location=Wedding%20Venue&details=Wedding%20of%20Mousa%20%26%20Shahd"
              target="_blank"
              rel="noreferrer"
              className={`group relative overflow-hidden border border-gold-deep/60 bg-gold-deep px-6 py-3 text-xs text-cream transition hover:bg-ink ${isAr ? "font-arabic text-sm" : "font-display tracking-[0.3em] uppercase"}`}
            >
              <span className="relative z-10">{t.addGoogle}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-30 -translate-x-full group-hover:translate-x-full transition-all duration-700" />
            </a>
            <a
              href="/mousa-shahd-wedding.ics"
              target="_blank"
              rel="noreferrer"
              className={`border border-gold-deep/60 bg-transparent px-6 py-3 text-xs text-gold-deep transition hover:bg-gold-deep hover:text-cream ${isAr ? "font-arabic text-sm" : "font-display tracking-[0.3em] uppercase"}`}
            >
              {t.addApple}
            </a>
          </div>
        </div>
      </section>

      <PhotoStrip photos={["/gallery/gallery-3.jpg"]} />
    </>
  );
}
