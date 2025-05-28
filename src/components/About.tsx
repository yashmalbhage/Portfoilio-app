import React, { useEffect, useRef } from 'react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef} 
          className="max-w-4xl mx-auto opacity-0 transform translate-y-8 transition-all duration-1000"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-2 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            About Me
          </h2>
          <div className={`w-20 h-1 mx-auto mb-10 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
          
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-3">
              <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                I'm a passionate Full Stack Developer with a strong focus on creating efficient, 
                scalable, and user-friendly web applications. With expertise in modern JavaScript 
                frameworks and libraries, I strive to build seamless digital experiences.
              </p>
              <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                My experience spans across front-end development using React and back-end 
                technologies like Node.js and MongoDB. I enjoy tackling complex problems and 
                turning them into simple, elegant solutions.
              </p>
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or enhancing my skills through continuous learning.
              </p>
            </div>
            
            <div className="md:col-span-2">
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Education
                </h3>
                <div className="mb-4">
                  <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Computer Science
                  </p>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    2020 - 2024
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Bachelor of Engineering
                  </p>
                </div>
                
                {/* <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Languages
                </h3>
                <ul className={`list-disc list-inside ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>English (Professional)</li>
                  <li>Hindi (Native)</li>
                  <li>Marathi (Native)</li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;