import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [

    {
      title: 'Internhub System',
      description:
        'Internhub System for students to apply for internship with your individual skills',
      tech: ['React', 'MERN', 'Tailwind CSS'],
      github: 'https://github.com/anuragverma16/internship-system',
      demo: 'https://demo.com',
      image: '/public/internhub.jpg',
      gradient: 'from-blue-500 to-cyan-500',
      features: ['Interview', 'Student profile', 'Apply for Job', 'Post Internship'],
    },
    {
      title: 'Savoria -Restaurant Website',
      description:
        'Savoria Restaurant website for foody people with online order placement system ',
      tech: ['React', "MongoDB"," JWT", 'Node.js', 'Express.js'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: '/public/restaurant.jpg',
      gradient: 'from-orange-500 to-yellow-500',
      features: ['Add items', 'Payment Gateway', 'Booking System', 'Multiple Panels'],
    },
    {
      title: 'Portfolio Website',
      description:
        'A SaaS platform for developers to create and customize their portfolio websites with templates and themes.',
      tech: ['React.js', 'TypeScript', 'Motion'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      gradient: 'from-green-500 to-emerald-500',
      features: ['About', 'Skills', 'Projects'],
    },


  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 px-4">
            Featured Projects
          </h2>
          <div className="w-20 h-[1px] bg-white/30 mx-auto" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} variants={cardVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Individual project card component with flip animation
const ProjectCard = ({ project, variants }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      variants={variants}
      className="perspective-1000 h-[350px] sm:h-[380px]"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      onTouchStart={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* FRONT SIDE */}
        <div
          className="absolute inset-0 backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="w-full h-full bg-black border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-all duration-300 shadow-xl">
            {/* Project Image */}
            <div className="relative h-36 sm:h-44 overflow-hidden">
              <div className={`absolute inset-0 opacity-60`} />
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-black/20" />
              
              {/* Floating badge */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white/90 backdrop-blur-sm px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-medium text-black"
              >
                Tap to flip
              </motion.div>
            </div>

            <div className="p-4 sm:p-5">
              {/* Project Title */}
              <motion.h3 
                className="text-base sm:text-lg font-light text-white mb-2"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {project.title}
              </motion.h3>

              {/* Project Description */}
              <motion.p 
                className="text-white/50 text-xs font-light leading-relaxed line-clamp-2 mb-3"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {project.description}
              </motion.p>

              {/* Tech Stack */}
              <motion.div 
                className="flex flex-wrap gap-1.5"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {project.tech.slice(0, 3).map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-light bg-white/5 text-white/60 border border-white/10 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-light bg-white/5 text-white/60 border border-white/10 rounded-full">
                    +{project.tech.length - 3}
                  </span>
                )}
              </motion.div>
            </div>
          </div>
        </div>

        {/* BACK SIDE */}
        <div
          className="absolute bg-gray-400 inset-0 backface-hidden"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className={`w-full h-full  rounded-lg overflow-hidden shadow-2xl p-4 sm:p-5 flex flex-col justify-between`}>
            {/* Back Content */}
            <div>
              <motion.h3 
                className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                {project.title}
              </motion.h3>

              {/* Features List */}
              <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 text-black"
                  >
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[10px] sm:text-xs font-light">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* All Tech Stack */}
              <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-4">
                {project.tech.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-medium bg-white/20 text-black backdrop-blur-sm rounded-full border border-white/30"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Links with Colorful Buttons */}
            <div className="flex gap-2">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs bg-white/90 hover:bg-white text-black rounded-lg transition-all duration-300 font-semibold shadow-lg"
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Code
              </motion.a>
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs bg-black/60 hover:bg-black/80 text-white rounded-lg transition-all duration-300 font-semibold shadow-lg backdrop-blur-sm border border-white/20"
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Demo
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
