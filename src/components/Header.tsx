import { motion } from "motion/react";
import Magnetic from "./Magnetic";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[1200px] rounded-full bg-black/40 backdrop-blur-3xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] flex justify-between items-center px-6 py-3.5 z-50 sm:px-8"
    >
      {/* Brand Title */}
      <Link 
        to="/"
        className="font-sans text-xl font-bold tracking-tight text-white cursor-pointer hover:text-white/80 transition-colors select-none"
      >
        Bharathi P.
      </Link>

      {/* Nav items */}
      <div className="hidden lg:flex gap-6">
        {[
          { label: "Home", path: "/" },
          { label: "About", path: "/about" },
          { label: "Projects", path: "/projects" },
          { label: "Certifications", path: "/certifications" },
          { label: "Resume", path: "/resume" }
        ].map((item, idx) => {
          const isActive = pathname === item.path || (item.path !== "/" && pathname.startsWith(item.path));
          return (
            <Link 
              key={idx}
              to={item.path}
              className={`font-mono text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 cursor-pointer ${isActive ? 'text-white' : 'text-white/50 hover:text-white'}`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      <Magnetic multiplier={0.25}>
        <button 
          onClick={() => {
            if (pathname === '/') {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            } else {
              navigate('/#contact');
            }
          }}
          className="bg-white text-black hover:bg-gray-200 active:scale-95 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full font-sans text-[11px] font-bold tracking-wide uppercase transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] cursor-pointer"
        >
          Let's Talk
        </button>
      </Magnetic>
    </motion.nav>
  );
}
