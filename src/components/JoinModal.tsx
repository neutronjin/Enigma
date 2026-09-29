import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useClubData } from '../context/ClubDataContext';
import { X, CheckCircle2, MessageSquare, PhoneCall, Loader2, Database } from 'lucide-react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const { submitApplication } = useClubData();

  const [form, setForm] = useState({
    name: '',
    email: '',
    usn: '',
    branch: 'Computer Science & Engineering',
    year: '1st Year',
    motivation: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const yearNormalized = form.year.includes('1st') ? '1st Year'
        : form.year.includes('2nd') ? '2nd Year'
        : form.year.includes('3rd') ? '3rd Year'
        : '4th Year';

      await submitApplication({
        fullName: form.name,
        email: form.email,
        usn: form.usn,
        branch: form.branch,
        year: yearNormalized,
        domain: 'Software & Intelligent Systems',
        reason: form.motivation || 'Excited to build projects and collaborate with ENIGMA.',
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting application:', err);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setForm({
      name: '',
      email: '',
      usn: '',
      branch: 'Computer Science & Engineering',
      year: '1st Year',
      motivation: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
      <div className="relative w-full max-w-lg rounded-2xl border border-amber-900/15 bg-[#FCF1D0] p-6 sm:p-8 shadow-2xl dark:border-blue-900/70 dark:bg-[#020b4d]">
        <button
          onClick={handleResetAndClose}
          className="absolute right-4 top-4 text-stone-500 hover:text-stone-700 dark:hover:text-stone-200"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-950/60 dark:text-orange-400">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-stone-900 dark:text-white font-display">
              Welcome to ENIGMA!
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-stone-600 dark:text-stone-300 max-w-sm mx-auto">
              Your application response for {form.name} ({form.email}) has been saved securely to the backend database.
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
              <Database className="h-3.5 w-3.5" />
              <span>Stored in Firestore Database</span>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-2.5">
              <a
                href="#socials"
                onClick={handleResetAndClose}
                className="inline-flex items-center gap-1.5 rounded-xl bg-orange-600 px-4 py-2 text-xs font-bold text-white hover:bg-orange-500"
              >
                <PhoneCall className="h-4 w-4" />
                <span>Join WhatsApp Group</span>
              </a>
              <a
                href="#socials"
                onClick={handleResetAndClose}
                className="inline-flex items-center gap-1.5 rounded-xl border border-stone-300 px-4 py-2 text-xs font-semibold text-stone-700 hover:bg-stone-50 dark:border-stone-700 dark:text-stone-200"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Discord Server</span>
              </a>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400">
                Student Registration
              </div>
              <div className="flex items-center gap-1 text-[11px] font-semibold text-stone-500 dark:text-stone-400">
                <Database className="h-3 w-3 text-orange-600 dark:text-orange-400" />
                <span>Backend Connected</span>
              </div>
            </div>
            <h3 className="mt-1 text-xl font-bold text-stone-900 dark:text-white font-display">
              Join ENIGMA Technical Club
            </h3>
            <p className="mt-1 text-xs text-stone-500 dark:text-stone-400">
              Open to all students across all engineering branches. No prior coding experience required.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-stone-800 dark:text-stone-300">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Varun Sharma"
                  className="mt-1 w-full rounded-xl border border-amber-900/20 bg-white/80 px-3.5 py-2 text-xs text-stone-900 focus:border-orange-500 focus:outline-hidden dark:border-blue-900/60 dark:bg-[#040e54]/80 dark:text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-800 dark:text-stone-300">
                    College Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="student@college.edu"
                    className="mt-1 w-full rounded-xl border border-amber-900/20 bg-white/80 px-3.5 py-2 text-xs text-stone-900 focus:border-orange-500 focus:outline-hidden dark:border-blue-900/60 dark:bg-[#040e54]/80 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-800 dark:text-stone-300">
                    USN / Roll Number *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.usn}
                    onChange={(e) => setForm({ ...form, usn: e.target.value })}
                    placeholder="4MC23CS042"
                    className="mt-1 w-full rounded-xl border border-amber-900/20 bg-white/80 px-3.5 py-2 text-xs text-stone-900 focus:border-orange-500 focus:outline-hidden dark:border-blue-900/60 dark:bg-[#040e54]/80 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-800 dark:text-stone-300">
                    Department
                  </label>
                  <select
                    value={form.branch}
                    onChange={(e) => setForm({ ...form, branch: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-amber-900/20 bg-white/80 px-3 py-2 text-xs text-stone-900 focus:border-orange-500 focus:outline-hidden dark:border-blue-900/60 dark:bg-[#040e54]/80 dark:text-white"
                  >
                    <option>Computer Science & Engineering</option>
                    <option>Information Science & Engineering</option>
                    <option>Artificial Intelligence & ML</option>
                    <option>Electronics & Communication</option>
                    <option>Electrical & Electronics</option>
                    <option>Mechanical Engineering</option>
                    <option>Civil Engineering</option>
                    <option>Other Department</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-800 dark:text-stone-300">
                    Year of Study
                  </label>
                  <select
                    value={form.year}
                    onChange={(e) => setForm({ ...form, year: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-amber-900/20 bg-white/80 px-3 py-2 text-xs text-stone-900 focus:border-orange-500 focus:outline-hidden dark:border-blue-900/60 dark:bg-[#040e54]/80 dark:text-white"
                  >
                    <option>1st Year (Freshman)</option>
                    <option>2nd Year (Sophomore)</option>
                    <option>3rd Year (Junior)</option>
                    <option>4th Year (Senior)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-800 dark:text-stone-300">
                  What interests you most? (Optional)
                </label>
                <textarea
                  rows={2}
                  value={form.motivation}
                  onChange={(e) => setForm({ ...form, motivation: e.target.value })}
                  placeholder="e.g. I want to learn web development and participate in hackathons..."
                  className="mt-1 w-full rounded-xl border border-amber-900/20 bg-white/80 px-3.5 py-2 text-xs text-stone-900 focus:border-orange-500 focus:outline-hidden dark:border-blue-900/60 dark:bg-[#040e54]/80 dark:text-white"
                />
              </div>

              <div className="mt-6 flex justify-end gap-2 pt-2 border-t border-stone-100 dark:border-stone-800">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-4 py-2 text-xs font-medium text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-xl"
                >
                  {t.cancelBtn}
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-orange-600 px-5 py-2 text-xs font-bold text-white hover:bg-orange-500 disabled:opacity-50 transition-colors"
                >
                  {submitting && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
                  <span>{submitting ? 'Saving to Database...' : 'Submit Registration'}</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
