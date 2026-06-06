import React, { useRef, useState } from 'react';
import { motion } from "motion/react";
import Magnetic from "../components/Magnetic";
import { Download, Loader2 } from "lucide-react";

export default function ResumePage() {
  const resumeRef = useRef<HTMLDivElement>(null);
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

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        exit={{ opacity: 0, y: -20 }} 
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="pt-32 pb-32 px-6 md:px-16 max-w-[900px] mx-auto min-h-screen relative"
      >
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-0">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="h-[1px] w-12 bg-white/40" />
              <span className="text-xs font-mono tracking-[0.3em] text-white/50 uppercase block">
                Curriculum Vitae
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold tracking-tight text-white"
            >
              Resume.
            </motion.h1>
          </div>

          <Magnetic multiplier={0.2}>
            <button 
             onClick={handleDownload}
             disabled={isDownloading}
             className="h-14 px-8 rounded-full bg-white text-black font-semibold tracking-wide flex items-center gap-3 hover:bg-gray-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.3)] group cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isDownloading ? (
                <>Downloading... <Loader2 className="w-5 h-5 animate-spin" /></>
              ) : (
                <>Download PDF <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" /></>
              )}
            </button>
          </Magnetic>
        </div>

        <div ref={resumeRef} className="bg-[#111] border border-white/10 rounded-[32px] p-8 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
         <div className="mb-12 border-b border-white/10 pb-12">
            <h2 className="text-4xl font-bold text-white mb-2">BHARATHI P</h2>
            <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-4">Full Stack Developer</p>
            <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm mb-6 font-mono">
              <span>Cuddalore, TN</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>7010624085</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>bharathip310@gmail.com</span>
            </div>
            <p className="text-white/60 leading-relaxed max-w-3xl">
              Motivated and detail-oriented Full Stack Developer and third-year BE Computer Science student at Meenakshi Sundararajan Engineering College. Experienced in building end-to-end web applications using React, Node.js, Express, HTML, Python, and MongoDB. Completed an internship at Eagle Hi-Tech Softclou Pvt Ltd with hands-on exposure to real-world web development. Passionate about crafting scalable, user-friendly software solutions.
            </p>
         </div>

         <div className="space-y-16">
            <section>
              <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-4 uppercase tracking-[0.2em] font-mono text-xs">
                <span className="w-8 h-[1px] bg-white/20" /> Internship Experience
              </h3>
              <div className="space-y-10">
                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h4 className="text-xl font-medium text-white">Web Development Intern</h4>
                    <span className="text-white/40 font-mono text-sm mt-1 md:mt-0">Chennai, Tamil Nadu</span>
                  </div>
                  <p className="text-blue-400 text-sm tracking-wide mb-4">Eagle Hi-Tech Softclou Pvt Ltd <span className="text-white/30 ml-2">| Certificate of Internship — Successfully Completed</span></p>
                  <ul className="space-y-3 text-white/60 md:w-5/6">
                     <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 flex-none" /> Designed and developed responsive web pages using HTML, CSS, and JavaScript.</li>
                     <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 flex-none" /> Gained hands-on experience in full stack development using React.js for frontend and Node.js/Express for backend.</li>
                     <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 flex-none" /> Collaborated in a professional software development environment, applying real-time skills.</li>
                     <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 flex-none" /> Demonstrated strong commitment to learning, growth, and delivering quality work.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-4 uppercase tracking-[0.2em] font-mono text-xs">
                <span className="w-8 h-[1px] bg-white/20" /> Projects
              </h3>
              <div className="space-y-10">
                <div>
                  <h4 className="text-xl font-medium text-white mb-4">Smart Helmet Public Safety System</h4>
                  <ul className="space-y-3 text-white/60 md:w-5/6">
                     <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 flex-none" /> Integrated hardware and software to enhance rider safety through helmet detection, accident monitoring, and emergency alerts.</li>
                     <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-blue-400/50 mt-2 flex-none" /> <span className="text-white/80 font-medium">Technologies:</span> Python, IoT sensors, embedded systems.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-white mb-4">Heart Disease Prediction System</h4>
                  <ul className="space-y-3 text-white/60 md:w-5/6">
                     <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 flex-none" /> Built a machine learning model to analyze medical data and predict heart disease risk, supporting early diagnosis and preventive healthcare.</li>
                     <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-blue-400/50 mt-2 flex-none" /> <span className="text-white/80 font-medium">Technologies:</span> Python, scikit-learn, data analysis libraries.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-4 uppercase tracking-[0.2em] font-mono text-xs">
                <span className="w-8 h-[1px] bg-white/20" /> Education
              </h3>
              <div className="space-y-8">
                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
                    <h4 className="text-lg font-medium text-white">BE in Computer Science Engineering</h4>
                    <span className="text-white/40 font-mono text-sm mt-1 md:mt-0">2024 — Present</span>
                  </div>
                  <p className="text-white/50 text-sm tracking-wide">Meenakshi Sundararajan Engineering College, Chennai</p>
                </div>
                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
                    <h4 className="text-lg font-medium text-white">12th Standard (HSC) <span className="text-blue-400 ml-2">82%</span></h4>
                    <span className="text-white/40 font-mono text-sm mt-1 md:mt-0">2023 — 24</span>
                  </div>
                  <p className="text-white/50 text-sm tracking-wide">St. Andrews Matric HR Sec School, Thirumanthurai</p>
                </div>
                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
                    <h4 className="text-lg font-medium text-white">10th Standard (SSLC) <span className="text-blue-400 ml-2">75%</span></h4>
                    <span className="text-white/40 font-mono text-sm mt-1 md:mt-0">2021 — 22</span>
                  </div>
                  <p className="text-white/50 text-sm tracking-wide">St. Andrews Matric HR Sec School, Thirumanthurai</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-4 uppercase tracking-[0.2em] font-mono text-xs">
                <span className="w-8 h-[1px] bg-white/20" /> Technical Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/60">
                 <div>
                    <span className="text-white block font-medium mb-3 border-b border-white/10 pb-2">Frontend</span>
                    <ul className="space-y-2 text-sm text-white/50">
                       <li>HTML5</li>
                       <li>CSS3</li>
                       <li>JavaScript</li>
                       <li>React.js</li>
                    </ul>
                 </div>
                 <div>
                    <span className="text-white block font-medium mb-3 border-b border-white/10 pb-2">Backend & Database</span>
                    <ul className="space-y-2 text-sm text-white/50">
                       <li>Node.js</li>
                       <li>Express.js</li>
                       <li>Python</li>
                       <li>MongoDB</li>
                    </ul>
                 </div>
                 <div className="md:col-span-2">
                    <span className="text-white block font-medium mb-3 border-b border-white/10 pb-2">Tools & Others</span>
                    <ul className="flex flex-wrap gap-3 text-sm text-white/50">
                       <li className="px-3 py-1 bg-white/5 rounded-full border border-white/10">Git</li>
                       <li className="px-3 py-1 bg-white/5 rounded-full border border-white/10">VS Code</li>
                       <li className="px-3 py-1 bg-white/5 rounded-full border border-white/10">Typewriting (Fast & Accurate)</li>
                    </ul>
                 </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-4 uppercase tracking-[0.2em] font-mono text-xs">
                <span className="w-8 h-[1px] bg-white/20" /> Hackathons & Competitions
              </h3>
              <div className="space-y-4">
                 <div className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 flex-none" /> 
                    <div>
                      <span className="text-white font-medium block mb-1">Smart India Hackathon</span>
                      <p className="text-white/50 text-sm">Participated in India's largest open innovation hackathon.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 flex-none" /> 
                    <div>
                      <span className="text-white font-medium block mb-1">GUVI HCL</span>
                      <p className="text-white/50 text-sm">Completed technical challenge/competition organized by GUVI.</p>
                    </div>
                 </div>
              </div>
            </section>
          </div>
        </div>
      </motion.div>
    </>
  );
}
