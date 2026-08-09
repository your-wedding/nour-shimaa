import { useState, useEffect } from "react";
import { translations, type Lang } from "./i18n/translations";
import { Envelope } from "./components/Envelope";
import { Hero } from "./components/Hero";
import { Bismillah } from "./components/Bismillah";
import { SaveDate } from "./components/SaveDate";
import { Bridesmaids } from "./components/Bridesmaids";
import { Venue } from "./components/Venue";
import { MapSection } from "./components/MapSection";
import { RSVPSection } from "./components/RSVPSection";
import { MusicPlayer } from "./components/MusicPlayer";
import { LanguageToggle } from "./components/LanguageToggle";
import { OrnamentDivider } from "./components/OrnamentDivider";
import { Reveal } from "./components/Reveal";
import { FallingPetals } from "./components/FallingPetals";
import { PhotoStrip } from "./components/PhotoStrip";

const WEDDING_DATE = new Date("2026-10-09T16:00:00Z");

function MainContent() {
  const [lang, setLang] = useState<Lang>("en");
  const [heroVisible, setHeroVisible] = useState(false);
  const [petalsVisible, setPetalsVisible] = useState(false);
  const t = translations[lang];
  const isAr = lang === "ar";

  useEffect(() => {
    const t1 = setTimeout(() => setHeroVisible(true), 1400);
    const t2 = setTimeout(() => setPetalsVisible(true), 2400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <main className="relative w-full bg-paper" dir={isAr ? "rtl" : "ltr"}>
      <LanguageToggle lang={lang} onToggle={() => setLang(isAr ? "en" : "ar")} />

      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <span className="font-names text-[38rem] leading-none text-gold-deep/5 select-none">N&amp;S</span>
      </div>

      <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden" aria-hidden>
        <FallingPetals count={10} />
      </div>

      <div className="relative z-10">
        <Hero t={t} lang={lang} visible={heroVisible} petalsVisible={petalsVisible} />

        <Reveal><Bismillah t={t} /></Reveal>

        <Reveal><PhotoStrip photos={["/gallery/gallery-1.jpg"]} /></Reveal>

        <Reveal><SaveDate t={t} lang={lang} target={WEDDING_DATE} /></Reveal>

        <Reveal><Bridesmaids t={t} lang={lang} /></Reveal>

        <Reveal><Venue t={t} lang={lang} /></Reveal>

        <Reveal><MapSection t={t} lang={lang} /></Reveal>

        <Reveal><RSVPSection t={t} lang={lang} /></Reveal>

        <footer className="relative px-6 py-20 text-center">
          <OrnamentDivider className="mx-auto h-6 w-48 text-gold-deep" />
          <p className={`mt-6 text-3xl text-gold-deep ${isAr ? "font-calligraphy" : "font-script"}`}>
            {t.footer}
          </p>
          <div className="mt-4 font-names text-2xl text-gold-deep/80">Nour &amp; Shimaa</div>
          <div className="mt-6 text-xs tracking-[0.4em] uppercase text-ink/50">
            {t.groomName.toUpperCase()} &amp; {t.brideName.toUpperCase()} · 09.10.2026
          </div>
        </footer>

        <MusicPlayer />
      </div>
    </main>
  );
}

function App() {
  const [invitationOpen, setInvitationOpen] = useState(false);

  if (!invitationOpen) {
    return <Envelope onOpen={() => setInvitationOpen(true)} t={translations["en"]} />;
  }

  return (
    <div className="animate-[fade-up_0.9s_ease-out]">
      <MainContent />
    </div>
  );
}

export default App;
