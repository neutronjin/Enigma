import {
  collection,
  doc,
  setDoc,
  getDocs,
  query,
  orderBy,
  limit,
} from 'firebase/firestore';
import { db } from '../firebase';
import { FeedbackSubmission } from '../types';

export interface ApplicationPayload {
  fullName: string;
  email: string;
  usn: string;
  branch: string;
  year: '1st Year' | '2nd Year' | '3rd Year' | '4th Year';
  domain: string;
  portfolio?: string;
  reason?: string;
}

export interface RegistrationPayload {
  eventId: string;
  eventTitle: string;
  name: string;
  email: string;
  usn: string;
  year: '1st Year' | '2nd Year' | '3rd Year' | '4th Year';
}

export interface FeedbackPayload {
  name?: string;
  email?: string;
  feedbackType: 'workshop' | 'event' | 'club_improvement' | 'general';
  rating: number;
  message: string;
}

/**
 * Stores a club membership application response in the Firestore database.
 */
export async function saveApplicationResponse(payload: ApplicationPayload): Promise<{ success: boolean; id: string; error?: string }> {
  try {
    const id = `app_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const ref = doc(db, 'responses_applications', id);

    const docData: Record<string, any> = {
      id,
      fullName: payload.fullName.trim(),
      email: payload.email.trim().toLowerCase(),
      usn: payload.usn.trim().toUpperCase(),
      branch: payload.branch.trim(),
      year: payload.year,
      domain: payload.domain.trim() || 'General Technical',
      portfolio: payload.portfolio ? payload.portfolio.trim() : '',
      reason: payload.reason ? payload.reason.trim() : 'Enthusiastic to learn and contribute to ENIGMA.',
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    await setDoc(ref, docData);
    return { success: true, id };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to save application';
    console.error('Error saving application to database:', message);
    return { success: false, id: '', error: message };
  }
}

/**
 * Stores an event registration/RSVP response in the Firestore database.
 */
export async function saveEventRegistrationResponse(payload: RegistrationPayload): Promise<{ success: boolean; id: string; error?: string }> {
  try {
    const id = `reg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const ref = doc(db, 'responses_event_registrations', id);

    const docData = {
      id,
      eventId: payload.eventId,
      eventTitle: payload.eventTitle,
      name: payload.name.trim(),
      email: payload.email.trim().toLowerCase(),
      usn: payload.usn.trim().toUpperCase(),
      year: payload.year,
      status: 'confirmed',
      createdAt: new Date().toISOString(),
    };

    await setDoc(ref, docData);
    return { success: true, id };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to save event registration';
    console.error('Error saving event registration to database:', message);
    return { success: false, id: '', error: message };
  }
}

/**
 * Stores a user feedback or inquiry response in the Firestore database.
 */
export async function saveFeedbackResponse(payload: FeedbackPayload): Promise<{ success: boolean; id: string; error?: string }> {
  try {
    const id = `fb_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const ref = doc(db, 'responses_feedback', id);

    const docData: Record<string, any> = {
      id,
      feedbackType: payload.feedbackType,
      rating: Number(payload.rating) || 5,
      message: payload.message.trim(),
      status: 'new',
      createdAt: new Date().toISOString(),
    };

    if (payload.name && payload.name.trim()) {
      docData.name = payload.name.trim();
    }
    if (payload.email && payload.email.trim()) {
      docData.email = payload.email.trim().toLowerCase();
    }

    await setDoc(ref, docData);
    return { success: true, id };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to save feedback';
    console.error('Error saving feedback to database:', message);
    return { success: false, id: '', error: message };
  }
}

/**
 * Fetches recent feedback submissions from the database.
 */
export async function fetchFeedbackResponses(): Promise<FeedbackSubmission[]> {
  try {
    const q = query(collection(db, 'responses_feedback'), orderBy('createdAt', 'desc'), limit(50));
    const snapshot = await getDocs(q);
    const results: FeedbackSubmission[] = [];
    snapshot.forEach((docSnap) => {
      const data = docSnap.data();
      results.push({
        id: data.id || docSnap.id,
        name: data.name,
        email: data.email,
        feedbackType: data.feedbackType || 'general',
        rating: data.rating,
        message: data.message,
        createdAt: data.createdAt,
      });
    });
    return results;
  } catch (err) {
    console.warn('Could not fetch remote feedback:', err);
    return [];
  }
}
