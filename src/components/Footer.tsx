import React from 'react';
import { Github as GitHub, Linkedin, Mail, Phone } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`py-10 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-bold">
              <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Yash</span>
              <span className={`ml-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Malbhage</span>
            </div>
            <p className={`mt-2 max-w-md ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Full Stack Developer specializing in creating exceptional digital experiences.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/yashmalbhage" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`p-2 rounded-full transition-colors duration-300 ${
                darkMode 
                  ? 'bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <GitHub size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/yash-malbhage-2a8618213/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`p-2 rounded-full transition-colors duration-300 ${
                darkMode 
                  ? 'bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:yashmalbhage1@gmail.com" 
              className={`p-2 rounded-full transition-colors duration-300 ${
                darkMode 
                  ? 'bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Mail size={20} />
            </a>
            <a 
              href="tel:9637385389" 
              className={`p-2 rounded-full transition-colors duration-300 ${
                darkMode 
                  ? 'bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Phone size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center ${darkMode ? 'border-gray-800 text-gray-400' : 'border-gray-200 text-gray-600'}">
          <p>&copy; {new Date().getFullYear()} Yash Malbhage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;