import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useClubData } from '../context/ClubDataContext';
import { ShieldCheck, UserCheck } from 'lucide-react';

export const CoreLeadsSection: React.FC = () => {
  const { t } = useLanguage();
  const { coreLeads } = useClubData();

  return (
    <section id="leads" className="scroll-mt-20 py-16 sm:py-24 border-t border-amber-900/10 dark:border-blue-950/80 bg-[#f8ecc5]/40 dark:bg-[#020b4d]/30 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400">
            Student Council
          </div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl dark:text-white font-display text-balance">
            {t.leadsTitle}
          </h2>
          <p className="mt-2 text-base text-stone-600 dark:text-stone-400 text-balance">
            {t.leadsSubtitle}
          </p>
        </div>

        {/* Core Leads Grid with Names Kept Blank as requested */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreLeads.map((lead) => (
            <div
              key={lead.id}
              className="flex flex-col justify-between rounded-2xl border border-amber-900/15 bg-white/70 p-6 shadow-xs hover:border-orange-500/40 dark:border-blue-900/60 dark:bg-[#040e54]/80 backdrop-blur-xs transition-colors"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600 dark:bg-orange-950/60 dark:text-orange-400">
                    <UserCheck className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-mono text-stone-400 dark:text-stone-500">
                    {lead.year}
                  </span>
                </div>

                <div className="mt-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                    {lead.role}
                  </span>
                  
                  {/* Name kept blank as specifically instructed */}
                  <h3 className="mt-1 text-xl font-extrabold text-stone-900 dark:text-white font-display">
                    {lead.name}
                  </h3>
                </div>

                <div className="mt-4 space-y-1.5 pt-3 border-t border-stone-100 dark:border-stone-800/80 text-xs text-stone-600 dark:text-stone-400">
                  <div>
                    <span className="font-semibold text-stone-700 dark:text-stone-300">
                      {t.leadDeptLabel}:{' '}
                    </span>
                    <span>{lead.department}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-stone-700 dark:text-stone-300">
                      {t.leadFocusLabel}:{' '}
                    </span>
                    <span className="text-stone-900 dark:text-white font-medium">
                      {lead.focusArea}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-100 dark:border-stone-800/80 text-[11px] text-stone-400 italic">
                {t.leadBlankNotice}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
