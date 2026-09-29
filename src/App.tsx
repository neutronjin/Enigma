import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { ClubDataProvider } from './context/ClubDataContext';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MottoSection } from './components/MottoSection';
import { EventsSection } from './components/EventsSection';
import { CoreLeadsSection } from './components/CoreLeadsSection';
import { FaqSection } from './components/FaqSection';
import { FeedbackSection } from './components/FeedbackSection';
import { SocialSection } from './components/SocialSection';
import { Footer } from './components/Footer';
import { JoinModal } from './components/JoinModal';

function MainLayout() {
  const [joinModalOpen, setJoinModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col font-sans selection:bg-orange-500 selection:text-white bg-[#FCF1D0] text-stone-900 dark:bg-[#010736] dark:text-stone-100 transition-colors duration-200">
      {/* Top Bar Navigation */}
      <Navbar onOpenJoin={() => setJoinModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenJoin={() => setJoinModalOpen(true)} />
        <MottoSection />
        <EventsSection />
        <CoreLeadsSection />
        <FaqSection />
        <FeedbackSection />
        <SocialSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Join Club Modal */}
      <JoinModal
        isOpen={joinModalOpen}
        onClose={() => setJoinModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ClubDataProvider>
          <MainLayout />
        </ClubDataProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
