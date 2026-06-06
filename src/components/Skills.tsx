import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Layout, Server, Database, Wrench, Code2, Globe, Cpu, Network, PenTool } from 'lucide-react';

const SpotlightCard = ({ children, className, glowColor }: { children: React.ReactNode, className?: string, glowColor: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-[32px] border border-white/10 bg-[#0a0a0a] overflow-hidden group shadow-[0_20px_40px_rgba(0,0,0,0.4)] ${className}`}
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 40%)`,
        }}
      />
      
      {/* Background Graphic Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_10%,transparent_100%)] opacity-30 pointer-events-none" />
      
      <div className="relative z-10 w-full h-full p-8 md:p-10 flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
};

const skillCategories = [
  {
    title: "Programming",
    desc: "The core syntax and logic that powers my applications. Emphasizing clean, scalable code.",
    icon: <Terminal className="w-6 h-6 text-blue-400" />,
    bgIcon: <Code2 className="w-full h-full text-blue-500" />,
    color: "from-blue-500/20 to-blue-500/0",
    glowColor: "rgba(59,130,246,0.15)",
    skills: ["Python", "JavaScript", "TypeScript"],
    className: "lg:col-span-2 lg:row-span-1"
  },
  {
    title: "Frontend",
    desc: "Crafting beautiful, pixel-perfect user interfaces with modern web standards.",
    icon: <Layout className="w-6 h-6 text-purple-400" />,
    bgIcon: <Globe className="w-full h-full text-purple-500" />,
    color: "from-purple-500/20 to-purple-500/0",
    glowColor: "rgba(168,85,247,0.15)",
    skills: ["HTML", "CSS", "Tailwind CSS", "React", "Next.js"],
    className: "lg:col-span-1 lg:row-span-1"
  },
  {
    title: "Backend",
    desc: "Building highly scalable and secure backend architectures.",
    icon: <Server className="w-6 h-6 text-green-400" />,
    bgIcon: <Cpu className="w-full h-full text-green-500" />,
    color: "from-green-500/20 to-green-500/0",
    glowColor: "rgba(74,222,128,0.15)",
    skills: ["Node.js", "Express.js", "Flask", "Appwrite"],
    className: "lg:col-span-1 lg:row-span-1"
  },
  {
    title: "Database",
    desc: "Designing robust schemas and managing data flow.",
    icon: <Database className="w-6 h-6 text-yellow-400" />,
    bgIcon: <Network className="w-full h-full text-yellow-500" />,
    color: "from-yellow-500/20 to-yellow-500/0",
    glowColor: "rgba(250,204,21,0.15)",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Supabase"],
    className: "lg:col-span-1 lg:row-span-1"
  },
  {
    title: "Tools & Ecosystem",
    desc: "The essential instruments I use daily to orchestrate and deploy software.",
    icon: <Wrench className="w-6 h-6 text-pink-400" />,
    bgIcon: <PenTool className="w-full h-full text-pink-500" />,
    color: "from-pink-500/20 to-pink-500/0",
    glowColor: "rgba(244,114,182,0.15)",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Docker", "Postman"],
    className: "lg:col-span-1 lg:row-span-1"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 md:px-16 max-w-[1200px] mx-auto relative z-10">
      <div className="mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-[1px] w-12 bg-white/40" />
          <span className="text-xs font-mono tracking-[0.3em] text-white/50 uppercase block">
            Capabilities
          </span>
        </motion.div>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-0">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
            >
              Technical Arsenal.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/60 text-lg md:text-xl font-light leading-relaxed"
            >
              A comprehensive toolkit mastered over relentless practice. I leverage these technologies to build robust, scalable, and premium digital experiences.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`flex ${category.className}`}
          >
            <SpotlightCard glowColor={category.glowColor} className="w-full flex-1">
               {/* Large Background Icon */}
               <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-700 pointer-events-none">
                 <div className="w-40 h-40 scale-[1.5] transform -rotate-12 translate-x-4 -translate-y-4 group-hover:scale-[1.8] group-hover:rotate-0 transition-transform duration-700 ease-out flex items-center justify-center">
                    {category.bgIcon}
                 </div>
               </div>
               
               <div>
                 <div className={`w-16 h-16 rounded-[20px] bg-gradient-to-br ${category.color} border border-white/10 flex items-center justify-center mb-8 shadow-[0_4px_20px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform duration-500 ease-out`}>
                   {category.icon}
                 </div>
                 <h3 className="text-3xl font-bold text-white tracking-tight mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-300">
                   {category.title}
                 </h3>
                 <p className="text-white/50 text-base leading-relaxed mb-10 max-w-[90%] md:max-w-full">
                   {category.desc}
                 </p>
               </div>
               
               <div className="flex flex-wrap gap-2 mt-auto">
                 {category.skills.map((skill, sIdx) => (
                   <span 
                     key={sIdx}
                     className="px-4 py-2 bg-white/[0.03] border border-white/10 rounded-full text-xs font-mono text-white/70 hover:bg-white/10 hover:text-white hover:border-white/20 hover:-translate-y-0.5 transition-all duration-300 cursor-default shadow-[0_2px_10px_rgba(0,0,0,0.1)] relative overflow-hidden group/btn"
                   >
                     {skill}
                   </span>
                 ))}
               </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
