import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap } from 'lucide-react';

const educationData = [
  {
    period: "2024 - Present",
    degree: "BE in Computer Science Engineering",
    institution: "Meenakshi Sundararajan Engineering College, Chennai",
    description: "Third-year student specializing in Computer Science & Engineering. Passionate about software development and scalable architectures.",
    isActive: true
  },
  {
    period: "2023 - 2024",
    degree: "12th Standard (HSC)",
    institution: "St. Andrews Matric HR Sec School, Thirumanthurai",
    description: "Achieved 82%. Solidified foundational knowledge in mathematics and science.",
    isActive: false
  },
  {
    period: "2021 - 2022",
    degree: "10th Standard (SSLC)",
    institution: "St. Andrews Matric HR Sec School, Thirumanthurai",
    description: "Achieved 75%.",
    isActive: false
  }
];

const experienceData = [
  {
    period: "Completed",
    role: "Web Development Intern",
    company: "Eagle Hi-Tech Softclou Pvt Ltd",
    description: "Designed and developed responsive web pages using HTML, CSS, and JavaScript. Gained hands-on experience in full-stack development using React.js and Node.js.",
    isActive: true
  },
  {
    period: "Current",
    role: "Full Stack Developer",
    company: "Personal Projects & Hackathons",
    description: "Building production-ready applications like the Smart Helmet Public Safety System and Heart Disease Prediction System.",
    isActive: false
  }
];

const TimelineStruct = ({ data, icon: Icon, title, id }: any) => {
  return (
    <section id={id} className="py-16 md:py-24 px-6 md:px-16 max-w-[1200px] mx-auto relative">
      <div className="mb-16 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-white/80" />
        </div>
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-white"
        >
          {title}
        </motion.h2>
      </div>

      <div className="relative pl-6 md:pl-10">
        <div className="absolute left-[11px] md:left-[19px] top-4 bottom-4 w-[2px] bg-white/10" />

        {data.map((item: any, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="mb-12 relative group"
          >
            {/* Timeline Dot */}
            <div className={`absolute -left-[30px] md:-left-[38px] top-1.5 w-4 h-4 rounded-full border-2 ${item.isActive ? 'bg-blue-500 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]' : 'bg-[#050505] border-white/30 group-hover:bg-white/20'} transition-all duration-300`} />

            <div className="glass-card p-6 md:p-8 rounded-2xl bento-item">
              <span className="text-xs font-mono tracking-widest text-[#A0A0A0] uppercase mb-2 block">
                {item.period}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-1">
                {item.degree || item.role}
              </h3>
              <p className="text-sm font-medium text-white/50 uppercase tracking-widest mb-4">
                {item.institution || item.company}
              </p>
              <p className="text-[#A0A0A0] leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export const EducationTimeline = () => <TimelineStruct data={educationData} icon={GraduationCap} title="Education" id="education" />;
export const ExperienceTimeline = () => <TimelineStruct data={experienceData} icon={Briefcase} title="Experience" id="experience" />;
