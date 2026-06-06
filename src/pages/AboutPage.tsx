import React from 'react';
import { motion } from "motion/react";
import AboutMe from "../components/AboutMe";
import { EducationTimeline, ExperienceTimeline } from "../components/Timelines";

export default function AboutPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }} 
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="pt-24" // to account for fixed navbar
    >
      <AboutMe />
      <EducationTimeline />
      <ExperienceTimeline />
    </motion.div>
  );
}
