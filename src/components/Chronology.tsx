import { motion } from "motion/react";

export default function Chronology() {
  const experiences = [
    {
      period: "2023 — PRESENT",
      role: "Lead Technical Architect",
      company: "VANTAGE LABS",
      description: "Pioneering core UI infrastructure for next-generation data visualization tools. Leading a team of 12 across design and engineering silos.",
      isActive: true,
    },
    {
      period: "2020 — 2023",
      role: "Senior Product Engineer",
      company: "OXYGEN DESIGN",
      description: "Developed interactive brand experiences for Fortune 500 tech firms. Specialized in heavy WebGL implementations and high-fidelity motion graphics.",
      isActive: false,
    },
    {
      period: "2018 — 2020",
      role: "Frontend Developer",
      company: "STUDIO MONO",
      description: "Focused on crafting pixel-perfect, accessible web interfaces for award-winning digital campaigns.",
      isActive: false,
    },
  ];

  return (
    <section className="py-24 px-6 md:px-16 max-w-[1200px] mx-auto relative" id="chronology">
      <h2 className="font-serif text-5xl md:text-6xl font-normal italic text-[#1A1A1A] mb-16">
        Chronology
      </h2>

      <div className="space-y-0 relative pl-4 md:pl-8">
        {/* Continuous timeline vertical line with accent gradient */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[1px] bg-[#EEE]" />

        {experiences.map((exp, idx) => (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            key={idx}
            className="relative pl-10 pb-16 last:pb-0"
          >
            {/* Timeline Marker Point */}
            <div 
              className={`absolute left-[-5px] top-2.5 w-2.5 h-2.5 rounded-full z-10 transition-all duration-500 ${
                exp.isActive 
                  ? "bg-[#1A1A1A] ring-[6px] ring-black/5 scale-110" 
                  : "bg-white border border-black/20 group-hover:bg-[#1A1A1A]"
              }`} 
            />

            {/* Content box */}
            <div className="flex flex-col">
              <span className="font-sans text-[10px] font-bold text-[#A0A0A0] tracking-[0.15em] block mb-1.5 uppercase">
                {exp.period}
              </span>
              <h3 className="font-serif text-2xl font-normal text-[#1A1A1A] mb-1.5 leading-tight">
                {exp.role}
              </h3>
              <p className="font-mono text-xs text-[#555] font-medium uppercase tracking-[0.15em] block mb-4 border-b border-black/5 pb-1 w-fit">
                {exp.company}
              </p>
              <p className="text-[#555] text-[15px] leading-[1.7] max-w-2xl">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
