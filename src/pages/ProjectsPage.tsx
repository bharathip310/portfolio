import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(projectsData.map(p => p.category)))];

  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.tech.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }} 
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="pt-32 pb-32 px-6 md:px-16 max-w-[1200px] mx-auto min-h-screen"
    >
      <div className="mb-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-[1px] w-12 bg-white/40" />
          <span className="text-xs font-mono tracking-[0.3em] text-white/50 uppercase block">
            Portfolio
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
        >
          All Works.
        </motion.h1>

        {/* Filters and Search */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-mono text-xs tracking-wider transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-white text-black font-bold" 
                    : "bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input 
              type="text" 
              placeholder="Search projects or tech..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-[300px] bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
            />
          </div>
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
        <AnimatePresence>
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={project.id}
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
              
              <div className="absolute inset-0 bg-radial-gradient from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

              <div className="relative z-10 p-8 flex justify-between items-start h-full flex-col">
                <div className="flex justify-between items-start w-full">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 group-hover:text-white group-hover:bg-white/10 backdrop-blur-md transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
                    {project.icon}
                  </div>
                  <div className="flex gap-2">
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
                    <Link to={`/projects/${project.id}`}>
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed line-clamp-2 pr-4 transition-colors duration-300 group-hover:text-white/80">
                    {project.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {filteredProjects.length === 0 && (
        <div className="py-20 text-center flex flex-col items-center justify-center border border-dashed border-white/10 rounded-[24px]">
          <Search className="w-10 h-10 text-white/20 mb-4" />
          <p className="text-white/50 font-mono text-sm">No projects match your current filters.</p>
          <button 
             onClick={() => { setSearchTerm(""); setActiveCategory("All"); }}
             className="mt-6 text-white text-sm border-b border-white/30 hover:border-white pb-1 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </motion.div>
  );
}
