import { OrnamentDivider } from "./OrnamentDivider";
import type { T } from "../i18n/translations";

export function MapSection({ t, lang }: { t: T; lang: string }) {
  const isAr = lang === "ar";

  return (
    <section className="relative px-6 py-16">
      <div className="mx-auto max-w-xl text-center">
        <h2 className={`text-4xl text-gold-deep ${isAr ? "font-calligraphy" : "font-script"}`}>
          {t.directionsTitle}
        </h2>
        <OrnamentDivider className="mx-auto mt-3 h-5 w-40 text-gold-deep" />
        <div className="mt-6 overflow-hidden rounded-sm border border-gold/30 shadow-xl shadow-gold-deep/10">
          <iframe
            title="Wedding venue location"
            src="https://www.google.com/maps?q=31.2166456,30.1042846&output=embed"
            className="h-72 w-full"
            loading="lazy"
          />
        </div>
        <a
          href="https://www.google.com/maps/place/%D9%82%D8%A7%D8%B9%D9%87+%D8%AC%D8%A7%D8%B1%D8%AF%D9%8A%D9%86%D9%8A%D8%A7%E2%80%AD/@31.2166456,30.1042846,17z/data=!3m1!4b1!4m6!3m5!1s0x14f5d9e851c12773:0xef7cb5d6a7ab1cf6!8m2!3d31.2166456!4d30.1042846!16s%2Fg%2F11p_82y4pq!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noreferrer"
          className={`mt-6 inline-block border-b border-gold-deep/40 pb-1 text-xs text-gold-deep hover:text-ink transition ${isAr ? "font-arabic text-sm" : "font-display tracking-[0.3em] uppercase"}`}
        >
          {t.openInMaps}
        </a>
      </div>
    </section>
  );
}
