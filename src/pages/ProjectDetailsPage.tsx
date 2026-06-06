import React, { useEffect, useState } from 'react';
import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Code } from "lucide-react";
import { projectsData } from "../data/projects";

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const [project, setProject] = useState(projectsData.find(p => p.id === id));

  useEffect(() => {
    setProject(projectsData.find(p => p.id === id));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 text-white uppercase font-mono tracking-widest text-sm">
        Project Not Found
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }} 
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="pt-32 pb-32 px-6 md:px-16 max-w-[1000px] mx-auto min-h-screen"
    >
      <Link 
         to="/projects" 
         className="inline-flex items-center gap-2 text-white/50 hover:text-white font-mono text-xs uppercase tracking-widest mb-12 transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Projects
      </Link>

      <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 0.2 }}
         className="w-full aspect-[21/9] md:aspect-[21/9] rounded-[32px] overflow-hidden mb-12 bg-[#111] relative shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/10"
      >
         {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80" />
         ) : (
            <div className="absolute inset-0 flex items-center justify-center text-white/20">
              <Code className="w-20 h-20" />
            </div>
         )}
         <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              {project.title}
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              {project.desc}
            </p>
          </div>

          <div>
             <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">01</div>
               Overview
             </h3>
             <p className="text-white/60 leading-relaxed">
               This project demonstrates architectural decisions and technical implementation focused on scalability, performance, and best practices. As a {project.category.toLowerCase()} application, it integrates multiple layers of complexity into a seamless experience.
             </p>
          </div>

          <div>
             <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">02</div>
               Challenges & Solutions
             </h3>
             <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2.5 flex-none" />
                  <p className="text-white/60 leading-relaxed">Handling complex data modeling and ensuring rapid response times from the database layer, resolved through optimized querying.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2.5 flex-none" />
                  <p className="text-white/60 leading-relaxed">Building an intuitive user interface that abstracts away the underlying technical complexity.</p>
                </li>
             </ul>
          </div>
        </div>

        <div className="space-y-8">
           <div className="glass-card p-8 rounded-[24px] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
             <h4 className="text-sm font-mono tracking-widest text-white uppercase mb-6">Technology Stack</h4>
             <div className="flex flex-wrap gap-2">
               {project.tech.map((t, idx) => (
                 <span key={idx} className="px-3 py-1.5 text-xs text-white/70 bg-white/5 border border-white/10 rounded-full">
                   {t}
                 </span>
               ))}
             </div>
           </div>

           <div className="glass-card p-8 rounded-[24px] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
             <h4 className="text-sm font-mono tracking-widest text-white uppercase mb-6">Links</h4>
             <div className="flex flex-col gap-4">
               <a href="#" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                 <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
                   <Github className="w-4 h-4" />
                 </div>
                 <span className="font-medium text-sm">Target Repository</span>
               </a>
               <a href="#" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                 <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                   <ExternalLink className="w-4 h-4" />
                 </div>
                 <span className="font-medium text-sm">Live Deployment</span>
               </a>
             </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
}
