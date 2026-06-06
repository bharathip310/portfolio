import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Mail, MapPin, CheckCircle2 } from "lucide-react";
import Magnetic from "./Magnetic";

const CustomInput = ({ label, type = "text", ...props }: any) => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <div className="relative group w-full mb-6">
      <motion.label 
        initial={false}
        animate={{ 
          y: (isFocused || props.value) ? 12 : 23,
          x: (isFocused || props.value) ? 16 : 20,
          scale: (isFocused || props.value) ? 0.8 : 1,
          color: isFocused ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.4)",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute left-0 top-0 origin-left text-sm tracking-wide pointer-events-none z-10 font-medium"
      >
        {label}
      </motion.label>
      
      <div className="relative">
        {type === "textarea" ? (
          <textarea 
            {...props}
            onFocus={(e) => { setIsFocused(true); props.onFocus?.(e); }}
            onBlur={(e) => { setIsFocused(false); props.onBlur?.(e); }}
            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-5 pt-8 pb-5 text-white focus:outline-none resize-none min-h-[140px] transition-all duration-300 hover:border-white/20 focus:border-white/30 focus:bg-white/[0.06] shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)] font-mono text-sm leading-relaxed"
          />
        ) : (
          <input 
            type={type}
            {...props}
            onFocus={(e) => { setIsFocused(true); props.onFocus?.(e); }}
            onBlur={(e) => { setIsFocused(false); props.onBlur?.(e); }}
            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-5 pt-8 pb-4 text-white focus:outline-none transition-all duration-300 hover:border-white/20 focus:border-white/30 focus:bg-white/[0.06] shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)] font-mono text-sm h-[72px]"
          />
        )}
        
        {/* Animated Focus Glow */}
        <div className={`absolute inset-0 rounded-2xl pointer-events-none transition-all duration-500 ${isFocused ? 'shadow-[0_0_20px_rgba(255,255,255,0.05)] ring-1 ring-white/10' : ''}`} />
      </div>
    </div>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        // Optional: clear the form
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to transmit. Please verify your connection and try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Transmission error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-16 max-w-[1200px] mx-auto w-full relative z-10">
      <div className="mb-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-[1px] w-12 bg-white/40" />
          <span className="text-xs font-mono tracking-[0.3em] text-white/50 uppercase block">
            Initiate Contact
          </span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6"
        >
          Let's Collaborate.
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="rounded-[40px] p-8 md:p-16 lg:p-20 relative overflow-hidden bg-[#070707] border border-white/[0.08] shadow-[0_20px_80px_rgba(0,0,0,0.8)]"
      >
        {/* Background Enhancements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-60 pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_20%,transparent_100%)] opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/[0.02] blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
          <div className="flex flex-col justify-between">
            <div className="mb-16">
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                Have a project in mind? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mt-2 block">Let's build it together.</span>
              </h3>
              <p className="text-white/50 leading-relaxed max-w-md text-lg font-light">
                I'm currently available for full-time opportunities and select freelance partnerships. Drop me a line and I'll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:bharathip310@gmail.com" className="flex items-center gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-500 group">
                <div className="w-16 h-16 rounded-[20px] bg-gradient-to-br from-white/10 to-white/0 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-[0.2em] text-white/40 mb-1 font-mono">Email</span>
                  <span className="font-semibold tracking-wide text-lg sm:text-xl text-white group-hover:text-blue-200 transition-colors">bharathip310@gmail.com</span>
                </div>
              </a>

              <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/[0.05] group">
                <div className="w-16 h-16 rounded-[20px] bg-gradient-to-br from-white/10 to-white/0 border border-white/10 flex items-center justify-center shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-[0.2em] text-white/40 mb-1 font-mono">Location</span>
                  <span className="font-semibold tracking-wide text-xl text-white">Remote / Global</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form key="form" onSubmit={handleSubmit} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, scale: 0.95 }} className="space-y-4">
                  <CustomInput
                    label="What's your name?"
                    value={formData.name}
                    onChange={(e: any) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <CustomInput
                    label="What's your email?"
                    type="email"
                    value={formData.email}
                    onChange={(e: any) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <CustomInput
                    label="What's the subject?"
                    value={formData.subject}
                    onChange={(e: any) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                  <CustomInput
                    label="Tell me about your project"
                    type="textarea"
                    value={formData.message}
                    onChange={(e: any) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                  
                  <div className="pt-6">
                    <Magnetic multiplier={0.2}>
                      <button 
                        type="submit" 
                        disabled={isSubmitting} 
                        className="h-16 w-full md:w-auto px-12 rounded-2xl bg-gradient-to-r from-white to-white/90 text-black font-semibold text-lg tracking-wide flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] group disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        {isSubmitting ? "Transmitting..." : "Send Message"} 
                        {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                      </button>
                    </Magnetic>
                  </div>
                </motion.form>
              ) : (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="h-full flex flex-col items-center justify-center text-center p-12 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                  >
                    <div className="w-24 h-24 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-8">
                      <CheckCircle2 className="w-10 h-10 text-green-400" />
                    </div>
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white mb-4">Transmission Successful</h3>
                  <p className="text-white/60 mb-10 text-lg max-w-[280px]">
                    Thank you, <span className="text-white font-medium">{formData.name}</span>. I've received your message and will respond shortly.
                  </p>
                  <Magnetic multiplier={0.1}>
                    <button 
                      onClick={() => { setIsSuccess(false); setFormData({ name: "", email: "", subject: "", message: "" }); }} 
                      className="text-sm font-mono text-white hover:text-black uppercase tracking-widest border border-white/30 px-8 py-4 rounded-full hover:bg-white transition-all duration-300"
                    >
                      Draft New Message
                    </button>
                  </Magnetic>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
