import React, { useEffect, useRef } from 'react';
import { Calendar, Briefcase, GraduationCap } from 'lucide-react';

interface TimelineProps {
  darkMode: boolean;
}

const Timeline: React.FC<TimelineProps> = ({ darkMode }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineEvents = [
  {
    date: "Dec 2024 - May 2025",
    title: "Freelance Frontend Developer",
    subtitle: "Relu Consultancy (Remote)",
    description:
      "Worked on multiple projects using React, Redux, and Tailwind CSS. Built dashboards for:\n• Sparkle Carwash: KPI visualization for 12+ locations using React 18, MUI 5, Vite, TypeScript.\n• Airbnb Reviews: Rating/review dashboard for 1000+ properties with filtering and user roles.\n• Social DM: Cold DM marketing tool with Recharts and bulk messaging filters.",
    icon: <Briefcase size={20} />,
    category: "work"
  },
  {
    date: "Jul 2024 - Dec 2024",
    title: "Frontend Developer Intern",
    subtitle: "Go-Plus (Remote)",
    description:
      "Contributed to a cloud-based assessment platform using Angular. Wrote unit tests with Karma and Jasmine, fixed UI/UX bugs, implemented pagination, supported multilingual features using i18-next and Angular pipes, and redesigned UI using Bootstrap.",
    icon: <Briefcase size={20} />,
    category: "work"
  },
  {
    date: "Sep 2023 - Dec 2023",
    title: "Frontend Intern",
    subtitle: "Gradesway, Pune",
    description:
      "Worked on frontend development for Gradesway SaaS platform using Angular, Firebase, and Tailwind CSS. Collaborated with backend team for API integration and actively participated in design discussions.",
    icon: <Briefcase size={20} />,
    category: "work"
  },
  {
    date: "Dec 2022 - Mar 2023",
    title: "SDE Intern",
    subtitle: "Japp.io (Virtual)",
    description:
      "Developed a sound engineering app using React and Tone.js. Produced multi-frequency audio, collaborated with design team for UX insights.",
    icon: <Briefcase size={20} />,
    category: "work"
  }
];

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
    <section id="timeline" className="py-20">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className="max-w-4xl mx-auto opacity-0 transform translate-y-8 transition-all duration-1000"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-2 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            My Journey
          </h2>
          <div className={`w-20 h-1 mx-auto mb-16 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></div>

          <div className="relative">
            {/* Timeline line */}
            <div 
              className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 ${
                darkMode ? 'bg-gray-700' : 'bg-gray-200'
              }`}
            ></div>

            {/* Timeline events */}
            {timelineEvents.map((event, index) => (
              <div 
                key={index}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div 
                  className={`absolute left-4 md:left-1/2 transform -translate-y-1/2 ${
                    index % 2 === 0 ? 'md:-translate-x-1/2' : 'md:-translate-x-1/2'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    darkMode 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-blue-600 text-white'
                  }`}>
                    {event.icon}
                  </div>
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 
                    ? 'md:pr-16 md:text-right' 
                    : 'md:pl-16 md:text-left'
                }`}>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${
                    darkMode 
                      ? 'bg-gray-800 text-blue-400' 
                      : 'bg-blue-100 text-blue-600'
                  }`}>
                    {event.date}
                  </span>
                  <h3 className={`text-xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {event.title}
                  </h3>
                  <h4 className={`text-lg mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {event.subtitle}
                  </h4>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;