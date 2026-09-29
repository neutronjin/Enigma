import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Users, Calendar, Award, FolderGit2 } from 'lucide-react';

interface HeroProps {
  onOpenJoin: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoin }) => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-20 pb-28 sm:pt-28 sm:pb-36 bg-gradient-to-b from-[#fef8e2] via-[#FCF1D0] to-[#f6e6b8] dark:from-[#051458] dark:via-[#010736] dark:to-[#010736] transition-colors duration-300">
      
      {/* Dynamic Creative Ambient Gradients (Vibrant background, pure solid text) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-44 left-1/2 -z-10 h-[720px] w-[1300px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/20 via-amber-400/15 to-transparent blur-3xl dark:from-orange-500/30 dark:via-[#1a2b8c]/50 dark:to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -right-24 -z-10 h-[450px] w-[450px] rounded-full bg-gradient-to-br from-amber-400/20 via-orange-500/10 to-transparent blur-3xl dark:from-[#2a3eb5]/35 dark:to-orange-500/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -left-24 -z-10 h-[450px] w-[450px] rounded-full bg-gradient-to-tr from-orange-400/20 via-amber-300/15 to-transparent blur-3xl dark:from-orange-600/20 dark:to-[#1e3094]/40"
      />

      {/* Decorative Technical Grid Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06] dark:bg-[radial-gradient(#60a5fa_1px,transparent_1px)] dark:opacity-[0.10]"
      />

      {/* Subtle Architectural Guide Accents */}
      <div aria-hidden="true" className="pointer-events-none absolute top-12 left-8 text-amber-900/20 dark:text-blue-400/20 font-mono text-xs hidden lg:block select-none tracking-wider">
        + 12.9716° N, 77.5946° E
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute top-12 right-8 text-amber-900/20 dark:text-blue-400/20 font-mono text-xs hidden lg:block select-none tracking-wider">
        TC//2026.DECODE
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">

        {/* Massive ENIGMA Wordmark in Sculptural Syne Typography */}
        <div className="relative inline-block">
          <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[8.5rem] font-extrabold tracking-[0.18em] font-enigma leading-none text-stone-900 dark:text-white select-none transition-colors">
            ENIGMA
          </h1>
          <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-orange-600 dark:bg-orange-500 opacity-80" />
        </div>

        {/* Tagline in Sophisticated Playfair Display Editorial Font */}
        <p className="mt-8 text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-medium italic text-stone-800 dark:text-stone-100 font-tagline text-balance max-w-3xl mx-auto leading-[1.28] tracking-tight">
          Where curiosity meets code and innovation has no boundaries.
        </p>

        {/* Club description */}
        <p className="mt-5 text-base sm:text-lg leading-relaxed text-stone-700 dark:text-stone-300 max-w-2xl mx-auto text-balance font-normal">
          {t.heroDescription}
        </p>

        {/* Action Buttons with refined micro-interactions and glow */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#events"
            className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-orange-600 px-8 text-sm font-bold text-white shadow-lg shadow-orange-600/25 hover:bg-orange-500 hover:shadow-orange-500/35 active:bg-orange-700 transition-all hover:scale-[1.02]"
          >
            <span>{t.heroCtaEvents}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>

          <button
            onClick={onOpenJoin}
            className="inline-flex h-12 items-center justify-center rounded-xl border border-amber-900/20 bg-white/80 px-8 text-sm font-bold text-stone-800 hover:bg-white hover:border-orange-500/40 dark:border-blue-900/70 dark:bg-[#040e54]/80 dark:text-stone-100 dark:hover:bg-[#071775] transition-all hover:scale-[1.02] shadow-xs backdrop-blur-xs"
          >
            {t.heroCtaJoin}
          </button>
        </div>

        {/* Refined Modular Stats Showcase */}
        <div className="mt-16 pt-10 border-t border-amber-900/15 dark:border-blue-950/80 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
          <div className="rounded-2xl p-4 sm:p-5 bg-white/45 dark:bg-[#020b4d]/50 backdrop-blur-xs border border-amber-900/10 dark:border-blue-900/50 shadow-2xs hover:border-orange-500/30 transition-colors">
            <div className="flex items-center justify-center text-orange-600 dark:text-orange-400 mb-2">
              <Users className="h-4 w-4 opacity-80" />
            </div>
            <div className="text-3xl sm:text-4xl font-black tracking-tight text-stone-900 dark:text-white font-mono tabular-nums">
              300+
            </div>
            <div className="mt-1.5 text-xs text-stone-600 dark:text-stone-400 font-semibold tracking-wide">
              {t.heroStatMembers}
            </div>
          </div>

          <div className="rounded-2xl p-4 sm:p-5 bg-white/45 dark:bg-[#020b4d]/50 backdrop-blur-xs border border-amber-900/10 dark:border-blue-900/50 shadow-2xs hover:border-orange-500/30 transition-colors">
            <div className="flex items-center justify-center text-orange-600 dark:text-orange-400 mb-2">
              <Calendar className="h-4 w-4 opacity-80" />
            </div>
            <div className="text-3xl sm:text-4xl font-black tracking-tight text-stone-900 dark:text-white font-mono tabular-nums">
              25+
            </div>
            <div className="mt-1.5 text-xs text-stone-600 dark:text-stone-400 font-semibold tracking-wide">
              {t.heroStatEvents}
            </div>
          </div>

          <div className="rounded-2xl p-4 sm:p-5 bg-white/45 dark:bg-[#020b4d]/50 backdrop-blur-xs border border-amber-900/10 dark:border-blue-900/50 shadow-2xs hover:border-orange-500/30 transition-colors">
            <div className="flex items-center justify-center text-orange-600 dark:text-orange-400 mb-2">
              <Award className="h-4 w-4 opacity-80" />
            </div>
            <div className="text-3xl sm:text-4xl font-black tracking-tight text-stone-900 dark:text-white font-mono tabular-nums">
              6+
            </div>
            <div className="mt-1.5 text-xs text-stone-600 dark:text-stone-400 font-semibold tracking-wide">
              {t.heroStatYears}
            </div>
          </div>

          <div className="rounded-2xl p-4 sm:p-5 bg-white/45 dark:bg-[#020b4d]/50 backdrop-blur-xs border border-amber-900/10 dark:border-blue-900/50 shadow-2xs hover:border-orange-500/30 transition-colors">
            <div className="flex items-center justify-center text-orange-600 dark:text-orange-400 mb-2">
              <FolderGit2 className="h-4 w-4 opacity-80" />
            </div>
            <div className="text-3xl sm:text-4xl font-black tracking-tight text-stone-900 dark:text-white font-mono tabular-nums">
              40+
            </div>
            <div className="mt-1.5 text-xs text-stone-600 dark:text-stone-400 font-semibold tracking-wide">
              {t.heroStatProjects}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
