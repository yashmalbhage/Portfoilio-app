import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${scrolled 
        ? `${darkMode ? 'bg-gray-900/90 shadow-lg shadow-blue-500/10' : 'bg-white/90 shadow-lg shadow-blue-500/5'}` 
        : 'bg-transparent'} 
      backdrop-blur-sm`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold relative overflow-hidden">
              <span className={`inline-block transition-all duration-300 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                Yash
              </span>
              <span className={`ml-1 inline-block transition-all duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Malbhage
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className={`transition-all duration-300 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className={`transition-all duration-300 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className={`transition-all duration-300 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`transition-all duration-300 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}
            >
              Contact
            </button>
            {/* <a 
              href="/resume.pdf" 
              className={`flex items-center transition-all duration-300 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}
              download
            >
              <Download size={16} className="mr-1" />
              Resume
            </a> */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-300 ${
                darkMode ? 'bg-gray-800 text-yellow-300 hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleDarkMode}
              className={`p-2 mr-2 rounded-full transition-all duration-300 ${
                darkMode ? 'bg-gray-800 text-yellow-300' : 'bg-gray-200 text-gray-700'
              }`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md ${
                darkMode ? 'text-white hover:bg-gray-800' : 'text-gray-800 hover:bg-gray-200'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`fixed inset-0 z-40 ${darkMode ? 'bg-gray-900' : 'bg-white'} pt-20`}>
            <div className="container mx-auto px-4">
              <nav className="flex flex-col space-y-6 text-xl">
                <button 
                  onClick={() => scrollToSection('about')}
                  className={`py-2 transition-colors duration-300 ${
                    darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                  }`}
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('skills')}
                  className={`py-2 transition-colors duration-300 ${
                    darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                  }`}
                >
                  Skills
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className={`py-2 transition-colors duration-300 ${
                    darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                  }`}
                >
                  Projects
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className={`py-2 transition-colors duration-300 ${
                    darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                  }`}
                >
                  Contact
                </button>
                {/* <a 
                  href="/resume.pdf" 
                  className={`flex items-center py-2 transition-colors duration-300 ${
                    darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                  }`}
                  download
                >
                  <Download size={18} className="mr-2" />
                  Resume
                </a> */}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;