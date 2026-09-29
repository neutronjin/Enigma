import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useClubData } from '../context/ClubDataContext';
import { OFFICIAL_EMAIL, MOTTO_TRANSLATIONS } from '../data/clubData';
import { Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const { socialLinks } = useClubData();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-amber-900/10 bg-[#FCF1D0] dark:border-blue-950/80 dark:bg-[#010736] text-stone-700 dark:text-stone-300 text-xs transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-2xl font-black tracking-widest text-stone-900 dark:text-white font-enigma">
              ENIGMA
            </span>

            <p className="text-xs leading-relaxed max-w-sm text-stone-500 dark:text-stone-400">
              {t.brandTagline}. An inclusive, student-led university technical collective decoding complex challenges and building real engineering prototypes.
            </p>

            <div className="text-base italic text-orange-600 dark:text-orange-400 font-semibold font-motto">
              “{MOTTO_TRANSLATIONS.en}”
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-bold uppercase tracking-wider text-stone-900 dark:text-stone-200 text-[11px]">
              {t.footerQuickLinks}
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#motto" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                  {t.navMotto}
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                  {t.navEvents}
                </a>
              </li>
              <li>
                <a href="#leads" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                  {t.navLeads}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                  {t.navFaq}
                </a>
              </li>
              <li>
                <a href="#feedback" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                  {t.navFeedback}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Col with enigmaclub5@gmail.com */}
          <div className="lg:col-span-4 space-y-3">
            <div className="font-bold uppercase tracking-wider text-stone-900 dark:text-stone-200 text-[11px]">
              {t.footerContactTitle}
            </div>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-orange-600 dark:text-orange-500 shrink-0" />
                <a
                  href={`mailto:${OFFICIAL_EMAIL}`}
                  className="font-mono text-xs font-semibold text-stone-900 dark:text-white hover:text-orange-600 underline underline-offset-2"
                >
                  {OFFICIAL_EMAIL}
                </a>
              </div>
              <p className="text-stone-500 dark:text-stone-400 text-xs">
                Official contact for event coordination, sponsorship inquiries, and campus technical partnerships.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-stone-600 hover:text-orange-600 dark:text-stone-400 dark:hover:text-orange-400"
                >
                  {s.platform}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-stone-100 dark:border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 dark:text-stone-500">
          <div>
            © {new Date().getFullYear()} ENIGMA Technical Club. {t.footerRights}
          </div>

          <div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 font-semibold text-stone-700 hover:text-orange-600 dark:text-stone-300 dark:hover:text-orange-400"
              title="Back to Top"
            >
              <span>Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
