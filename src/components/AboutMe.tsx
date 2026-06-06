import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Target, Compass, Award, Code, Terminal, Zap } from 'lucide-react';

const AnimatedCounter = ({ value, duration = 2 }: { value: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const totalMiliseconds = duration * 1000;
      const incrementTime = (totalMiliseconds / end) * 1.5;
      
      const timer = setInterval(() => {
        start += Math.ceil(end / (totalMiliseconds / 50));
        if (start > end) start = end;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, 50);
      return () => clearInterval(timer);
    }
  }, [inView, value, duration]);

  return <span ref={nodeRef}>{count}</span>;
}

export default function AboutMe() {
  return (
    <section id="about" className="py-32 px-6 md:px-16 max-w-[1200px] mx-auto relative">
      <div className="mb-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-[1px] w-12 bg-white/40" />
          <span className="text-xs font-mono tracking-[0.3em] text-white/50 uppercase block">
            Identity & Evolution
          </span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold tracking-tight text-white"
        >
          Behind the Code.
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative">
        {/* Profile Spotlight */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-4 flex flex-col space-y-6 relative"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 relative group shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
            <img 
              src="/profile.png" 
              alt="Bharathi P" 
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-in-out bg-[#111]"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <h3 className="text-2xl font-bold text-white mb-1">Bharathi P.</h3>
              <p className="text-white/60 font-mono text-xs uppercase tracking-widest">Full-Stack Engineer</p>
            </div>
          </div>
          
          <div className="glass-card p-6 flex flex-col items-start gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
            <div className="flex items-center gap-3 w-full">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Target className="text-blue-400 w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-white">Current Focus</h4>
                <p className="text-xs text-white/50">Scalable Backend Systems</p>
              </div>
            </div>
            <div className="h-[1px] w-full bg-white/5" />
            <div className="flex items-center gap-3 w-full">
              <div className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                <Zap className="text-purple-400 w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-white">Core Strength</h4>
                <p className="text-xs text-white/50">Python & React Architecture</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Narrative & Timeline */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-8 flex flex-col justify-between"
        >
          <div className="glass-card p-8 md:p-12 mb-6 h-full flex flex-col justify-center relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[100px] pointer-events-none rounded-full" />
            <h3 className="text-2xl font-semibold text-white mb-6">The Journey</h3>
            
            <div className="space-y-6 text-white/70 text-lg leading-relaxed relative z-10">
              <p>
                My journey began with a fundamental curiosity: <span className="text-white">how do complex digital systems operate behind the glass?</span> This question drove me to dive into computer science and web engineering.
              </p>
              <p>
                As a third-year BE Computer Science student at Meenakshi Sundararajan Engineering College, I build elegant and performant web applications. My focus lies in bridging the gap between <strong className="text-white font-medium">robust backend architectures (Node.js/Python)</strong> and <strong className="text-white font-medium">seamless user interfaces (React/Next.js)</strong>.
              </p>
              <p>
                I thrive in environments that challenge me to translate intricate problems into intuitive experiences. Following my internship at Eagle Hi-Tech Softclou, I'm passionate about crafting scalable, user-friendly solutions that make an impact.
              </p>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "HSC Score", value: 82, suffix: "%", icon: <Award className="w-4 h-4" /> },
              { label: "SSLC Score", value: 75, suffix: "%", icon: <Award className="w-4 h-4" /> },
              { label: "Internships", value: 1, suffix: "", icon: <Zap className="w-4 h-4" /> },
              { label: "Hackathons", value: 2, suffix: "", icon: <Terminal className="w-4 h-4" /> }
            ].map((stat, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                key={idx} 
                className="glass-card p-6 flex flex-col items-center text-center justify-center relative overflow-hidden group hover:bg-white/[0.04] transition-colors shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
               >
                <div className="text-white/20 mb-3 group-hover:text-white/50 transition-colors">{stat.icon}</div>
                <div className="text-4xl font-bold tracking-tighter text-white mb-1 flex items-baseline">
                  <AnimatedCounter value={stat.value} />
                  <span className="text-blue-400 text-2xl ml-0.5">{stat.suffix}</span>
                </div>
                <span className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-mono">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
