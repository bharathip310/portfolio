import React from 'react';
import { motion } from "motion/react";
import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import FeaturedProjects from "../components/Projects";
import Contact from "../components/Contact";
import { TechStack } from "../components/Sections";

export default function HomePage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }} 
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="page-transition-wrapper"
    >
      <HeroSection />
      <FeaturedProjects />
      <Skills />
      <AboutMe />
      <TechStack />
      <Contact />
    </motion.div>
  );
}
