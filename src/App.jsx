import  { useState, useEffect } from 'react';
import AmbientBackground from './components/AmbientBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import LiveMetrics from './components/LiveMetrics';
import Interventions from './components/Interventions';
import ImpactCalculator from './components/ImpactCalculator';
import CertificatesHighlight from './components/CertificatesHighlight';
import PressCoverage from './components/PressCoverage';
import VolunteerSignUp from './components/VolunteerSignUp';
import Footer from './components/Footer';

// Constants for branding and external redirection links
const TARGET_LINKS = {
  certificates: 'https://nayepankh.com/our-certificates',
  newspaper: 'https://nayepankh.com/newspaper-recognition',
  donate: 'https://nayepankh.com/donate'
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [calculatorValue, setCalculatorValue] = useState(1500);
  const [activeVolunteerName, setActiveVolunteerName] = useState('');
  const [activeVolunteerEmail, setActiveVolunteerEmail] = useState('');
  const [activeVolunteerPhone, setActiveVolunteerPhone] = useState('');
  const [isVolunteerRegistered, setIsVolunteerRegistered] = useState(false);

  // Dynamic simulated metrics for visual representation and constant activity
  const [liveMeals, setLiveMeals] = useState(342180);
  const [liveBlankets, setLiveBlankets] = useState(41250);
  const [liveStudents] = useState(11850);
  const [liveVolunteers, setLiveVolunteers] = useState(5420);

  // Increment live stats slowly to reflect constant real-time relief efforts
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMeals(prev => prev + Math.floor(Math.random() * 2));
      if (Math.random() > 0.8) {
        setLiveBlankets(prev => prev + 1);
      }
      if (Math.random() > 0.9) {
        setLiveVolunteers(prev => prev + 1);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleForward = (urlKey) => {
    window.open(TARGET_LINKS[urlKey], '_blank', 'noopener,noreferrer');
  };

  // Safe impact calculator indicators
  const mealImpact = Math.floor(calculatorValue / 35);
  const blanketImpact = Math.floor(calculatorValue / 250);
  const schoolKitImpact = Math.floor(calculatorValue / 600);

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    if (activeVolunteerName && activeVolunteerEmail && activeVolunteerPhone) {
      setIsVolunteerRegistered(true);
      setTimeout(() => {
        setIsVolunteerRegistered(false);
        setActiveVolunteerName('');
        setActiveVolunteerEmail('');
        setActiveVolunteerPhone('');
      }, 5000);
    }
  };

  return (
    <div className="relative min-h-screen text-text-cream font-sans antialiased overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      {/* Background visual canvas */}
      <AmbientBackground />

      {/* Modern Sticky Header & Mobile Nav togglers */}
      <Header 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
        handleForward={handleForward} 
      />

      {/* Hero Interventions pitch segment */}
      <Hero 
        handleForward={handleForward} 
      />

      {/* Live activity numbers monitor */}
      <LiveMetrics 
        liveMeals={liveMeals}
        liveBlankets={liveBlankets}
        liveStudents={liveStudents}
        liveVolunteers={liveVolunteers}
      />

      {/* Triple grid deployments of ground operations */}
      <Interventions 
        handleForward={handleForward} 
      />

      {/* Segmented mathematical impact estimator calculator */}
      <ImpactCalculator 
        calculatorValue={calculatorValue}
        setCalculatorValue={setCalculatorValue}
        mealImpact={mealImpact}
        blanketImpact={blanketImpact}
        schoolKitImpact={schoolKitImpact}
        handleForward={handleForward}
      />

      {/* Detailed secure governmental trust summaries */}
      <CertificatesHighlight 
        handleForward={handleForward} 
      />

      {/* Interactive regional newspaper prints archives */}
      <PressCoverage 
        handleForward={handleForward} 
      />

      {/* Interactive registration for young volunteer helpers */}
      <VolunteerSignUp 
        activeVolunteerName={activeVolunteerName}
        setActiveVolunteerName={setActiveVolunteerName}
        activeVolunteerEmail={activeVolunteerEmail}
        setActiveVolunteerEmail={setActiveVolunteerEmail}
        activeVolunteerPhone={activeVolunteerPhone}
        setActiveVolunteerPhone={setActiveVolunteerPhone}
        isVolunteerRegistered={isVolunteerRegistered}
        handleVolunteerSubmit={handleVolunteerSubmit}
      />

      {/* Footer contacts & copyright specifications */}
      <Footer 
        handleForward={handleForward} 
      />
    </div>
  );
}
