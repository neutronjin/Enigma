import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useClubData } from '../context/ClubDataContext';
import { ClubEvent } from '../types';
import {
  Calendar,
  Clock,
  MapPin,
  User,
  FileDown,
  CheckCircle2,
  X,
  ArrowRight,
  Database,
  Loader2,
} from 'lucide-react';
import { jsPDF } from 'jspdf';

export const EventsSection: React.FC = () => {
  const { t } = useLanguage();
  const { events, registerForEvent } = useClubData();

  // Year-wise filter state (2026, 2025, 2024)
  const [selectedYear, setSelectedYear] = useState<number>(2026);

  // Registration modal state
  const [selectedEventForRsvp, setSelectedEventForRsvp] = useState<ClubEvent | null>(null);
  const [rsvpForm, setRsvpForm] = useState({ name: '', email: '', usn: '', year: '2nd Year' });
  const [rsvpLoading, setRsvpLoading] = useState(false);
  const [rsvpSuccess, setRsvpSuccess] = useState(false);

  // Detail Modal state
  const [detailEvent, setDetailEvent] = useState<ClubEvent | null>(null);

  // Filter events by selected year
  const filteredEvents = events.filter((evt) => evt.year === selectedYear);

  const handleRsvpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEventForRsvp) return;
    setRsvpLoading(true);
    try {
      const ok = await registerForEvent(selectedEventForRsvp.id, rsvpForm);
      if (ok) {
        setRsvpSuccess(true);
        setTimeout(() => {
          setRsvpSuccess(false);
          setSelectedEventForRsvp(null);
          setRsvpForm({ name: '', email: '', usn: '', year: '2nd Year' });
        }, 2200);
      }
    } finally {
      setRsvpLoading(false);
    }
  };

  const downloadEventPdf = (event: ClubEvent) => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    // Top Header Banner
    doc.setFillColor(234, 88, 12); // Orange #ea580c
    doc.rect(0, 0, 210, 18, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('ENIGMA TECHNICAL CLUB  ·  OFFICIAL EVENT BRIEF', 14, 12);

    // Document Title
    doc.setTextColor(24, 24, 27);
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text(event.title, 14, 34);

    // Meta Badge (Year & Category)
    doc.setFillColor(243, 244, 246);
    doc.roundedRect(14, 40, 60, 8, 2, 2, 'F');
    doc.setFontSize(9);
    doc.setTextColor(234, 88, 12);
    doc.text(`${event.year}  |  ${event.category.toUpperCase()} EVENT`, 17, 45.5);

    // Key Logistics Box
    doc.setDrawColor(229, 231, 235);
    doc.setFillColor(250, 250, 250);
    doc.roundedRect(14, 54, 182, 44, 3, 3, 'FD');

    doc.setFontSize(10);
    doc.setTextColor(100, 116, 139);
    doc.setFont('helvetica', 'bold');
    doc.text('DATE:', 20, 64);
    doc.text('TIME:', 20, 74);
    doc.text('VENUE:', 20, 84);
    doc.text('LEAD / MENTOR:', 105, 64);
    doc.text('SEATS STATUS:', 105, 74);
    doc.text('EVENT STATUS:', 105, 84);

    doc.setTextColor(15, 23, 42);
    doc.setFont('helvetica', 'normal');
    doc.text(event.date, 45, 64);
    doc.text(event.time, 45, 74);
    doc.text(event.venue, 45, 84);
    doc.text(event.speakerOrMentor, 142, 64);
    doc.text(`${event.seatsAvailable} seats remaining (Total ${event.totalSeats})`, 142, 74);
    doc.text(event.status.toUpperCase(), 142, 84);

    // Event Description Section
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(15, 23, 42);
    doc.text('Event Overview & Description', 14, 112);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(71, 85, 105);
    const splitDesc = doc.splitTextToSize(event.description, 182);
    doc.text(splitDesc, 14, 120);

    // Key Tags
    if (event.tags && event.tags.length > 0) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(15, 23, 42);
      doc.text('Topic Tags', 14, 145);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(234, 88, 12);
      doc.text(event.tags.map((t) => `#${t}`).join('   '), 14, 153);
    }

    // Community Note & Guidelines
    doc.setDrawColor(254, 215, 170);
    doc.setFillColor(255, 247, 237);
    doc.roundedRect(14, 168, 182, 32, 2, 2, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(194, 65, 12);
    doc.text('Student Participation Guidelines', 20, 176);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(124, 45, 18);
    const guidelines = 'Attendance is confirmed upon reporting to the venue 10 minutes prior to session start. Bring your student ID card and college laptop with software prerequisites installed. For queries, write to enigmaclub5@gmail.com.';
    const splitGuide = doc.splitTextToSize(guidelines, 170);
    doc.text(splitGuide, 20, 183);

    // Footer
    doc.setDrawColor(229, 231, 235);
    doc.line(14, 275, 196, 275);
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text('ENIGMA Technical Club · Decoding the Unknown, Building the Future · Official Club Record', 14, 282);
    doc.text(`Generated: ${new Date().toLocaleDateString()}`, 160, 282);

    const safeTitle = event.title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    doc.save(`${safeTitle}_event.pdf`);
  };

  return (
    <section id="events" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400">
              Gatherings & Workshops
            </div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl dark:text-white font-display text-balance">
              {t.eventsTitle}
            </h2>
            <p className="mt-2 text-base text-stone-600 dark:text-stone-400 max-w-2xl text-balance">
              {t.eventsSubtitle}
            </p>
          </div>

          {/* Clean Year-Wise Tabs (2026, 2025, 2024) */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-amber-100/50 dark:bg-[#020b4d] border border-amber-900/15 dark:border-blue-900/60 self-start md:self-auto shrink-0">
            {[2026, 2025, 2024].map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                  selectedYear === year
                    ? 'bg-orange-600 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Clean, Uncrowded Events Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.length === 0 ? (
            <div className="col-span-full rounded-2xl border border-dashed border-amber-900/20 p-12 text-center text-xs text-stone-500 dark:border-blue-900/50 dark:text-stone-400">
              {t.noEventsFound}
            </div>
          ) : (
            filteredEvents.map((event) => {
              const isFull = event.seatsAvailable <= 0;
              const isPast = event.status === 'completed';

              return (
                <div
                  key={event.id}
                  className="flex flex-col justify-between rounded-2xl border border-amber-900/15 bg-white/75 p-6 shadow-xs hover:border-orange-500/50 dark:border-blue-900/60 dark:bg-[#040e54]/80 backdrop-blur-xs transition-colors"
                >
                  <div>
                    {/* Unboxed Metadata (Zero-pill) */}
                    <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
                      <div className="flex items-center gap-1.5 uppercase font-bold text-[11px] text-orange-600 dark:text-orange-400 tracking-wider">
                        <span>{event.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{event.year}</span>
                      </div>
                      {isPast ? (
                        <span className="text-[11px] font-medium text-stone-400">
                          {t.eventCompletedBadge}
                        </span>
                      ) : (
                        <span className="font-mono text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">
                          {event.seatsAvailable} seats left
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="mt-3 text-lg font-bold text-stone-900 dark:text-white leading-snug font-display">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-xs leading-relaxed text-stone-600 dark:text-stone-400 line-clamp-3">
                      {event.description}
                    </p>

                    {/* Logistics */}
                    <div className="mt-5 space-y-2 pt-4 border-t border-stone-100 dark:border-stone-800/80 text-xs text-stone-600 dark:text-stone-300">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3.5 w-3.5 text-orange-600 dark:text-orange-500 shrink-0" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5 text-stone-400 shrink-0" />
                        <span className="font-mono text-[11px]">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 text-stone-400 shrink-0" />
                        <span className="truncate">{event.venue}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="h-3.5 w-3.5 text-stone-400 shrink-0" />
                        <span className="truncate">{event.speakerOrMentor}</span>
                      </div>
                    </div>
                  </div>

                  {/* Clean Working Actions */}
                  <div className="mt-6 pt-4 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between gap-2">
                    <button
                      onClick={() => downloadEventPdf(event)}
                      title="Download Event Brief (.pdf)"
                      className="inline-flex h-8 items-center gap-1 rounded-lg border border-amber-900/15 bg-white/60 px-2.5 text-xs font-semibold text-stone-700 hover:bg-orange-50 hover:text-orange-600 dark:border-blue-900/50 dark:bg-[#020b4d] dark:text-stone-300 dark:hover:bg-[#06146e] transition-colors"
                    >
                      <FileDown className="h-3.5 w-3.5 text-orange-600 dark:text-orange-400" />
                      <span>.pdf</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setDetailEvent(event)}
                        className="h-8 px-2.5 text-xs font-semibold text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white"
                      >
                        Details
                      </button>

                      {!isPast && (
                        <button
                          onClick={() => {
                            setSelectedEventForRsvp(event);
                            setRsvpSuccess(false);
                          }}
                          disabled={isFull}
                          className="h-8 rounded-lg bg-orange-600 px-3.5 text-xs font-bold text-white shadow-2xs hover:bg-orange-500 disabled:opacity-50 transition-colors whitespace-nowrap"
                        >
                          {isFull ? 'Full' : t.eventRegisterBtn}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* RSVP Modal */}
        {selectedEventForRsvp && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
            <div className="relative w-full max-w-md rounded-2xl border border-amber-900/15 bg-[#FCF1D0] p-6 shadow-2xl dark:border-blue-900/70 dark:bg-[#020b4d]">
              <button
                onClick={() => setSelectedEventForRsvp(null)}
                className="absolute right-4 top-4 text-stone-500 hover:text-stone-700 dark:hover:text-stone-200"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                Event Registration
              </div>
              <h3 className="mt-1 text-lg font-bold text-stone-900 dark:text-white font-display">
                {selectedEventForRsvp.title}
              </h3>
              <p className="mt-1 text-xs text-stone-600 dark:text-stone-400">
                {selectedEventForRsvp.date} · {selectedEventForRsvp.venue}
              </p>

              {rsvpSuccess ? (
                <div className="mt-6 flex flex-col items-center py-6 text-center">
                  <CheckCircle2 className="h-12 w-12 text-orange-600 dark:text-orange-500" />
                  <p className="mt-3 text-sm font-bold text-stone-900 dark:text-white">
                    Registration Confirmed!
                  </p>
                  <p className="mt-1 text-xs text-stone-600 dark:text-stone-400">
                    A confirmation response has been stored for {rsvpForm.email}.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                    <Database className="h-3.5 w-3.5" />
                    <span>Saved to Firestore Database</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleRsvpSubmit} className="mt-5 space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-stone-800 dark:text-stone-300">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={rsvpForm.name}
                      onChange={(e) => setRsvpForm({ ...rsvpForm, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="mt-1 w-full rounded-xl border border-amber-900/20 bg-white/80 px-3.5 py-2 text-xs text-stone-900 focus:border-orange-500 focus:outline-hidden dark:border-blue-900/60 dark:bg-[#040e54]/80 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-800 dark:text-stone-300">
                      College Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={rsvpForm.email}
                      onChange={(e) => setRsvpForm({ ...rsvpForm, email: e.target.value })}
                      placeholder="student@college.edu"
                      className="mt-1 w-full rounded-xl border border-amber-900/20 bg-white/80 px-3.5 py-2 text-xs text-stone-900 focus:border-orange-500 focus:outline-hidden dark:border-blue-900/60 dark:bg-[#040e54]/80 dark:text-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-stone-800 dark:text-stone-300">
                        USN / Roll No *
                      </label>
                      <input
                        type="text"
                        required
                        value={rsvpForm.usn}
                        onChange={(e) => setRsvpForm({ ...rsvpForm, usn: e.target.value })}
                        placeholder="4MC23CS001"
                        className="mt-1 w-full rounded-xl border border-amber-900/20 bg-white/80 px-3.5 py-2 text-xs text-stone-900 focus:border-orange-500 focus:outline-hidden dark:border-blue-900/60 dark:bg-[#040e54]/80 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-800 dark:text-stone-300">
                        Year
                      </label>
                      <select
                        value={rsvpForm.year}
                        onChange={(e) => setRsvpForm({ ...rsvpForm, year: e.target.value })}
                        className="mt-1 w-full rounded-xl border border-amber-900/20 bg-white/80 px-3.5 py-2 text-xs text-stone-900 focus:border-orange-500 focus:outline-hidden dark:border-blue-900/60 dark:bg-[#040e54]/80 dark:text-white"
                      >
                        <option>1st Year</option>
                        <option>2nd Year</option>
                        <option>3rd Year</option>
                        <option>4th Year</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-amber-900/10 dark:border-blue-900/50 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedEventForRsvp(null)}
                      className="px-3.5 py-2 text-xs font-medium text-stone-600 dark:text-stone-400 hover:bg-amber-100/50 dark:hover:bg-[#040e54] rounded-lg"
                    >
                      {t.cancelBtn}
                    </button>
                    <button
                      type="submit"
                      disabled={rsvpLoading}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-orange-600 px-5 py-2 text-xs font-bold text-white hover:bg-orange-500 disabled:opacity-50 transition-colors"
                    >
                      {rsvpLoading && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
                      <span>{rsvpLoading ? 'Saving...' : 'Confirm Seat'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Event Detail Modal */}
        {detailEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
            <div className="relative w-full max-w-lg rounded-2xl border border-amber-900/15 bg-[#FCF1D0] p-6 shadow-2xl dark:border-blue-900/70 dark:bg-[#020b4d]">
              <button
                onClick={() => setDetailEvent(null)}
                className="absolute right-4 top-4 text-stone-500 hover:text-stone-700 dark:hover:text-stone-200"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                {detailEvent.year} · {detailEvent.category}
              </div>
              <h3 className="mt-1 text-xl font-bold text-stone-900 dark:text-white font-display">
                {detailEvent.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
                {detailEvent.description}
              </p>

              <div className="mt-5 space-y-2 rounded-xl bg-white/60 p-4 text-xs dark:bg-[#040e54]/80">
                <div className="flex justify-between">
                  <span className="text-stone-600 dark:text-stone-400">{t.eventDate}:</span>
                  <span className="font-bold text-stone-900 dark:text-white">{detailEvent.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-600 dark:text-stone-400">{t.eventTime}:</span>
                  <span className="font-bold text-stone-900 dark:text-white">{detailEvent.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-600 dark:text-stone-400">{t.eventVenue}:</span>
                  <span className="font-bold text-stone-900 dark:text-white">{detailEvent.venue}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-600 dark:text-stone-400">{t.eventMentor}:</span>
                  <span className="font-bold text-stone-900 dark:text-white">{detailEvent.speakerOrMentor}</span>
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-2">
                <button
                  onClick={() => downloadEventPdf(detailEvent)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-amber-900/20 px-3 py-2 text-xs font-medium text-stone-700 hover:bg-amber-100/50 dark:border-blue-900/60 dark:text-stone-300 dark:hover:bg-[#040e54]"
                >
                  <FileDown className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                  <span>Download .pdf</span>
                </button>
                <button
                  onClick={() => setDetailEvent(null)}
                  className="rounded-lg bg-orange-600 px-4 py-2 text-xs font-bold text-white hover:bg-orange-500"
                >
                  {t.closeBtn}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
