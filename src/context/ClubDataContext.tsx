import React, { createContext, useContext, useEffect, useState } from 'react';
import { ClubEvent, CoreLead, FaqItem, FeedbackSubmission, SocialLink } from '../types';
import { YEAR_EVENTS, CORE_LEADS, FAQ_LIST, ONLY_SOCIAL_LINKS } from '../data/clubData';
import {
  saveApplicationResponse,
  saveEventRegistrationResponse,
  saveFeedbackResponse,
  fetchFeedbackResponses,
  ApplicationPayload,
} from '../services/dbService';

interface ClubDataContextType {
  events: ClubEvent[];
  coreLeads: CoreLead[];
  faqs: FaqItem[];
  socialLinks: SocialLink[];
  feedbacks: FeedbackSubmission[];
  registerForEvent: (eventId: string, studentInfo: { name: string; email: string; usn: string; year: string }) => Promise<boolean>;
  submitFeedback: (feedback: Omit<FeedbackSubmission, 'id' | 'createdAt'>) => Promise<{ success: boolean; error?: string }>;
  submitApplication: (application: ApplicationPayload) => Promise<{ success: boolean; id: string; error?: string }>;
}

const ClubDataContext = createContext<ClubDataContextType | undefined>(undefined);

const STORAGE_KEY = 'enigma_club_v2';

export const ClubDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [events, setEvents] = useState<ClubEvent[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(`${STORAGE_KEY}_events`);
        if (saved) return JSON.parse(saved);
      } catch {
        // ignore
      }
    }
    return YEAR_EVENTS;
  });

  const [coreLeads] = useState<CoreLead[]>(CORE_LEADS);
  const [faqs] = useState<FaqItem[]>(FAQ_LIST);
  const [socialLinks] = useState<SocialLink[]>(ONLY_SOCIAL_LINKS);

  const [feedbacks, setFeedbacks] = useState<FeedbackSubmission[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(`${STORAGE_KEY}_feedbacks`);
        if (saved) return JSON.parse(saved);
      } catch {
        // ignore
      }
    }
    return [];
  });

  // Sync feedbacks with backend database on mount
  useEffect(() => {
    let isMounted = true;
    fetchFeedbackResponses()
      .then((remoteFeedbacks) => {
        if (isMounted && remoteFeedbacks.length > 0) {
          setFeedbacks(remoteFeedbacks);
        }
      })
      .catch((err) => console.warn('Could not sync feedback from database:', err));

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_events`, JSON.stringify(events));
    } catch {
      // ignore
    }
  }, [events]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_feedbacks`, JSON.stringify(feedbacks));
    } catch {
      // ignore
    }
  }, [feedbacks]);

  // Stores event registration response in Firestore database and decrements available seat
  const registerForEvent = async (
    eventId: string,
    studentInfo: { name: string; email: string; usn: string; year: string }
  ): Promise<boolean> => {
    const targetEvent = events.find((evt) => evt.id === eventId);
    if (!targetEvent || targetEvent.seatsAvailable <= 0) {
      return false;
    }

    // Persist to backend database
    await saveEventRegistrationResponse({
      eventId: targetEvent.id,
      eventTitle: targetEvent.title,
      name: studentInfo.name,
      email: studentInfo.email,
      usn: studentInfo.usn,
      year: (studentInfo.year as '1st Year' | '2nd Year' | '3rd Year' | '4th Year') || '2nd Year',
    });

    // Update local reactive state
    setEvents((prev) =>
      prev.map((evt) => {
        if (evt.id === eventId && evt.seatsAvailable > 0) {
          return {
            ...evt,
            seatsAvailable: Math.max(0, evt.seatsAvailable - 1),
          };
        }
        return evt;
      })
    );

    return true;
  };

  // Stores user feedback response in Firestore database
  const submitFeedback = async (
    newFeedback: Omit<FeedbackSubmission, 'id' | 'createdAt'>
  ): Promise<{ success: boolean; error?: string }> => {
    const res = await saveFeedbackResponse({
      name: newFeedback.name,
      email: newFeedback.email,
      feedbackType: newFeedback.feedbackType,
      rating: newFeedback.rating,
      message: newFeedback.message,
    });

    const item: FeedbackSubmission = {
      ...newFeedback,
      id: res.id || `fb-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    setFeedbacks((prev) => [item, ...prev]);

    return res;
  };

  // Stores membership application response in Firestore database
  const submitApplication = async (
    application: ApplicationPayload
  ): Promise<{ success: boolean; id: string; error?: string }> => {
    return await saveApplicationResponse(application);
  };

  return (
    <ClubDataContext.Provider
      value={{
        events,
        coreLeads,
        faqs,
        socialLinks,
        feedbacks,
        registerForEvent,
        submitFeedback,
        submitApplication,
      }}
    >
      {children}
    </ClubDataContext.Provider>
  );
};

export const useClubData = () => {
  const context = useContext(ClubDataContext);
  if (!context) {
    throw new Error('useClubData must be used within ClubDataProvider');
  }
  return context;
};
