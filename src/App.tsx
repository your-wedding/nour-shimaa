import { useState, useEffect } from "react";
import { translations, type Lang } from "./i18n/translations";
import { Envelope } from "./components/Envelope";
import { Hero } from "./components/Hero";
import { Bismillah } from "./components/Bismillah";
import { SaveDate } from "./components/SaveDate";
import { Venue } from "./components/Venue";
import { MapSection } from "./components/MapSection";
import { PhotoStrip } from "./components/PhotoStrip";
import { RSVPSection } from "./components/RSVPSection";
import { MusicPlayer } from "./components/MusicPlayer";
import { LanguageToggle } from "./components/LanguageToggle";
import { OrnamentDivider } from "./components/OrnamentDivider";

const WEDDING_DATE = new Date("2026-10-09T16:00:00Z");

const PHOTO_GROUPS = [
  ["/gallery/gallery-1.jpg", "/gallery/gallery-2.jpg"],
  ["/gallery/gallery-3.jpg", "/gallery/gallery-4.jpg"],
  ["/gallery/gallery-5.jpg", "/gallery/gallery-6.jpg"],
  ["/gallery/gallery-7.jpg", "/gallery/gallery-8.jpg"],
];

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

      <Hero t={t} lang={lang} visible={heroVisible} petalsVisible={petalsVisible} />

      <Bismillah t={t} />

      <PhotoStrip photos={PHOTO_GROUPS[0]} lang={lang} />

      <SaveDate t={t} lang={lang} target={WEDDING_DATE} />

      <PhotoStrip photos={PHOTO_GROUPS[1]} lang={lang} />

      <Venue t={t} lang={lang} />

      <PhotoStrip photos={PHOTO_GROUPS[2]} lang={lang} />

      <MapSection t={t} lang={lang} />

      <PhotoStrip photos={PHOTO_GROUPS[3]} lang={lang} />

      <RSVPSection t={t} lang={lang} />

      <footer className="relative px-6 py-20 text-center">
        <OrnamentDivider className="mx-auto h-6 w-48 text-gold-deep" />
        <p className={`mt-6 text-3xl text-gold-deep ${isAr ? "font-calligraphy" : "font-script"}`}>
          {t.footer}
        </p>
        <div className="mt-6 text-xs tracking-[0.4em] uppercase text-ink/50">
          {t.groomName.toUpperCase()} &amp; {t.brideName.toUpperCase()} · 09.10.2026
        </div>
      </footer>

      <MusicPlayer />
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
