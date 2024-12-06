import React from 'react';
import { Waves } from 'lucide-react';
import { Navbar } from './Navbar';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  return (
    <header>
    <Navbar onNavigate={onNavigate} currentPage={currentPage} />
    <div className="bg-gradient-to-br from-teal-500 via-blue-500 to-blue-700 text-white relative overflow-hidden py-16">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-30">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" className="w-full h-full">
          <circle cx="400" cy="300" r="450" fill="rgba(255,255,255,0.1)" />
          <circle cx="200" cy="200" r="300" fill="rgba(255,255,255,0.05)" />
        </svg>
      </div>
  
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="bg-white bg-opacity-10 rounded-full p-6 shadow-lg">
            <Waves className="w-14 h-14 text-teal-300 animate-pulse" />
          </div>
          <h1 className="text-5xl font-extrabold mt-6">
            <span className="block text-teal-300">Corps Humain</span>
            <span className="block text-blue-100">et Océan</span>
          </h1>
          <p className="mt-6 text-lg text-blue-200 max-w-3xl">
            Explorez les incroyables similitudes entre les mécanismes de notre corps et ceux des océans, et découvrez leur importance pour l'équilibre de notre planète.
          </p>
        </div>
      </div>
  
      {/* Decorative Waves */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="0.2"
            d="M0,256L48,240C96,224,192,192,288,165.3C384,139,480,117,576,122.7C672,128,768,160,864,186.7C960,213,1056,235,1152,240C1248,245,1344,235,1392,229.3L1440,224V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"
          ></path>
        </svg>
      </div>
    </div>
  </header>
  
  );
}