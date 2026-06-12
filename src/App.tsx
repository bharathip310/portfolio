/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import CinematicIntro from "./components/CinematicIntro";
import { AnimatePresence } from "motion/react";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import CertificationsPage from "./pages/CertificationsPage";
import ResumePage from "./pages/ResumePage";

// Wrap scroll restoration and Lenis logic
function ScrollController() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      {/* @ts-ignore - React Router v6 Routes type ignores key but AnimatePresence needs it */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetailsPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </AnimatePresence>
  );
}

function MainPortfolio() {
  return (
    <>
      <Header />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const [introStarted, setIntroStarted] = useState(false);
  const [introUnmounted, setIntroUnmounted] = useState(false);

  useEffect(() => {
    // If mobile, bypass the intro immediately
    if (window.innerWidth <= 768) {
      setIntroStarted(true);
      setIntroUnmounted(true);
      document.body.style.overflow = "auto";
    }
  }, []);

  const handleIntroComplete = () => {
    // This is called by CinematicIntro when the user scrolls to enter
    setIntroStarted(true);
    
    // We unmount the CinematicIntro completely after its 800ms transition finishes
    setTimeout(() => {
      setIntroUnmounted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#FAFAFA] font-sans antialiased overflow-x-hidden relative selection:bg-[#333] selection:text-[#FAFAFA]">
      <CustomCursor />
      
      {introStarted && (
        <BrowserRouter>
          <ScrollController />
          <div className="relative">
            <MainPortfolio />
          </div>
        </BrowserRouter>
      )}

      {!introUnmounted && (
        <CinematicIntro onComplete={handleIntroComplete} isTransitioningOutExternal={introStarted} />
      )}
    </div>
  );
}
