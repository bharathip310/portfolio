import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, Sparkles, X, Activity, Server, Cpu, Command } from "lucide-react";

export default function Artifacts() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const artifacts = [
    {
      id: "neo-stratos",
      title: "NEO-STRATOS V2",
      description: "A global infrastructure monitoring system with real-time 3D spatial mapping.",
      category: ["WEBGL", "ARCHITECTURE"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwo_1Pb-N2Cls-bWCpclF7pK6J1pO6gvuF3gMs7bLDKBOhbxL_RLBw4pAbB5WZ2lLeLZPx5k6h_z5E7TJSil-HB4bI0mLOUTqRPAkLq0bhVFy1YpF9Z4e0_o0dIUqynHfjJHmXUlD5WAgHFEFVvKrNu_o_EwF2cIUXId6clWNo6YvyZqsKCiby0v2TXtphECvG_YZcDXGVFjdT59OlFRKW6532ySfPbT2OZrIDsk6I9nmNHwAfKbQ6lXalkn_naZQhw0Kx7Xdwm8jg",
      spanClass: "md:col-span-8 md:row-span-2 min-h-[300px] md:min-h-[520px]",
      details: {
        architecture: "Distributed Server Nodes (14 locations worldwide)",
        throughput: "4.8M metrics/sec under peak stress load",
        stack: "Rust backend engine, WebGL customized pipeline, Three.js orchestration layer",
        purpose: "This system executes real-time health telemetry across the entire virtual cloud framework, displaying nodes and connectivity streams inside static and dynamic spatial models."
      }
    },
    {
      id: "kinetic-fluidity",
      title: "KINETIC FLUIDITY",
      description: "Generative identity system for a luxury tech brand.",
      category: ["GENERATIVE", "luxury"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnGQZzGnOr9t9B-FkxsFq5AYcW1GwiPAEjx6Q1_t_4H3xMgui2HjW8k584a6JNWOntmzewPPOLM3xUFE-lymd1E-Tf2XIeFxiOy_iq33DWNxaSVcLPop9O5pc3GkTQHrPxWfzRaWCqrnDkypP2FSXazzsIcqlSf7fF8sGE4GL-1aV51vPcWfxvYWk0JYgwPFLSo0F-k_klW0_E84rm-jC8V0d3OLEOp39KrqN09FQRQPvjH784l_Q8hV4wOrwQun86BO-qHWi9aXHQ",
      spanClass: "md:col-span-4 md:row-span-3 min-h-[400px] md:min-h-[792px]",
      details: {
        architecture: "Real-time HTML5 generative renderer engine",
        throughput: "Mathematical vector field calculations operating at 60 FPS natively",
        stack: "Canvas rendering, simplex/perlin noise math, reactive cursor state matrices",
        purpose: "A high-end visual layout expressing digital current and fluidity. Shaders react dynamically to cursor proximity, creating organic, structural refractors resembling fine crystal."
      }
    },
    {
      id: "synthesis-os",
      title: "SYNTHESIS OS",
      description: "A minimalist operating system concept designed for focused deep-work.",
      category: ["SYSTEM DESIGN", "MINIMALIST"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdc2f-bCgiXjrGTB_83Wy9YePnyGdzAIsq-55IOaTZi3UL8d0Z06S-LPYJpvlqY56L2uOUbt4iy8Kb4If3MiZZTlK8BKgyzDCpersOG9bzIIZT33t1AIl5O8apLMQWeKAGLKI-YjTUpLtubxgswUIo74-QFw6szMJECX_7-Vsw-NLo7W45znkMst00QGxgV1N_EwKJe9NyerQSUEhA5pqM8lGJkRBAipjZ9gtZQkseOg5PAJjlqyWaDWv1ODvHQfi2eBou0RB9ngHL",
      spanClass: "md:col-span-8 md:row-span-1 min-h-[220px] md:min-h-[248px]",
      details: {
        architecture: "Hyperfluid virtualized system model on a unified sandboxed frame",
        throughput: "Extremely low-overhead, sub-5ms input registration speeds",
        stack: "Custom system architecture, React modular layers, integrated CSS-grid desktop widgets",
        purpose: "A productivity desktop wrapper focusing strictly on structural work. Strips out all notifications, alerts, and digital feedback noise to support uninterrupted deep coding output blocks."
      }
    },
    {
      id: "cli-toolkit",
      title: "CLI TOOLKIT",
      description: "Open source developer productivity suite.",
      category: ["NODE.JS", "SYSTEM UTILITY"],
      icon: "terminal",
      spanClass: "md:col-span-4 md:row-span-1 min-h-[220px] md:min-h-[248px]",
      details: {
        architecture: "Universal shell interface packaged as an immediate run executable",
        throughput: "Zero-dependency binary executing instantly in less than 30ms on modern platforms",
        stack: "TypeScript runtime architecture, native node stream controllers",
        purpose: "A command-line terminal workspace companion that bootstraps modular development pipelines, configures remote templates, and deploys builds automatically in one prompt code block."
      }
    },
    {
      id: "lumina-ai",
      title: "LUMINA AI",
      description: "LLM visualization and prompting engine.",
      category: ["AI MODEL", "VISUALIZATION"],
      icon: "sparkles",
      spanClass: "md:col-span-4 md:row-span-1 min-h-[220px] md:min-h-[248px]",
      details: {
        architecture: "Real-time client-only token attention visualization mapping",
        throughput: "Calculates mathematical weight highlights for up to 4,000 tokens on-the-fly",
        stack: "React, custom WebGL nodes network, state-driven attention matrices",
        purpose: "Provides structural, human-readable insight into generative language models. Visualizes state transitions, vector weights, and attention relationships that standard chat windows hide."
      }
    }
  ];

  const currentArtifact = artifacts.find(a => a.id === selectedId);

  return (
    <section className="py-24 px-6 md:px-16 max-w-[1200px] mx-auto" id="work">
      {/* Header and Subtext */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16">
        <h2 className="font-serif text-5xl md:text-6xl font-normal italic text-[#1A1A1A] mb-4 md:mb-0 leading-[1.1]">
          Selected
          <br />
          Artifacts
        </h2>
        <p className="text-[#555] max-w-xs font-sans text-[15px] leading-[1.7]">
          A curated collection of digital systems engineered for impact and scale. Click any card to explore tech specifications.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {artifacts.map((a) => {
          const isIconTerminal = a.icon === "terminal";
          const isIconSparkles = a.icon === "sparkles";

          return (
            <div
              key={a.id}
              onClick={() => setSelectedId(a.id)}
              className={`${a.spanClass} rounded-[2px] glass-card overflow-hidden group bento-item cursor-pointer relative flex flex-col justify-end p-8 md:p-10 select-none`}
            >
              {/* Background Images for visual items */}
              {a.image && (
                <>
                  <img
                    alt={a.title}
                    src={a.image}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-[1.03] transition-all duration-700 pointer-events-none"
                  />
                  {/* Backdrop Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
                </>
              )}

              {/* Tag / category identifier inside card */}
              {a.id === "synthesis-os" && (
                <div className="absolute top-8 right-8 w-20 h-20 rounded-[2px] border border-black/10 rotate-12 group-hover:rotate-0 transition-transform duration-500 overflow-hidden hidden md:block select-none pointer-events-none">
                  <img
                    alt="Synthesis Detail"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdc2f-bCgiXjrGTB_83Wy9YePnyGdzAIsq-55IOaTZi3UL8d0Z06S-LPYJpvlqY56L2uOUbt4iy8Kb4If3MiZZTlK8BKgyzDCpersOG9bzIIZT33t1AIl5O8apLMQWeKAGLKI-YjTUpLtubxgswUIo74-QFw6szMJECX_7-Vsw-NLo7W45znkMst00QGxgV1N_EwKJe9NyerQSUEhA5pqM8lGJkRBAipjZ9gtZQkseOg5PAJjlqyWaDWv1ODvHQfi2eBou0RB9ngHL"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Card Meta Content Info */}
              <div className="relative z-10 w-full">
                {/* Icons details */}
                {isIconTerminal && (
                  <div className="w-12 h-12 rounded-[2px] bg-black/5 border border-black/10 flex items-center justify-center mb-6 text-[#1A1A1A] group-hover:scale-110 transition-transform">
                    <Terminal className="w-5 h-5" />
                  </div>
                )}
                {isIconSparkles && (
                  <div className="w-12 h-12 rounded-[2px] bg-black/5 border border-black/10 flex items-center justify-center mb-6 text-[#1A1A1A] group-hover:scale-110 transition-transform">
                    <Sparkles className="w-5 h-5" />
                  </div>
                )}

                {/* Sub-Badges / Categorizations */}
                {a.category && a.id !== "cli-toolkit" && a.id !== "lumina-ai" && (
                  <div className="flex flex-wrap gap-2 mb-4 pointer-events-none">
                    {a.category.map((cat, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white rounded-[2px] text-[10px] font-sans font-bold text-[#A0A0A0] border border-black/5 tracking-[0.15em] uppercase"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                )}

                {/* Headline & Paragraph */}
                <h3 className="font-serif text-2xl md:text-3xl font-normal text-[#1A1A1A] mb-2 leading-[1.1] transition-colors">
                  {a.title}
                </h3>
                <p className="text-[#555] text-sm md:text-[15px] max-w-md leading-[1.7]">
                  {a.description}
                </p>

                {/* Tech specifications click invitation */}
                <span className="inline-block mt-4 text-[10px] font-sans font-bold tracking-[0.15em] text-[#1A1A1A] opacity-0 group-hover:opacity-100 transition-opacity uppercase border-b border-[#1A1A1A] pb-0.5">
                  Details // SPECIFY PROTOCOL
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Slide-over interactive specification details modal */}
      <AnimatePresence>
        {selectedId && currentArtifact && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#F8F7F3]/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="w-full max-w-2xl bg-white border border-black/10 rounded-[2px] p-8 md:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.05)] text-left relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >

              {/* Close button */}
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-[2px] bg-white hover:bg-black/5 border border-black/10 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4 text-[#1A1A1A]" />
              </button>

              <div className="relative z-10">
                <span className="font-sans text-[10px] text-[#A0A0A0] font-bold block uppercase tracking-[0.15em] mb-2">
                  SPECIFICATION ARCHIVE
                </span>
                <h3 className="font-serif text-3xl md:text-4xl italic text-[#1A1A1A] mb-6 leading-[1.1]">
                  {currentArtifact.title}
                </h3>

                <div className="space-y-6 md:space-y-8">
                  {/* Purpose content */}
                  <div>
                    <h4 className="font-sans text-[11px] font-bold text-[#1A1A1A] uppercase tracking-[0.15em] mb-2 flex items-center gap-2">
                      <Command className="w-3.5 h-3.5" /> Core Thesis
                    </h4>
                    <p className="text-[#555] font-sans text-base leading-[1.7]">
                      {currentArtifact.details.purpose}
                    </p>
                  </div>

                  {/* Divider line */}
                  <div className="h-[1px] bg-black/10 w-full" />

                  {/* Grid parameters */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h5 className="font-sans text-[10px] text-[#A0A0A0] font-bold uppercase tracking-[0.15em] mb-1.5 flex items-center gap-1.5">
                        <Server className="w-3 h-3" /> ARCHITECTURE
                      </h5>
                      <p className="text-[#1A1A1A] font-mono text-[13px] leading-relaxed">
                        {currentArtifact.details.architecture}
                      </p>
                    </div>
                    <div>
                      <h5 className="font-sans text-[10px] text-[#A0A0A0] font-bold uppercase tracking-[0.15em] mb-1.5 flex items-center gap-1.5">
                        <Activity className="w-3 h-3" /> METRICS CAP
                      </h5>
                      <p className="text-[#1A1A1A] font-mono text-[13px] leading-relaxed">
                        {currentArtifact.details.throughput}
                      </p>
                    </div>
                    <div>
                      <h5 className="font-sans text-[10px] text-[#A0A0A0] font-bold uppercase tracking-[0.15em] mb-1.5 flex items-center gap-1.5">
                        <Cpu className="w-3 h-3" /> ENGINE STACK
                      </h5>
                      <p className="text-[#1A1A1A] font-mono text-[13px] leading-relaxed">
                        {currentArtifact.details.stack}
                      </p>
                    </div>
                  </div>

                  {/* Close dialog prompt */}
                  <div className="pt-4 flex justify-end">
                    <button
                      onClick={() => setSelectedId(null)}
                      className="bg-[#1A1A1A] hover:bg-[#333] px-6 py-2.5 rounded-[2px] font-sans text-xs font-bold text-white transition-colors cursor-pointer tracking-wide"
                    >
                      Acknowledge Specification
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
