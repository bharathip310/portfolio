import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, X } from 'lucide-react';

const certificates = [
  {
    id: "cert-1",
    title: "Node.js Backend Development",
    issuer: "Udemy",
    date: "2026",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "cert-2",
    title: "Full Stack Development",
    issuer: "Meta",
    date: "2026",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "cert-3",
    title: "Advanced React Patterns",
    issuer: "Frontend Masters",
    date: "2026",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Certificates() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section id="certificates" className="py-32 px-6 md:px-16 max-w-[1200px] mx-auto relative z-10">
      <div className="mb-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-[1px] w-12 bg-white/40" />
          <span className="text-xs font-mono tracking-[0.3em] text-white/50 uppercase block">
            Accolades
          </span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold tracking-tight text-white"
        >
          Certificates.
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {certificates.map((cert, idx) => (
          <motion.div
            layoutId={`card-container-${cert.id}`}
            key={cert.id}
            onClick={() => setSelectedId(cert.id)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="group relative cursor-pointer outline-none"
          >
            <div className="aspect-[4/3] rounded-[24px] overflow-hidden bg-[#111] border border-white/10 relative">
              <motion.img 
                layoutId={`card-image-${cert.id}`}
                src={cert.image} 
                alt={cert.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <motion.div layoutId={`card-icon-${cert.id}`} className="mb-3 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white group-hover:bg-white group-hover:text-black transition-colors">
                  <Award className="w-5 h-5" />
                </motion.div>
                <motion.h3 layoutId={`card-title-${cert.id}`} className="text-xl font-bold text-white mb-1 group-hover:text-blue-200 transition-colors">
                  {cert.title}
                </motion.h3>
                <div className="flex justify-between items-center text-sm font-mono tracking-wider">
                  <motion.span layoutId={`card-issuer-${cert.id}`} className="text-white/60">{cert.issuer}</motion.span>
                  <motion.span layoutId={`card-date-${cert.id}`} className="text-white/40">{cert.date}</motion.span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 bg-black/80 backdrop-blur-xl"
            onClick={() => setSelectedId(null)}
          >
            {certificates.filter(c => c.id === selectedId).map(cert => (
              <motion.div 
                layoutId={`card-container-${cert.id}`}
                key={cert.id}
                className="w-full max-w-5xl rounded-[32px] overflow-hidden bg-[#111] border border-white/10 relative flex flex-col md:flex-row shadow-[0_30px_100px_rgba(0,0,0,1)]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="md:w-2/3 max-h-[70vh] md:max-h-none overflow-hidden relative">
                  <motion.img 
                    layoutId={`card-image-${cert.id}`}
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent pointer-events-none md:hidden" />
                </div>
                
                <div className="md:w-1/3 p-8 md:p-12 flex flex-col justify-center relative">
                  <button 
                    onClick={() => setSelectedId(null)}
                    className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/10 text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <motion.div layoutId={`card-icon-${cert.id}`} className="mb-6 w-14 h-14 rounded-full bg-white/10 flex items-center justify-center border border-white/20 text-white">
                    <Award className="w-6 h-6" />
                  </motion.div>
                  <motion.h3 layoutId={`card-title-${cert.id}`} className="text-3xl font-bold text-white mb-2 leading-tight">
                    {cert.title}
                  </motion.h3>
                  <div className="flex flex-col gap-1 text-base font-mono tracking-wider mt-4">
                    <motion.span layoutId={`card-issuer-${cert.id}`} className="text-white/60">Issuer: {cert.issuer}</motion.span>
                    <motion.span layoutId={`card-date-${cert.id}`} className="text-white/40">Earned: {cert.date}</motion.span>
                  </div>
                  
                  <div className="mt-12">
                    <p className="text-white/50 text-sm leading-relaxed">
                      This certification verifies proficiency and foundational knowledge demonstrated through rigorous assessment.
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
