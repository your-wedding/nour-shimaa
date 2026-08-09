import type { Lang } from "../i18n/translations";

export function LanguageToggle({ lang, onToggle }: { lang: Lang; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="fixed right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-gold-deep/60 bg-cream/85 font-display text-[11px] tracking-[0.1em] text-gold-deep shadow-lg backdrop-blur transition hover:bg-gold-deep hover:text-cream hover:scale-105"
    >
      {lang === "en" ? "ع" : "EN"}
    </button>
  );
}