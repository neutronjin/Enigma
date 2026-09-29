import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useClubData } from '../context/ClubDataContext';
import { MessageSquareText, Star, Send, CheckCircle2, Database, Loader2 } from 'lucide-react';

export const FeedbackSection: React.FC = () => {
  const { t } = useLanguage();
  const { submitFeedback } = useClubData();

  const [feedbackType, setFeedbackType] = useState<'workshop' | 'event' | 'club_improvement' | 'general'>('workshop');
  const [rating, setRating] = useState<number>(5);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setSubmitting(true);
    try {
      await submitFeedback({
        name: name.trim() || undefined,
        email: email.trim() || undefined,
        feedbackType,
        rating,
        message: message.trim(),
      });

      setSubmitted(true);
      setTimeout(() => {
        setMessage('');
        setName('');
        setEmail('');
        setSubmitted(false);
      }, 3500);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="feedback" className="scroll-mt-20 py-16 sm:py-24 border-t border-amber-900/10 dark:border-blue-950/80 bg-[#f8ecc5]/40 dark:bg-[#020b4d]/30 transition-colors">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400">
            Open Voice
          </div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl dark:text-white font-display text-balance">
            {t.feedbackTitle}
          </h2>
          <p className="mt-2 text-base text-stone-600 dark:text-stone-400 text-balance max-w-xl mx-auto">
            {t.feedbackSubtitle}
          </p>
        </div>

        {/* Feedback Form Card */}
        <div className="mt-12 rounded-2xl border border-amber-900/15 bg-white/70 p-6 sm:p-10 shadow-xs dark:border-blue-900/60 dark:bg-[#040e54]/80 backdrop-blur-xs">
          {submitted ? (
            <div className="py-10 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-950/60 dark:text-orange-400">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-stone-900 dark:text-white font-display">
                {t.feedbackSuccessMsg}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 dark:text-stone-300 max-w-md mx-auto">
                Your suggestions help our leads curate impactful technical bootcamps, choose hackathon tracks, and build an inclusive club environment.
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                <Database className="h-3.5 w-3.5" />
                <span>Response Stored in Firestore Database</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Category Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2">
                  {t.feedbackTypeLabel}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: 'workshop', label: 'Workshop Idea' },
                    { id: 'event', label: 'Event Review' },
                    { id: 'club_improvement', label: 'Club Improvement' },
                    { id: 'general', label: 'General Query' },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setFeedbackType(cat.id as any)}
                      className={`rounded-xl border p-2.5 text-center text-xs font-semibold transition-all ${
                        feedbackType === cat.id
                          ? 'border-orange-500 bg-orange-100/70 text-orange-800 dark:bg-orange-950/60 dark:text-orange-300'
                          : 'border-amber-900/15 dark:border-blue-900/60 text-stone-600 dark:text-stone-300 hover:bg-amber-100/50 dark:hover:bg-[#020b4d]'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Star Rating */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-2">
                  {t.feedbackRatingLabel}
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="p-1 text-stone-400 dark:text-stone-600 hover:scale-110 transition-transform"
                    >
                      <Star
                        className={`h-6 w-6 ${
                          star <= rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'fill-transparent text-stone-400 dark:text-stone-600'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-2 text-xs font-mono font-bold text-stone-600 dark:text-stone-300">
                    {rating} / 5 Stars
                  </span>
                </div>
              </div>

              {/* Name & Email Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                    {t.feedbackNameLabel}
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ananya"
                    className="w-full rounded-xl border border-amber-900/20 bg-white/80 px-3.5 py-2.5 text-xs text-stone-900 focus:border-orange-500 focus:outline-hidden dark:border-blue-900/60 dark:bg-[#020b4d]/80 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                    {t.feedbackEmailLabel}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@college.edu"
                    className="w-full rounded-xl border border-amber-900/20 bg-white/80 px-3.5 py-2.5 text-xs text-stone-900 focus:border-orange-500 focus:outline-hidden dark:border-blue-900/60 dark:bg-[#020b4d]/80 dark:text-white"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                  {t.feedbackMsgLabel}
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share topics you want covered, mentor requests, or general thoughts..."
                  className="w-full rounded-xl border border-amber-900/20 bg-white/80 p-3.5 text-xs text-stone-900 focus:border-orange-500 focus:outline-hidden dark:border-blue-900/60 dark:bg-[#020b4d]/80 dark:text-white"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-6 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-orange-500 active:bg-orange-700 disabled:opacity-50 transition-colors"
                >
                  {submitting ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Send className="h-3.5 w-3.5" />}
                  <span>{submitting ? 'Saving to Database...' : t.feedbackSubmitBtn}</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
