import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MOTTO_TRANSLATIONS } from '../data/clubData';
import { Target, Eye, Users, Rocket, HeartHandshake, GitFork, Quote } from 'lucide-react';

export const MottoSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="motto" className="scroll-mt-20 py-16 sm:py-24 border-y border-amber-900/10 dark:border-blue-950/80 bg-[#f8ecc5]/50 dark:bg-[#020b4d]/40 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Guiding creed label removed) */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl dark:text-white font-display text-balance">
            {t.mottoSectionTitle}
          </h2>
          <p className="mt-3 text-base text-stone-600 dark:text-stone-400 text-balance">
            {t.mottoSectionSubtitle}
          </p>
        </div>

        {/* Central Motto Display Card with Pure Multilingual Motto without labels */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-amber-900/15 bg-white/70 p-8 sm:p-12 shadow-xs dark:border-blue-900/60 dark:bg-[#040e54]/80 text-center relative backdrop-blur-xs">
          
          {/* Subtle Orange Glow Backdrop */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent" />

          <div className="relative mx-auto max-w-3xl">
            {/* Main Display Motto */}
            <div className="text-3xl sm:text-5xl font-semibold italic text-stone-900 dark:text-white font-motto tracking-wide leading-snug">
              “{MOTTO_TRANSLATIONS.en}”
            </div>

            {/* Multilingual Motto WITHOUT labels ('English:', 'Kannada:', 'Hindi:' removed as requested) */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-y-3 gap-x-8 text-base sm:text-lg font-semibold text-stone-700 dark:text-stone-300 border-t border-stone-200/80 dark:border-stone-800/80 pt-6">
              <div className="font-kannada text-orange-600 dark:text-orange-400">
                “{MOTTO_TRANSLATIONS.kn}”
              </div>
              <span className="hidden sm:inline text-stone-300 dark:text-stone-700" aria-hidden="true">·</span>
              <div className="font-hindi text-stone-900 dark:text-white">
                “{MOTTO_TRANSLATIONS.hi}”
              </div>
            </div>

            <p className="mt-7 text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed text-balance max-w-2xl mx-auto">
              Technology is not an impenetrable black box. It is an enigma waiting to be deciphered.
              At ENIGMA, our community culture turns intimidation into curiosity, breaking down complex engineering so every student can build fearlessly.
            </p>
          </div>
        </div>

        {/* Mission & Vision Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="rounded-2xl border border-amber-900/15 bg-white/70 p-7 sm:p-8 shadow-xs dark:border-blue-900/60 dark:bg-[#040e54]/80 backdrop-blur-xs">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600 dark:bg-orange-950/60 dark:text-orange-400">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 dark:text-white font-display">
                {t.missionTitle}
              </h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
              {t.missionText}
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-2xl border border-amber-900/15 bg-white/70 p-7 sm:p-8 shadow-xs dark:border-blue-900/60 dark:bg-[#040e54]/80 backdrop-blur-xs">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400">
                <Eye className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 dark:text-white font-display">
                {t.visionTitle}
              </h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
              {t.visionText}
            </p>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold tracking-tight text-stone-900 dark:text-white font-display">
              {t.valuesTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-xl border border-amber-900/15 bg-white/70 p-5 dark:border-blue-900/60 dark:bg-[#040e54]/80 backdrop-blur-xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-600 dark:bg-orange-950/50 dark:text-orange-400">
                <Users className="h-4.5 w-4.5" />
              </div>
              <h4 className="mt-3 text-base font-bold text-stone-900 dark:text-white">
                {t.value1Title}
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-stone-600 dark:text-stone-400">
                {t.value1Desc}
              </p>
            </div>

            <div className="rounded-xl border border-amber-900/15 bg-white/70 p-5 dark:border-blue-900/60 dark:bg-[#040e54]/80 backdrop-blur-xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-600 dark:bg-orange-950/50 dark:text-orange-400">
                <Rocket className="h-4.5 w-4.5" />
              </div>
              <h4 className="mt-3 text-base font-bold text-stone-900 dark:text-white">
                {t.value2Title}
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-stone-600 dark:text-stone-400">
                {t.value2Desc}
              </p>
            </div>

            <div className="rounded-xl border border-amber-900/15 bg-white/70 p-5 dark:border-blue-900/60 dark:bg-[#040e54]/80 backdrop-blur-xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-600 dark:bg-orange-950/50 dark:text-orange-400">
                <HeartHandshake className="h-4.5 w-4.5" />
              </div>
              <h4 className="mt-3 text-base font-bold text-stone-900 dark:text-white">
                {t.value3Title}
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-stone-600 dark:text-stone-400">
                {t.value3Desc}
              </p>
            </div>

            <div className="rounded-xl border border-amber-900/15 bg-white/70 p-5 dark:border-blue-900/60 dark:bg-[#040e54]/80 backdrop-blur-xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-600 dark:bg-orange-950/50 dark:text-orange-400">
                <GitFork className="h-4.5 w-4.5" />
              </div>
              <h4 className="mt-3 text-base font-bold text-stone-900 dark:text-white">
                {t.value4Title}
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-stone-600 dark:text-stone-400">
                {t.value4Desc}
              </p>
            </div>
          </div>
        </div>

        {/* Editorial Quote */}
        <div className="mt-14 max-w-3xl mx-auto rounded-2xl border border-amber-900/15 bg-white/70 p-6 sm:p-8 dark:border-blue-900/60 dark:bg-[#040e54]/80 backdrop-blur-xs flex items-start gap-4">
          <Quote className="h-7 w-7 text-orange-600 dark:text-orange-500 shrink-0 mt-1" />
          <div>
            <p className="text-sm sm:text-base font-medium text-stone-800 dark:text-stone-200 italic leading-relaxed">
              "{t.quoteText}"
            </p>
            <p className="mt-2 text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
              — {t.quoteAuthor}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
