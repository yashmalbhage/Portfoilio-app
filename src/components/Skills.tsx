import React, { useEffect, useRef, useState } from 'react';

interface SkillProps {
  darkMode: boolean;
}

interface SkillBarProps {
  name: string;
  percentage: number;
  darkMode: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage, darkMode }) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setWidth(percentage);
            }, 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, [percentage]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {name}
        </span>
        <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          {percentage}%
        </span>
      </div>
      <div 
        ref={barRef}
        className={`h-2.5 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
      >
        <div 
          className={`h-2.5 rounded-full transition-all duration-1000 ease-out ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC<SkillProps> = ({ darkMode }) => {
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

  const frontendSkills = [
    { name: 'HTML/CSS', percentage: 90 },
    { name: 'JavaScript', percentage: 85 },
    { name: 'React.js', percentage: 85 },
    { name: 'TypeScript', percentage: 80 },
    { name: 'Next.js', percentage: 75 },
  ];

  const backendSkills = [
    { name: 'Node.js', percentage: 85 },
    { name: 'Express.js', percentage: 80 },
    { name: 'MongoDB', percentage: 75 },
    { name: 'SQL', percentage: 70 },
    { name: 'REST API', percentage: 85 },
  ];

  const otherSkills = [
    "Git/GitHub",
    "Responsive Design",
    "UI/UX Principles",
    "Tailwind CSS",
    "Material UI",
    "Redux",
    "AWS",
    "Docker",
    "Testing (Jest)",
    "CI/CD",
    "Agile/Scrum",
    "Problem Solving"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className="max-w-5xl mx-auto opacity-0 transform translate-y-8 transition-all duration-1000"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-2 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            My Skills
          </h2>
          <div className={`w-20 h-1 mx-auto mb-16 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Frontend Development
              </h3>
              {frontendSkills.map((skill, index) => (
                <SkillBar 
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  darkMode={darkMode}
                />
              ))}
            </div>
            
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Backend Development
              </h3>
              {backendSkills.map((skill, index) => (
                <SkillBar 
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  darkMode={darkMode}
                />
              ))}
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Other Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {otherSkills.map((skill, index) => (
                <span 
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    darkMode 
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;