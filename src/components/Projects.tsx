import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projects';

export default function FeaturedProjects() {
  const navigate = useNavigate();
  // Show only top 4 projects as featured
  const featuredProjects = projectsData.slice(0, 4);

  return (
    <section id="projects" className="py-32 px-6 md:px-16 max-w-[1200px] mx-auto relative z-10">
      <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-0">
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-[1px] w-12 bg-white/40" />
            <span className="text-xs font-mono tracking-[0.3em] text-white/50 uppercase block">
              Selected Works
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg max-w-xl"
          >
            A curated showcase of full-stack engineering, from highly scalable database architectures to interactive web experiences.
          </motion.p>
        </div>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
        >
          <button 
             onClick={() => { window.scrollTo({ top: 0 }); navigate('/projects') }}
             className="px-8 py-3 rounded-full border border-white/20 text-white font-mono text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
          >
            View All Projects
          </button>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
        {featuredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: (idx % 4) * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative overflow-hidden flex flex-col justify-between ${project.span} rounded-[24px] border border-white/10 bg-[#111] hover:border-white/20 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)]`}
          >
            {project.image && (
              <div className="absolute inset-0 z-0">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/80 to-transparent" />
              </div>
            )}
            
            {/* Ambient hover glow */}
            <div className="absolute inset-0 bg-radial-gradient from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

            <div className="relative z-10 p-8 flex justify-between items-start h-full flex-col">
              <div className="flex justify-between items-start w-full">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 group-hover:text-white group-hover:bg-white/10 backdrop-blur-md transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
                  {project.icon}
                </div>
                <div className="flex gap-2">
                  <a href="#" className="w-10 h-10 rounded-full bg-black/50 border border-white/5 flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-md">
                    <Github className="w-4 h-4 text-white" />
                  </a>
                  <Link to={`/projects/${project.id}`} className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors shadow-[0_4px_15px_rgba(255,255,255,0.2)]">
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="w-full mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-widest font-mono text-white/60 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full backdrop-blur-md group-hover:border-white/20 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all duration-300">
                  <Link to={`/projects/${project.id}`}>{project.title}</Link>
                </h3>
                <p className="text-white/60 text-sm leading-relaxed line-clamp-2 pr-4 transition-colors duration-300 group-hover:text-white/80">
                  {project.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
