import React, { useEffect, useRef, useState } from 'react';
import { Github as GitHub, ExternalLink } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  liveDemo?: string;
  image: string;
  category: string;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  useEffect(() => {
    const projectsData: Project[] = [
      {
        title: "AI Assistant",
        description: "A conversational AI assistant powered by OpenAI that can answer questions, generate content, and assist with various tasks.",
        technologies: ["Next.js", "Pinecone", "Open AI"],
        github: "https://github.com/yashmalbhage/custome-chatbot",
        // liveDemo: "https://predixion-ai-assi.vercel.app/",
        image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        category: "ai"
      },
      {
        title: "Video Chat Application",
        description: "Real-time video chat application with features like screen sharing, chat messaging, and room creation.",
        technologies: ["WebRTC", "Socket.io", "React", "Node.js"],
        github: "https://github.com/yashmalbhage/Video_chat_",
        image: "https://images.pexels.com/photos/7015034/pexels-photo-7015034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        category: "webrtc"
      },
      {
        title: "AI Image Generator",
        description: "App that generates images based on text prompts using artificial intelligence.",
        technologies: ["React", "Tailwind CSS", "Node.js", "Hugging face"],
        liveDemo: "https://ai-image-ui.vercel.app/Create",
        image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        category: "ai"
      }
    ];

    setProjects(projectsData);
    setFilteredProjects(projectsData);
  }, []);

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

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter, projects]);

  const categories = [
    { name: 'All', value: 'all' },
    { name: 'AI', value: 'ai' },
    { name: 'WebRTC', value: 'webrtc' }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className="max-w-6xl mx-auto opacity-0 transform translate-y-8 transition-all duration-1000"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-2 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            My Projects
          </h2>
          <div className={`w-20 h-1 mx-auto mb-10 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(category.value)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category.value
                    ? darkMode 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-blue-600 text-white'
                    : darkMode 
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index}
                className={`group rounded-xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 ${
                  darkMode ? 'bg-gray-800 shadow-lg shadow-blue-900/10' : 'bg-white shadow-lg'
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                    <div className="p-4 w-full flex justify-end space-x-3">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-gray-900/80 text-white hover:bg-gray-900 transition-all duration-300"
                        >
                          <GitHub size={18} />
                        </a>
                      )}
                      {project.liveDemo && (
                        <a 
                          href={project.liveDemo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-blue-600/80 text-white hover:bg-blue-600 transition-all duration-300"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          darkMode 
                            ? 'bg-gray-700 text-gray-300' 
                            : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;