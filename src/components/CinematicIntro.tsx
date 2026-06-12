import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Typewriter from "typewriter-effect";

interface CinematicIntroProps {
  onComplete: () => void;
  isTransitioningOutExternal?: boolean;
}

export default function CinematicIntro({ onComplete, isTransitioningOutExternal }: CinematicIntroProps) {
  const [typedDone, setTypedDone] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(0); 

  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    let isTransitioning = false;

    const handleProgress = () => {
      if (isTransitioning) return;
      isTransitioning = true;
      
      setZoomLevel(2);
      
      // Delay mounting the main app until the zoom animation is mostly finished
      // This prevents React's heavy DOM mounting from lagging the animation frames
      setTimeout(() => {
          onComplete();
      }, 400);

      setTimeout(() => {
          document.body.style.overflow = "auto";
      }, 700);
    };

    const handleWheel = () => handleProgress();
    const handleClick = () => handleProgress();
    const handleTouch = () => handleProgress();

    window.addEventListener("wheel", handleWheel, { once: true });
    window.addEventListener("click", handleClick, { once: true });
    window.addEventListener("touchstart", handleTouch, { once: true });

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("touchstart", handleTouch);
    };
  }, [onComplete]);

  // Derived styling values for the cinematic zoom
  const scale = zoomLevel === 0 ? 1 : 25;
  const isTransitioningOut = zoomLevel >= 2 || isTransitioningOutExternal;

  return (
    <motion.div 
       animate={{ opacity: isTransitioningOut ? 0 : 1 }}
       transition={{ duration: 0.8, ease: "easeInOut" }}
       className="fixed inset-0 z-[100] bg-[#020308] flex items-center justify-center overflow-hidden pointer-events-none"
    >
      <div className="absolute inset-0 pointer-events-auto">
        {/* Luxury Studio Environment Background */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
          {/* Soft volumetric top light */}
          <div className="hidden md:block absolute top-[-20%] left-1/2 -translate-x-1/2 w-[100vw] h-[50vh] bg-blue-500/10 blur-[120px] rounded-full mix-blend-screen" />
          
          {/* Subtle purple ambient glow */}
          <div className="hidden md:block absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-purple-600/5 blur-[150px] rounded-full mix-blend-screen" />
        
        {/* Particles / Dust */}
        <motion.div 
           animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
           className="hidden md:block absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)] opacity-30" 
        />
      </div>

      {/* The Computer Display Container */}
      <motion.div
        animate={{ scale, opacity: isTransitioningOut ? 0 : 1, y: isTransitioningOut ? -50 : 0 }}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ 
            duration: isTransitioningOut ? 0.4 : 1, 
            ease: isTransitioningOut ? [0.6, 0.01, -0.05, 0.95] : [0.16, 1, 0.3, 1] 
        }}
        style={{ willChange: "transform, opacity" }}
        className="relative flex flex-col items-center z-10"
      >
        {/* The Monitor (Premium Aluminum Design) */}
        <div className="relative w-[90vw] md:w-[900px] aspect-[16/10] md:aspect-[16/9] rounded-[24px] md:rounded-[32px] p-[6px] md:p-[8px] flex flex-col overflow-hidden z-10
          bg-gradient-to-b from-[#e0e0e0] via-[#888] to-[#333]
          shadow-lg md:shadow-[0_20px_100px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.1)_inset]"
        >
          {/* Inner Black Bezel / Screen Area */}
          <div className="flex-1 w-full h-full bg-[#050505] rounded-[18px] md:rounded-[26px] relative flex flex-col overflow-hidden ring-1 ring-black shadow-inner md:shadow-[inset_0_0_40px_rgba(0,0,0,1)]">
            
            {/* Top Camera Array */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30">
               <div className="w-1.5 h-1.5 rounded-full bg-white/5" />
               <div className="w-2.5 h-2.5 rounded-full bg-[#000] ring-1 ring-white/10 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] flex items-center justify-center">
                 <div className="w-1 h-1 rounded-full bg-blue-900/40" />
               </div>
               <div className="w-1.5 h-1.5 rounded-full bg-green-500/80 shadow-[0_0_10px_#22c55e]" />
            </div>

            {/* Screen Content */}
            <div className="flex-1 w-full h-full relative flex flex-col items-center justify-center px-4 py-8 bg-[#020202]">
              
              {/* Futuristic Screen Background Elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                 <div className="hidden md:block absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] opacity-50" />
                 
                 {/* Moving background glow */}
                 <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                   className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(59,130,246,0.1)_360deg)] rounded-full blur-[60px]" 
                 />
              </div>

              {/* Text Container */}
              <div className="font-mono text-sm md:text-2xl text-white text-center w-full h-full flex flex-col items-center justify-center relative z-20">
                <div className="drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                  <Typewriter
                    options={{
                      delay: 20,
                      deleteSpeed: 10,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .pauseFor(100)
                        .typeString('<span style="color:#FFF; font-weight: 300;">Hello 👋</span>')
                        .pauseFor(200)
                        .deleteAll()
                        .typeString('<span style="color:#FFF; font-weight: 300;">Welcome to my digital space</span>')
                        .pauseFor(200)
                        .deleteAll()
                        .typeString("<span style='color:#FFF; font-weight: 600; text-shadow: 0 0 20px rgba(255,255,255,0.3); font-size: 1.25em;'>I'm Bharathi P.</span>")
                        .pauseFor(200)
                        .deleteAll()
                        .typeString('<span style="color:#A0A0A0; font-weight: 300;">Software Engineer</span>')
                        .pauseFor(150)
                        .callFunction(() => {
                          setTypedDone(true);
                        })
                        .start();
                    }}
                  />
                </div>
              </div>

              {/* Status helper text with premium styling */}
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  exit={{ opacity: 0 }}
                  className="absolute bottom-10 font-sans text-[10px] md:text-[11px] text-white/50 uppercase tracking-[0.3em] font-medium animate-pulse z-20 flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                  Scroll to Initialize
                  <span className="w-1 h-1 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                </motion.div>
              </AnimatePresence>

              {/* Advanced Screen Glare and reflections */}
              <div className="hidden md:block absolute top-0 right-0 w-[150%] h-[150%] bg-gradient-to-bl from-white/[0.08] via-transparent to-transparent pointer-events-none -translate-y-1/2 translate-x-1/4 rotate-45 z-30 mix-blend-overlay" />
              <div className="hidden md:block absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-blue-500/[0.02] to-transparent pointer-events-none z-30 mix-blend-screen" />
            </div>
            
          </div>
        </div>

        {/* Premium Aluminum Stand */}
        <motion.div 
          animate={{ opacity: isTransitioningOut ? 0 : 1, y: isTransitioningOut ? 20 : 0 }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col items-center -mt-6 z-0"
        >
          {/* Main vertical arm */}
          <div className="w-[80px] md:w-[120px] h-[100px] md:h-[140px] bg-gradient-to-b from-[#888] via-[#555] to-[#222] shadow-[inset_0_0_10px_rgba(0,0,0,0.5),0_30px_60px_rgba(0,0,0,0.8)] rounded-t-[4px] relative origin-top perspective-[1000px] [transform:rotateX(10deg)] z-10 border-x border-white/10" />
          
          {/* Base plate */}
          <div className="w-[200px] md:w-[280px] h-[10px] md:h-[14px] bg-gradient-to-r from-[#333] via-[#888] to-[#333] rounded-[4px] shadow-[0_15px_30px_rgba(0,0,0,0.9),inset_0_2px_4px_rgba(255,255,255,0.4)] relative -mt-4 z-20 border-t border-white/20" />
          
          {/* Accent light under the base */}
          <div className="w-[180px] md:w-[240px] h-[4px] bg-blue-500/20 blur-[10px] mt-1 relative z-0" />
        </motion.div>
      </motion.div>
      </div>
    </motion.div>
  );
}
