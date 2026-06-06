import React from "react";
import { MoveUp, Github, Linkedin, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#050505] border-t border-white/5 py-20 px-6 md:px-16 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-gradient-to-b from-blue-900/10 to-transparent blur-[100px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
        <div className="md:col-span-2 flex flex-col justify-between">
          <div>
            <div className="text-3xl font-bold tracking-tighter text-white mb-6 uppercase">
              Bharathi P.
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-8">
              A premium technical portfolio showcasing full-stack engineering, modern web applications, and robust backend systems.
            </p>
          </div>
          <p className="text-white/30 text-xs mt-auto">
            © {new Date().getFullYear()} Bharathi P. All rights reserved.
          </p>
        </div>

        <div>
          <h4 className="text-xs text-white/50 uppercase tracking-[0.2em] mb-6 font-mono">
            Navigation
          </h4>
          <ul className="space-y-4">
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Projects", path: "/projects" },
              { label: "Certifications", path: "/certifications" },
              { label: "Resume", path: "/resume" }
            ].map((link) => (
              <li key={link.label}>
                <Link 
                    to={link.path}
                    className="text-white/70 hover:text-white transition-colors duration-200 text-sm hover:translate-x-1 inline-block transform"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs text-white/50 uppercase tracking-[0.2em] mb-6 font-mono">
            Socials
          </h4>
          <ul className="space-y-4 text-white/70 text-sm">
            <li><a href="https://github.com/bharathip310" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors group"><Github className="w-4 h-4 group-hover:scale-110 transition-transform" /> GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/bharathi-p-762307363?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors group"><Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" /> LinkedIn</a></li>
            <li><a href="https://www.instagram.com/blackkingbharathi?igsh=cmcyZ2xjdDg5cTJv" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors group"><Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" /> Instagram</a></li>
            <li><a href="mailto:bharathip310@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors group"><Mail className="w-4 h-4 group-hover:scale-110 transition-transform" /> Email</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto w-full mt-20 flex justify-end relative z-10">
        <button
          onClick={scrollToTop}
          className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all focus:outline-none"
        >
          <MoveUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
}
