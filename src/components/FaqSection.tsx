import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useClubData } from '../context/ClubDataContext';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const { t } = useLanguage();
  const { faqs } = useClubData();
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="scroll-mt-20 py-16 sm:py-24 border-t border-amber-900/10 dark:border-blue-950/80 transition-colors">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400">
            Guidance & Answers
          </div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl dark:text-white font-display text-balance">
            {t.faqTitle}
          </h2>
          <p className="mt-2 text-base text-stone-600 dark:text-stone-400 text-balance max-w-xl mx-auto">
            {t.faqSubtitle}
          </p>
        </div>

        {/* Clean Accordion List */}
        <div className="mt-12 space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="overflow-hidden rounded-2xl border border-amber-900/15 bg-white/70 dark:border-blue-900/60 dark:bg-[#040e54]/80 backdrop-blur-xs transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition-colors hover:bg-amber-100/40 dark:hover:bg-[#06146e]/40"
                >
                  <span className="text-base font-bold text-stone-900 dark:text-white font-display pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-100/60 text-stone-700 dark:bg-[#020b4d] dark:text-stone-300 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-orange-100 text-orange-600 dark:bg-orange-950/60 dark:text-orange-400' : ''
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-amber-900/10 px-5 sm:px-6 pb-6 pt-3 dark:border-blue-900/50">
                    <p className="text-xs sm:text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>



      </div>
    </section>
  );
};
