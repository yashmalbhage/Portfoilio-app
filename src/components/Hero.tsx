import React, { useEffect, useRef } from 'react';
import { Github as GitHub, Linkedin, Mail, Phone } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20 mt-16">
        <div 
          ref={textRef}
          className="max-w-3xl mx-auto text-center opacity-0 transform translate-y-8 transition-all duration-1000"
        >
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <span className="block">Hi, I'm Yash Malbhage</span>
            <span className={`block mt-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              Full Stack Developer
            </span>
          </h1>
          
          <p className={`text-lg md:text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            I build exceptional digital experiences with clean, efficient code.
            Specialized in creating modern web applications with cutting-edge technologies.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a 
              href="tel:9637385389" 
              className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-800 text-white hover:bg-gray-700' 
                  : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
              }`}
            >
              <Phone size={18} className="mr-2" />
              +91 9637385389
            </a>
            <a 
              href="mailto:yashmalbhage1@gmail.com" 
              className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-800 text-white hover:bg-gray-700' 
                  : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
              }`}
            >
              <Mail size={18} className="mr-2" />
              yashmalbhage1@gmail.com
            </a>
            <a 
              href="https://www.linkedin.com/in/yash-malbhage-2a8618213/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-800 text-white hover:bg-gray-700' 
                  : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
              }`}
            >
              <Linkedin size={18} className="mr-2" />
              LinkedIn
            </a>
            <a 
              href="https://github.com/yashmalbhage" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-800 text-white hover:bg-gray-700' 
                  : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
              }`}
            >
              <GitHub size={18} className="mr-2" />
              GitHub
            </a>
          </div>
          
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} 
            className={`animate-bounce mx-auto flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
              darkMode 
                ? 'bg-blue-500 text-white hover:bg-blue-600' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="feather feather-arrow-down"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;