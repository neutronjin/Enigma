import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useClubData } from '../context/ClubDataContext';
import { OFFICIAL_EMAIL } from '../data/clubData';
import {
  Instagram,
  MessageSquare,
  PhoneCall,
  Mail,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react';

export const SocialSection: React.FC = () => {
  const { t } = useLanguage();
  const { socialLinks } = useClubData();
  const [copied, setCopied] = useState(false);

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'Instagram':
        return <Instagram className="h-6 w-6 text-pink-500" />;
      case 'Discord':
        return <MessageSquare className="h-6 w-6 text-indigo-400" />;
      case 'WhatsApp':
        return <PhoneCall className="h-6 w-6 text-emerald-500" />;
      default:
        return <ExternalLink className="h-6 w-6 text-orange-500" />;
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(OFFICIAL_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="socials" className="scroll-mt-20 py-16 sm:py-24 border-t border-amber-900/10 dark:border-blue-950/80 bg-[#FCF1D0]/60 dark:bg-[#010736] transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400">
            Community Networks
          </div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl dark:text-white font-display text-balance">
            {t.socialsTitle}
          </h2>
          <p className="mt-2 text-base text-stone-600 dark:text-stone-400 text-balance">
            {t.socialsSubtitle}
          </p>
        </div>

        {/* 3 Only Socials: Instagram, Discord, WhatsApp */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col justify-between rounded-2xl border border-amber-900/15 bg-white/70 p-7 shadow-xs hover:border-orange-500/60 hover:shadow-md dark:border-blue-900/60 dark:bg-[#040e54]/80 backdrop-blur-xs transition-all"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100/60 dark:bg-[#020b4d]">
                    {getPlatformIcon(social.platform)}
                  </div>
                  <ExternalLink className="h-4 w-4 text-stone-400 group-hover:text-orange-600 transition-colors" />
                </div>

                <div className="mt-5">
                  <h3 className="text-lg font-bold text-stone-900 dark:text-white font-display">
                    {social.platform}
                  </h3>
                  <div className="text-xs font-mono text-orange-600 dark:text-orange-400 mt-0.5">
                    {social.handle}
                  </div>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-stone-600 dark:text-stone-400">
                  {social.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-amber-900/10 dark:border-blue-900/50 flex items-center justify-between text-xs font-bold text-orange-600 dark:text-orange-400">
                <span>{social.actionText}</span>
                <span>→</span>
              </div>
            </a>
          ))}
        </div>

        {/* Official Email Contact Block with enigmaclub5@gmail.com */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-orange-300/60 bg-gradient-to-r from-orange-100/60 via-amber-50/70 to-orange-100/40 p-8 sm:p-10 shadow-xs dark:border-orange-950/80 dark:from-[#051354] dark:via-[#020b4d] dark:to-[#040e54]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                <Mail className="h-4 w-4" />
                <span>{t.officialEmailTitle}</span>
              </div>
              <h3 className="mt-2 text-2xl font-extrabold text-stone-900 dark:text-white font-display">
                {OFFICIAL_EMAIL}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-stone-600 dark:text-stone-400 max-w-xl">
                {t.officialEmailDesc} Reach our student coordinators for event collaborations, sponsorship queries, or community partnerships.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleCopyEmail}
                className="inline-flex h-10 items-center gap-2 rounded-xl border border-amber-900/20 bg-white/80 px-4 text-xs font-bold text-stone-700 hover:bg-white dark:border-blue-900/60 dark:bg-[#020b4d] dark:text-stone-200 dark:hover:bg-[#040e54] transition-colors"
              >
                {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                <span>{copied ? 'Copied Email!' : 'Copy Email'}</span>
              </button>

              <a
                href={`mailto:${OFFICIAL_EMAIL}`}
                className="inline-flex h-10 items-center gap-2 rounded-xl bg-orange-600 px-5 text-xs font-bold text-white hover:bg-orange-500 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
