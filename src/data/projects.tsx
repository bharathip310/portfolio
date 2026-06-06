import React from 'react';
import { Github, Lock, Bus, HeartPulse, GraduationCap, Utensils, BookOpen, UserCircle, Target, Activity } from 'lucide-react';

export const projectsData = [
  {
    id: "smart-helmet-public-safety",
    title: "Smart Helmet",
    desc: "Integrated hardware and software to enhance rider safety through helmet detection, accident monitoring, and emergency alerts.",
    tech: ["Python", "IoT", "Embedded Systems"],
    icon: <Activity className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop",
    span: "md:col-span-2 md:row-span-2",
    category: "Hardware & Python"
  },
  {
    id: "heart-disease-prediction",
    title: "Heart Disease Prediction",
    desc: "Built a machine learning model to analyze medical data and predict heart disease risk, supporting early diagnosis.",
    tech: ["Python", "scikit-learn", "Data Analysis"],
    icon: <HeartPulse className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-1",
    category: "Machine Learning"
  },
  {
    id: "banking-system",
    title: "Banking System",
    desc: "Secure transactions and user roles.",
    tech: ["Node.js", "MySQL"],
    icon: <Lock className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-1",
    category: "Backend"
  },
  {
    id: "railway-reservation-system",
    title: "Railway Booking",
    desc: "Real-time reservation system.",
    tech: ["Python", "MySQL"],
    icon: <Activity className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=800&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-1",
    category: "Backend"
  },
  {
    id: "student-record",
    title: "Student Records",
    desc: "Academic transcript management.",
    tech: ["Next.js", "MongoDB"],
    icon: <GraduationCap className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
    span: "md:col-span-2 md:row-span-1",
    category: "Full Stack"
  },
  {
    id: "bus-reservation-system",
    title: "Bus Booking",
    desc: "Fleet scheduling and seating.",
    tech: ["React", "Express"],
    icon: <Bus className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-1",
    category: "Full Stack"
  }
];
