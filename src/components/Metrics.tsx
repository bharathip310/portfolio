import { motion } from "motion/react";

export default function Metrics() {
  const metrics = [
    { label: "EXPERIENCE", value: "08+ Yrs", isCustom: false },
    { label: "PROJECTS DELIVERED", value: "124", isCustom: false },
    { label: "GLOBAL AWARDS", value: "14", isCustom: false },
    { label: "SYSTEM STATUS", value: "Active", isCustom: true },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="py-12 px-6 md:px-16 max-w-[1200px] mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-black/10 pt-12"
      >
        {metrics.map((metric, idx) => (
          <motion.div variants={itemVariants} key={idx} className="flex flex-col">
            <span className="font-sans text-[10px] text-[#A0A0A0] font-bold tracking-[0.15em] block uppercase mb-3">
              {metric.label}
            </span>
            <div className="flex items-center gap-2.5">
              {metric.isCustom && (
                <span className="w-2.5 h-2.5 rounded-full bg-[#1A1A1A] pulse-dot relative flex" />
              )}
              <span className="font-mono text-2xl md:text-3xl font-medium text-[#1A1A1A] tracking-[-0.01em]">
                {metric.value}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
