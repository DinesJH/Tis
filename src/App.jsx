import React from 'react';
import AdmissionHelplineBar from './components/AdmissionHelplineBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import './App.css';
import ContactEnquirySection from './components/ContactEnquirySection';

export default function App() {
  return (
    <div className="app-container">
      
      {/* 1. Sticky Header Container (Only Helpline Bar & Navbar stay locked at top) */}
      <header className="sticky-header">
        <AdmissionHelplineBar />
        <Navbar />
      </header>
       <HeroSection />
        <ContactEnquirySection />
      
 
    </div>
  );
}