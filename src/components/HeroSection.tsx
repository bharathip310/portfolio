import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Download, Loader2 } from "lucide-react";
import Typewriter from "typewriter-effect";
import Magnetic from "./Magnetic";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Create an invisible anchor tag to trigger the browser download
    const link = document.createElement('a');
    link.href = '/api/download-resume';
    link.download = 'Bharathi_P_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setTimeout(() => {
      setIsDownloading(false);
    }, 1500);
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Particle background for Hero
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);
    let particles: {x: number, y: number, r: number, dx: number, dy: number}[] = [];
    
    for (let i = 0; i < 60; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            r: Math.random() * 1.5 + 0.5,
            dx: (Math.random() - 0.5) * 0.5,
            dy: (Math.random() - 0.5) * 0.5
        });
    }

    let rafId: number;
    const animate = () => {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.x += p.dx;
            p.y += p.dy;
            if (p.x < 0 || p.x > width) p.dx *= -1;
            if (p.y < 0 || p.y > height) p.dy *= -1;
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
            ctx.fill();
        });
        rafId = requestAnimationFrame(animate);
    }
    animate();

    const handleResize = () => {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
        cancelAnimationFrame(rafId);
        window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section ref={containerRef} id="hero" className="relative min-h-[100svh] flex items-center justify-center pt-24 px-6 overflow-hidden">
      <motion.div style={{ y: yBg }} className="absolute inset-0 w-full h-full">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-60" />
        {/* Layered decorative subtle glows */}
        <div className="absolute top-[10%] left-[10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-[0%] right-[5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      </motion.div>

      <motion.div style={{ y, opacity }} className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-10 inline-flex items-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
        >
          <span className="relative flex h-2.5 w-2.5">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="text-xs font-mono text-white/80 tracking-widest uppercase">Available for new opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-6 leading-[1.05]"
        >
          Bharathi P.
        </motion.h1>
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-4xl font-medium tracking-tight text-white/70 mb-12 h-[48px] flex items-center justify-center font-serif italic"
        >
            <Typewriter 
                options={{
                    strings: ['Backend Architect', 'Frontend Engineer', 'UI/UX Enthusiast', 'Problem Solver'],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                }}
            />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-6 mt-4"
        >
          <Magnetic multiplier={0.2}>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: "smooth" })}
              className="h-14 px-10 rounded-full bg-white text-black font-semibold tracking-wide flex items-center gap-2 hover:bg-gray-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.3)] group"
            >
              Explore Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Magnetic>

          <Magnetic multiplier={0.2}>
            <button 
              onClick={handleDownload}
              disabled={isDownloading}
              className="h-14 px-10 rounded-full bg-white/5 text-white font-semibold tracking-wide border border-white/20 flex items-center gap-3 hover:bg-white/10 backdrop-blur-md transition-colors group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isDownloading ? (
                <>Downloading... <Loader2 className="w-5 h-5 animate-spin" /></>
              ) : (
                <>Download Resume <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" /></>
              )}
            </button>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/30">Scroll</span>
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
