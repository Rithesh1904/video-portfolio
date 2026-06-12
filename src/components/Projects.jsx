import React, { useState, useEffect } from 'react';
import turfImg from '../assets/projects/turftime.png';
import skinImg from '../assets/projects/skinsight.png';
import dashImg from '../assets/projects/dashboard.png';

const projects = [
  {
    id: "turftime",
    title: "TurfTime",
    category: "Web Application",
    image: turfImg,
    description: "Developed TurfTime, a full-stack MERN-based web application designed to simplify and digitize the process of booking sports turfs. The platform enables users to search for nearby turfs, view real-time slot availability, compare pricing, and book slots seamlessly through an intuitive user interface.",
    fullDescription: "Developed TurfTime, a full-stack MERN-based web application designed to simplify and digitize the process of booking sports turfs. The platform enables users to search for nearby turfs, view real-time slot availability, compare pricing, and book slots seamlessly through an intuitive user interface. Implemented secure user authentication, booking management, and availability tracking to prevent scheduling conflicts and double bookings. Built RESTful APIs for efficient communication between the frontend and backend, while MongoDB was used to manage user, turf, and booking data. The application provides a responsive experience across devices and significantly reduces the manual effort involved in finding and reserving sports facilities.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript", "REST APIs"],
  },
  {
    id: "skinsight",
    title: "SkinSight",
    category: "AI & Healthcare",
    image: skinImg,
    description: "Developed SkinSight, an AI-powered dermatology platform aimed at assisting in the early detection and classification of skin cancer through advanced image analysis techniques.",
    fullDescription: "Developed SkinSight, an AI-powered dermatology platform aimed at assisting in the early detection and classification of skin cancer through advanced image analysis techniques. The system utilizes a hybrid CNN-SVM machine learning model to accurately identify and classify skin lesions from dermoscopic images. Implemented image preprocessing, feature extraction, and classification pipelines using TensorFlow/Keras, OpenCV, and Scikit-learn. Integrated additional features such as automated diagnostic report generation, risk scoring, and an AI chatbot to improve user engagement and provide accessible healthcare support. Developed a responsive web interface that allows users to upload images, view prediction results, and access detailed reports. The model achieved strong performance on HAM10000 and ISIC datasets, demonstrating high accuracy, precision, recall, and F1-score metrics.",
    tech: ["HTML", "CSS", "JavaScript", "React.js (Vite)", "Node.js", "Express.js", "MongoDB", "REST APIs", "Python", "TensorFlow/Keras", "OpenCV", "Scikit-learn", "CNN", "SVM"],
  },
  {
    id: "dashboard",
    title: "Custom Dashboard Builder",
    category: "Full Stack Tool",
    image: dashImg,
    description: "Developed a Custom Dashboard Builder with Customer Order Management System, a dynamic web application that enables users to create fully personalized dashboards through an interactive drag-and-drop interface.",
    fullDescription: "Developed a Custom Dashboard Builder with Customer Order Management System, a dynamic web application that enables users to create fully personalized dashboards through an interactive drag-and-drop interface. The platform allows users to add, configure, resize, and arrange widgets such as charts, KPI cards, and data tables according to their specific business requirements. Integrated a comprehensive customer order management module supporting order creation, validation, filtering, and real-time tracking. Implemented data visualization features using Recharts to provide meaningful insights into customer orders and business performance. Designed a responsive grid-based layout that adapts seamlessly across desktop, tablet, and mobile devices while ensuring smooth user interactions. The application enhances operational efficiency by combining customizable analytics dashboards with real-time business data management in a single platform.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "HTML", "Tailwind CSS", "REST APIs", "Recharts"],
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [activeProject]);

  return (
    <section id="projects" className="bg-white py-32 px-6 md:px-12 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div data-aos="fade-right">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-6">
              Selected <br /> <span className="text-[#ff2a2a]">Projects</span>
            </h2>
            <p className="max-w-md text-gray-500 font-medium text-lg leading-relaxed">
              A collection of products I've built that combine creative design with complex technical implementation.
            </p>
          </div>
          <div data-aos="fade-left" className="text-right hidden md:block">
            <p className="text-gray-400 font-mono text-xs uppercase tracking-widest mb-2">( 03 )</p>
            <p className="font-bold text-gray-900 uppercase tracking-tighter cursor-pointer hover:text-[#ff2a2a] transition-colors">View all work / GitHub</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-32">
          {projects.map((project, index) => (
            <div 
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}
            >
              <div className="flex-1 w-full aspect-video bg-gray-100 rounded-[2rem] overflow-hidden group cursor-pointer relative" onClick={() => setActiveProject(project)}>
                 <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
                 <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                 />
              </div>
              <div className="flex-1 max-w-xl">
                <p className="text-[#ff2a2a] font-bold text-sm tracking-widest uppercase mb-4">{project.category}</p>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 text-black">{project.title}</h3>
                <p className="text-gray-500 text-lg font-medium leading-relaxed mb-8">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tech.slice(0, 4).map((t, i) => (
                    <span key={i} className="px-4 py-1.5 rounded-full border border-gray-200 text-gray-600 text-xs font-bold uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-4 py-1.5 rounded-full border border-gray-200 text-gray-400 text-xs font-bold uppercase tracking-wider">
                      +{project.tech.length - 4} More
                    </span>
                  )}
                </div>
                <button 
                  onClick={() => setActiveProject(project)}
                  className="px-8 py-3 rounded-full bg-black text-white font-bold hover:bg-[#ff2a2a] transition-all duration-300 transform hover:translate-x-2"
                >
                  Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/95 backdrop-blur-xl transition-all duration-500"
            onClick={() => setActiveProject(null)}
          ></div>
          
          {/* Modal Content */}
          <div 
            className="relative bg-white w-full max-w-5xl max-h-[90vh] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col z-10"
            data-aos="zoom-in"
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveProject(null)}
              className="absolute top-6 right-8 z-20 text-gray-400 hover:text-black transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="overflow-y-auto flex-1 p-8 md:p-16 scrollbar-hide">
              <div className="max-w-3xl mx-auto">
                <div className="mb-12">
                  <p className="text-[#ff2a2a] font-bold text-sm tracking-widest uppercase mb-4">{activeProject.category}</p>
                  <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none text-black">{activeProject.title}</h2>
                  
                  <div className="flex flex-wrap gap-2 mb-12">
                    {activeProject.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 rounded-md bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-12">
                  <div>
                    <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">Overview</h4>
                    <p className="text-xl md:text-2xl font-medium text-gray-900 leading-relaxed">
                      {activeProject.fullDescription}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-gray-100">
                    <div>
                      <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">Highlights</h4>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a2a] mt-2 shrink-0"></span>
                          <span className="text-gray-600 font-medium">Responsive Cross-Platform UI</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a2a] mt-2 shrink-0"></span>
                          <span className="text-gray-600 font-medium">Scalable Backend Architecture</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a2a] mt-2 shrink-0"></span>
                          <span className="text-gray-600 font-medium">Secure Data Management</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">Tools Used</h4>
                      <div className="flex flex-wrap gap-2">
                         {activeProject.tech.map((t, i) => (
                            <span key={i} className="font-mono text-[11px] text-gray-500">{t}{i < activeProject.tech.length - 1 ? " / " : ""}</span>
                         ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-24 pt-12 border-t border-gray-100 flex justify-between items-center">
                  <button onClick={() => setActiveProject(null)} className="font-bold text-gray-400 hover:text-black transition-colors uppercase tracking-widest text-xs">
                    ← Back to Projects
                  </button>
                  <button className="px-10 py-4 bg-[#ff2a2a] text-white rounded-full font-bold shadow-lg shadow-red-500/30 hover:scale-105 transition-transform">
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
