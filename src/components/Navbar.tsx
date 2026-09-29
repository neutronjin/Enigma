import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Menu, X } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  onOpenJoin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoin }) => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const navLinks = [
    { href: '#motto', label: t.navMotto },
    { href: '#events', label: t.navEvents },
    { href: '#leads', label: t.navLeads },
    { href: '#faq', label: t.navFaq },
    { href: '#feedback', label: t.navFeedback },
    { href: '#socials', label: t.navSocials },
  ];

  const handleLangChange = (lang: Language) => {
    setLanguage(lang);
    setLangMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#1c245c] bg-[#0c113b] text-white shadow-xs backdrop-blur-md dark:border-blue-200/80 dark:bg-[#e2eafc] dark:text-stone-900 transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Zone 1: Single element Brand Wordmark (Strict Top Bar Contract - No star) */}
        <a
          href="#"
          className="text-2xl font-black tracking-widest text-white dark:text-[#0c113b] font-enigma transition-opacity hover:opacity-90"
        >
          ENIGMA
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-stone-200 dark:text-stone-800">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-orange-400 dark:hover:text-orange-600 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions & utility toggles */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Day / Night Mode Toggle Button (Segmented Switch without sun emoji) */}
          <div
            role="group"
            aria-label="Theme mode toggle"
            className="flex items-center rounded-xl border border-[#232c74] bg-[#161e57] p-0.5 text-xs font-semibold dark:border-blue-200/90 dark:bg-white/80"
          >
            <button
              type="button"
              onClick={() => setTheme('light')}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${
                theme === 'light'
                  ? 'bg-orange-600 text-white shadow-xs dark:bg-orange-600 dark:text-white'
                  : 'text-stone-300 hover:text-white dark:text-stone-600 dark:hover:text-stone-900'
              }`}
            >
              Day
            </button>
            <button
              type="button"
              onClick={() => setTheme('dark')}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${
                theme === 'dark'
                  ? 'bg-[#0c113b] text-orange-400 shadow-xs'
                  : 'text-stone-300 hover:text-white dark:text-stone-600 dark:hover:text-stone-900'
              }`}
            >
              Night
            </button>
          </div>

          {/* Language Selector Horizontal Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen((prev) => !prev)}
              aria-label={t.languageSelect}
              className="flex h-9 items-center gap-1.5 rounded-xl border border-[#232c74] bg-[#161e57]/90 px-2.5 text-xs font-semibold text-stone-200 hover:bg-[#232c74] dark:border-blue-200 dark:bg-white/90 dark:text-stone-800 dark:hover:bg-white transition-colors"
            >
              <Globe className="h-4 w-4 text-orange-400 dark:text-orange-600" />
              <span className="uppercase font-bold">{language}</span>
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 mt-2 flex flex-row items-center gap-1 rounded-xl border border-[#232c74] bg-[#0c113b] p-1 shadow-xl dark:border-blue-200/90 dark:bg-[#eef3fd] z-50 whitespace-nowrap">
                <button
                  onClick={() => handleLangChange('en')}
                  className={`flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                    language === 'en'
                      ? 'bg-orange-600 text-white shadow-xs'
                      : 'text-stone-300 hover:text-white hover:bg-[#161e57] dark:text-stone-700 dark:hover:text-stone-950 dark:hover:bg-blue-100/80'
                  }`}
                >
                  <span>English</span>
                  {language === 'en' && <span className="text-[10px]">✓</span>}
                </button>
                <button
                  onClick={() => handleLangChange('kn')}
                  className={`flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                    language === 'kn'
                      ? 'bg-orange-600 text-white shadow-xs'
                      : 'text-stone-300 hover:text-white hover:bg-[#161e57] dark:text-stone-700 dark:hover:text-stone-950 dark:hover:bg-blue-100/80'
                  }`}
                >
                  <span>ಕನ್ನಡ (KN)</span>
                  {language === 'kn' && <span className="text-[10px]">✓</span>}
                </button>
                <button
                  onClick={() => handleLangChange('hi')}
                  className={`flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                    language === 'hi'
                      ? 'bg-orange-600 text-white shadow-xs'
                      : 'text-stone-300 hover:text-white hover:bg-[#161e57] dark:text-stone-700 dark:hover:text-stone-950 dark:hover:bg-blue-100/80'
                  }`}
                >
                  <span>हिंदी (HI)</span>
                  {language === 'hi' && <span className="text-[10px]">✓</span>}
                </button>
              </div>
            )}
          </div>

          {/* Join Club Primary CTA in Orange */}
          <button
            onClick={onOpenJoin}
            className="h-9 rounded-xl bg-orange-600 px-4 text-xs font-bold text-white shadow-2xs hover:bg-orange-500 active:bg-orange-700 transition-colors whitespace-nowrap"
          >
            {t.navJoin}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-xl text-stone-200 hover:bg-[#161e57] dark:text-stone-800 dark:hover:bg-blue-100/80 lg:hidden transition-colors"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-[#1c245c] bg-[#0c113b] px-4 py-4 lg:hidden dark:border-blue-200/80 dark:bg-[#e2eafc]">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-stone-200 hover:bg-[#161e57] dark:text-stone-800 dark:hover:bg-blue-100/60"
              >
                {link.label}
              </a>
            ))}
            
            {/* Mobile Day/Night toggle switch */}
            <div className="pt-2 border-t border-[#1c245c] dark:border-blue-200/80 flex items-center justify-between">
              <span className="text-xs font-semibold text-stone-300 dark:text-stone-700">
                Mode:
              </span>
              <div className="flex items-center rounded-xl border border-[#232c74] bg-[#161e57] p-0.5 text-xs font-semibold dark:border-blue-200 dark:bg-white/80">
                <button
                  type="button"
                  onClick={() => setTheme('light')}
                  className={`rounded-lg px-3 py-1 text-xs font-bold ${
                    theme === 'light'
                      ? 'bg-orange-600 text-white shadow-xs dark:bg-orange-600 dark:text-white'
                      : 'text-stone-300 dark:text-stone-600'
                  }`}
                >
                  Day
                </button>
                <button
                  type="button"
                  onClick={() => setTheme('dark')}
                  className={`rounded-lg px-3 py-1 text-xs font-bold ${
                    theme === 'dark'
                      ? 'bg-[#0c113b] text-orange-400 shadow-xs'
                      : 'text-stone-300 dark:text-stone-600'
                  }`}
                >
                  Night
                </button>
              </div>
            </div>

            {/* Mobile Horizontal Language Selector */}
            <div className="pt-2 border-t border-[#1c245c] dark:border-blue-200/80 flex items-center justify-between">
              <span className="text-xs font-semibold text-stone-300 dark:text-stone-700">
                Language:
              </span>
              <div className="flex items-center gap-1 rounded-xl border border-[#232c74] bg-[#161e57] p-0.5 text-xs font-semibold dark:border-blue-200 dark:bg-white/80">
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`rounded-lg px-2.5 py-1 text-xs font-bold ${
                    language === 'en'
                      ? 'bg-orange-600 text-white shadow-xs'
                      : 'text-stone-300 dark:text-stone-600'
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('kn')}
                  className={`rounded-lg px-2.5 py-1 text-xs font-bold ${
                    language === 'kn'
                      ? 'bg-orange-600 text-white shadow-xs'
                      : 'text-stone-300 dark:text-stone-600'
                  }`}
                >
                  ಕನ್ನಡ
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('hi')}
                  className={`rounded-lg px-2.5 py-1 text-xs font-bold ${
                    language === 'hi'
                      ? 'bg-orange-600 text-white shadow-xs'
                      : 'text-stone-300 dark:text-stone-600'
                  }`}
                >
                  हिंदी
                </button>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoin();
              }}
              className="w-full rounded-xl bg-orange-600 py-2.5 text-xs font-bold text-white shadow-2xs hover:bg-orange-500"
            >
              {t.navJoin}
            </button>
          </div>
        </nav>
      </div>
      )}
    </header>
  );
};
