import React, { useEffect, useRef, useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone size={20} />,
      title: 'Phone',
      value: '+91 9637385389',
      link: 'tel:9637385389'
    },
    {
      icon: <Mail size={20} />,
      title: 'Email',
      value: 'yashmalbhage1@gmail.com',
      link: 'mailto:yashmalbhage1@gmail.com'
    },
    {
      icon: <MapPin size={20} />,
      title: 'Location',
      value: 'Pune, India',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className="max-w-6xl mx-auto opacity-0 transform translate-y-8 transition-all duration-1000"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-2 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Get In Touch
          </h2>
          <div className={`w-20 h-1 mx-auto mb-16 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-1 space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex">
                  <div className={`flex-shrink-0 h-12 w-12 rounded-full flex items-center justify-center ${
                    darkMode ? 'bg-gray-800 text-blue-400' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {info.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors duration-300`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg transition-colors duration-300 ${
                        darkMode 
                          ? 'bg-gray-800 text-white border-gray-700 focus:border-blue-500' 
                          : 'bg-gray-100 text-gray-900 border-gray-300 focus:border-blue-600'
                      } border focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="email" 
                      className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      Your Email
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg transition-colors duration-300 ${
                        darkMode 
                          ? 'bg-gray-800 text-white border-gray-700 focus:border-blue-500' 
                          : 'bg-gray-100 text-gray-900 border-gray-300 focus:border-blue-600'
                      } border focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                    />
                  </div>
                </div>
                
                <div>
                  <label 
                    htmlFor="subject" 
                    className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg transition-colors duration-300 ${
                      darkMode 
                        ? 'bg-gray-800 text-white border-gray-700 focus:border-blue-500' 
                        : 'bg-gray-100 text-gray-900 border-gray-300 focus:border-blue-600'
                    } border focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="message" 
                    className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Your Message
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg transition-colors duration-300 ${
                      darkMode 
                        ? 'bg-gray-800 text-white border-gray-700 focus:border-blue-500' 
                        : 'bg-gray-100 text-gray-900 border-gray-300 focus:border-blue-600'
                    } border focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-3 rounded-lg font-medium flex items-center transition-all duration-300 ${
                      darkMode 
                        ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                          <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={18} className="ml-2" />
                      </>
                    )}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <span className="ml-4 text-green-500 font-medium">
                      Message sent successfully!
                    </span>
                  )}
                  
                  {submitStatus === 'error' && (
                    <span className="ml-4 text-red-500 font-medium">
                      Failed to send message. Please try again.
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;