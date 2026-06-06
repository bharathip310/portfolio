import React from 'react';
import { motion } from "motion/react";
import Certificates from "../components/Certificates";

export default function CertificationsPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }} 
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="pt-24 min-h-[100vh]"
    >
      <Certificates />
    </motion.div>
  );
}
