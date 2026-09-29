export type Language = 'en' | 'kn' | 'hi';

export type EventCategory = 'workshop' | 'hackathon' | 'techtalk' | 'contest';
export type EventStatus = 'upcoming' | 'completed';

export interface ClubEvent {
  id: string;
  year: number; // 2026, 2025, 2024
  title: string;
  category: EventCategory;
  date: string;
  time: string;
  venue: string;
  description: string;
  speakerOrMentor: string;
  seatsAvailable: number;
  totalSeats: number;
  status: EventStatus;
  registrationOpen: boolean;
  tags: string[];
}

export interface CoreLead {
  id: string;
  role: string;
  name: string; // kept blank as requested
  department: string;
  year: string;
  focusArea: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface FeedbackSubmission {
  id: string;
  name?: string;
  email?: string;
  feedbackType: 'event' | 'workshop' | 'club_improvement' | 'general';
  rating: number;
  message: string;
  createdAt: string;
}

export interface SocialLink {
  platform: 'Instagram' | 'Discord' | 'WhatsApp';
  handle: string;
  url: string;
  actionText: string;
  description: string;
}
