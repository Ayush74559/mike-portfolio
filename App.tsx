import React, { useState } from 'react';
import Hero from './components/Hero';
import JourneyTimeline from './components/JourneyTimeline';
import MusicalJourney from './components/MusicalJourney';
import Philosophy from './components/Philosophy';
import CreateExtraordinary from './components/CreateExtraordinary';
import PersonalInsights from './components/PersonalInsights';
import FastDataConnect from './components/FastDataConnect';
import Footer from './components/Footer';
import { ContactServices } from './components/ContactServices';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [view, setView] = useState<'home' | 'services' | 'consultation'>('home');

  if (view !== 'home') {
    return <ContactServices initialTab={view} onBack={() => setView('home')} />;
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white font-sans">
      <main className="flex flex-col">
        <Hero onNavigate={setView} />
        <JourneyTimeline />
        <MusicalJourney />
        <Philosophy />
        <CreateExtraordinary onNavigate={setView} />
        <PersonalInsights />
        <FastDataConnect onNavigate={setView} />
        <Footer />
      </main>
    </div>
  );
}

export default App;