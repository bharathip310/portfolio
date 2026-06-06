import React from 'react';
import { motion } from 'motion/react';
import { Layers, Terminal, Smartphone, Palette, Quote } from 'lucide-react';

const services = [
  {
    title: "Python Development",
    desc: "Building robust backend systems, automation scripts, and management tools.",
    icon: <Terminal className="w-6 h-6" />
  },
  {
    title: "Web Development",
    desc: "Creating responsive, scalable, and highly performant full-stack applications.",
    icon: <Layers className="w-6 h-6" />
  },
  {
    title: "UI/UX Design",
    desc: "Designing intuitive interfaces focusing on accessibility and seamless user flows.",
    icon: <Palette className="w-6 h-6" />
  },
  {
    title: "Frontend Development",
    desc: "Crafting beautiful, interactive client-side experiences with React and Next.js.",
    icon: <Smartphone className="w-6 h-6" />
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-16 max-w-[1200px] mx-auto relative">
      <div className="mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono tracking-[0.2em] text-white/40 uppercase mb-4 block"
        >
          // Capabilities
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-white"
        >
          Services
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="glass-card p-10 bento-item group"
          >
            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-white/80 group-hover:text-white group-hover:bg-white/10 transition-colors">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight mb-4">{service.title}</h3>
            <p className="text-white/60 leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const stack = ["Python", "React", "TypeScript", "Next.js", "MySQL", "Git", "Node.js", "Tailwind CSS", "MongoDB", "PostgreSQL", "Flask", "GraphQL", "Figma", "Docker", "AWS"];

export function TechStack() {
  return (
    <section className="py-20 md:py-32 border-y border-white/5 relative overflow-hidden bg-[#0a0a0a]">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-32 bg-blue-500/10 blur-[100px] pointer-events-none rounded-[100%]" />
      
      <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      
      <div className="flex w-full overflow-hidden">
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          className="flex whitespace-nowrap items-center w-max"
        >
          {/* Double the array for seamless endless loop */}
          {[...stack, ...stack, ...stack, ...stack].map((tech, idx) => (
            <div key={idx} className="flex items-center gap-6 px-6 group cursor-default">
              <span className="w-2 h-2 rounded-full bg-white/10 group-hover:bg-blue-400 group-hover:shadow-[0_0_10px_rgba(96,165,250,0.8)] transition-all duration-300" />
              <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-white/10 uppercase tracking-tighter group-hover:text-white transition-all duration-300 hover:scale-105">
                {tech}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-16 max-w-[1200px] mx-auto relative">
      <div className="mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono tracking-[0.2em] text-white/40 uppercase mb-4 block"
        >
          // Feedback
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-white"
        >
          Testimonials
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { text: "Bharathi consistently delivered high-quality code. The systems built were robust, well-documented, and scalable.", author: "Senior Architect", role: "Tech Corp" },
          { text: "An exceptional problem solver. The ability to seamlessly transition from complex Python backend logic to intuitive React frontends is outstanding.", author: "Product Manager", role: "Startup Inc" }
        ].map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 bento-item"
          >
            <Quote className="w-10 h-10 text-white/20 mb-6" />
            <p className="text-xl text-white/80 leading-relaxed mb-8 font-serif italic">
              "{t.text}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10" />
              <div>
                <h4 className="text-white font-bold">{t.author}</h4>
                <span className="text-white/50 text-sm">{t.role}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
