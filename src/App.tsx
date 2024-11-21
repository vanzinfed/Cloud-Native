import React from 'react';
import Navbar from './components/Navigation/Navbar';
import Hero from './components/Home/Hero';
import Carousel from './components/Carousel/Carousel';
import Features from './components/Features/Features';
import Architecture from './components/Sections/Architecture';
import Innovation from './components/Sections/Innovation';
import DevOps from './components/Sections/DevOps';
import Security from './components/Sections/Security';
import Optimization from './components/Sections/Optimization';
import GetStarted from './components/Sections/GetStarted';
import Team from './components/Team/Team';
import Footer from './components/Contact/Footer';
import ChatBot from './components/Chat/ChatBot';

function App() {
  return (
    <div className="min-h-screen bg-blue-900">
      <Navbar />
      <Hero />
      <Features />
      <Architecture />
      <Innovation />
      <DevOps />
      <Security />
      <Optimization />
      <GetStarted />
      <Carousel />
      <Team />
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;