import { motion } from "motion/react";

export default function Capabilities() {
  const engineeringSkills = [
    "React/Next.js",
    "Three.js",
    "WebGL/GLSL",
    "TypeScript",
    "Python",
    "Rust",
  ];

  const designSkills = [
    "Creative Direction",
    "Design Systems",
    "Motion Design",
    "Editorial Layout",
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="py-24 px-6 md:px-16 max-w-[1200px] mx-auto" id="expertise">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left Side: Title & Description */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center"
        >
          <span className="font-sans text-[10px] font-bold text-[#A0A0A0] tracking-[0.15em] block uppercase mb-4">
            core competence
          </span>
          <h2 className="font-serif text-5xl md:text-6xl italic text-[#1A1A1A] mb-8 leading-[1.1]">
            Systemic
            <br />
            Capabilities
          </h2>
          <p className="text-[#555] text-[15px] leading-[1.7] max-w-md">
            My process bridges the gap between creative vision and technical execution, ensuring every interaction feels deliberate and every system performs at scale.
          </p>
        </motion.div>

        {/* Right Side: Skills Taxonomy */}
        <div className="space-y-12">
          {/* Engineering Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="font-sans text-[11px] font-bold text-[#1A1A1A] uppercase mb-6 tracking-[0.15em]">
              // ENGINEERING
            </h4>
            <div className="flex flex-wrap gap-3">
              {engineeringSkills.map((skill, index) => (
                <motion.span
                  variants={itemVariants}
                  key={index}
                  className="px-5 py-2.5 bg-[#FFF] text-[#1A1A1A] rounded-[2px] font-mono text-[13px] border border-black/10 hover:border-[#1A1A1A] transition-all cursor-default select-none shadow-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Design Narrative Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <h4 className="font-sans text-[11px] font-bold text-[#1A1A1A] uppercase mb-6 tracking-[0.15em]">
              // DESIGN NARRATIVE
            </h4>
            <div className="flex flex-wrap gap-3">
              {designSkills.map((skill, index) => (
                <motion.span
                  variants={itemVariants}
                  key={index}
                  className="px-5 py-2.5 bg-[#FFF] text-[#1A1A1A] rounded-[2px] font-mono text-[13px] border border-black/10 hover:border-[#1A1A1A] transition-all cursor-default select-none shadow-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
