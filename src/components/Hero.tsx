import { useEffect, useRef } from "react";
import { motion } from "motion/react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    // Handle resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // Grid nodes / Orbit simulation (simulates the 3D abstract torus/sculpture)
    let angleX = 0;
    let angleY = 0;
    let mouse = { x: width / 2, y: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    canvas.addEventListener("mousemove", handleMouseMove);

    // Particle pool
    const particles: { x: number; y: number; z: number; size: number; color: string }[] = [];
    const isMobile = window.innerWidth <= 768;
    const particleCount = isMobile ? 40 : 120;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 350,
        y: (Math.random() - 0.5) * 350,
        z: (Math.random() - 0.5) * 350,
        size: Math.random() * 1.5 + 0.5,
        color: Math.random() > 0.4 ? "#c0c1ff" : "#00e3fd"
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Track mouse offsets for rotation
      const targetAngleX = (mouse.y - cy) * 0.003;
      const targetAngleY = (mouse.x - cx) * 0.003;

      angleX += (targetAngleX - angleX) * 0.05;
      angleY += (targetAngleY - angleY) * 0.05;

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      // Draw mathematical rings (simulation of the original torus/icosahedron)
      const ringCount = 3;
      ctx.strokeStyle = "rgba(192, 193, 255, 0.08)";
      ctx.lineWidth = 1;

      for (let r = 0; r < ringCount; r++) {
        ctx.beginPath();
        const baseRadius = 120 + r * 22;
        const ringStep = 60;
        
        for (let i = 0; i <= ringStep; i++) {
          const theta = (i / ringStep) * Math.PI * 2;
          
          // Original 3D coordinate on circle
          let px = baseRadius * Math.cos(theta);
          let py = baseRadius * Math.sin(theta);
          let pz = r === 1 ? px * 0.5 : py * -0.5;

          // Rotate X
          let y1 = py * cosX - pz * sinX;
          let z1 = pz * cosX + py * sinX;

          // Rotate Y
          let x2 = px * cosY + z1 * sinY;
          let z2 = z1 * cosY - px * sinY;

          // Project coordinates to 2D
          const scale = 300 / (300 + z2);
          const screenX = cx + x2 * scale;
          const screenY = cy + y1 * scale;

          if (i === 0) {
            ctx.moveTo(screenX, screenY);
          } else {
            ctx.lineTo(screenX, screenY);
          }
        }
        ctx.strokeStyle = r === 1 ? "rgba(0, 227, 253, 0.12)" : "rgba(192, 193, 255, 0.08)";
        ctx.stroke();
      }

      // Draw core glowing orb (math 3D mesh)
      ctx.beginPath();
      const radGrad = ctx.createRadialGradient(cx, cy, 3, cx, cy, 140);
      radGrad.addColorStop(0, "rgba(99, 102, 241, 0.15)");
      radGrad.addColorStop(0.5, "rgba(99, 102, 241, 0.04)");
      radGrad.addColorStop(1, "transparent");
      ctx.fillStyle = radGrad;
      ctx.arc(cx, cy, 140, 0, Math.PI * 2);
      ctx.fill();

      // Render 3D Rotating Particles
      particles.forEach((part) => {
        // Rotate X
        let y1 = part.y * cosX - part.z * sinX;
        let z1 = part.z * cosX + part.y * sinX;

        // Rotate Y
        let x2 = part.x * cosY + z1 * sinY;
        let z2 = z1 * cosY - part.x * sinY;

        const scale = 300 / (300 + z2);
        const screenX = cx + x2 * scale;
        const screenY = cy + y1 * scale;

        // Render point
        if (screenX > 0 && screenX < width && screenY > 0 && screenY < height) {
          const alpha = Math.max(0.1, Math.min(0.9, (350 - z2) / 600));
          ctx.beginPath();
          ctx.fillStyle = part.color === "#00e3fd" 
            ? `rgba(0, 227, 253, ${alpha})` 
            : `rgba(192, 193, 255, ${alpha})`;
          ctx.arc(screenX, screenY, part.size * scale, 0, Math.PI * 2);
          ctx.fill();

          // Core connections lines (editorial technical look)
          if (part.z > 280) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(192, 193, 255, ${alpha * 0.15})`;
            ctx.moveTo(screenX, screenY);
            ctx.lineTo(cx, cy);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 max-w-[1200px] mx-auto pt-36 pb-16 relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Title and Intro */}
        <div className="md:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-sans text-[10px] tracking-[0.15em] text-[#A0A0A0] font-bold bg-white border border-black/5 rounded-[2px] px-3.5 py-1 inline-block mb-6 uppercase shadow-sm">
              Creative technologist
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-6xl md:text-8xl italic tracking-tight text-[#1A1A1A] mb-6 leading-[0.85]"
          >
            Engineering
            <br />
            the next digital
            <br />
            <span className="text-[#1A1A1A] inline-block relative">
              paradigm
              <span className="absolute bottom-1.5 left-0 w-full h-[1px] bg-[#1A1A1A] rounded-none"></span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-[15px] text-[#555] max-w-xl mb-10 leading-[1.7]"
          >
            <span className="text-[#1A1A1A] font-bold">Bharathi P. —</span> Architecting high-performance digital experiences where technical precision meets editorial narrative.
          </motion.p>
        </div>

        {/* Portait & Custom Math Simulation Backdrop */}
        <div className="md:col-span-5 relative w-full h-[450px] md:h-[520px] flex items-center justify-center">
          {/* Interactive canvas backdrop - simulating the Three.js vector look */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-auto bg-transparent z-0 opacity-20"
          />

          {/* Profile Photo Glass Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-[340px] h-[390px] md:h-[440px] rounded-[2px] overflow-hidden bg-[#E5E2DA] p-[1px] shadow-[0_40px_100px_rgba(0,0,0,0.05)] group transition-all duration-500 hover:border-[#1A1A1A]"
          >
            {/* Glowing borders */}
            <div className="absolute inset-0 border border-black/5 group-hover:border-black/10 rounded-[2px] transition-all z-20 pointer-events-none" />

            <img
              alt="Bharathi P. professional portrait"
              src="https://lh3.googleusercontent.com/aida/AP1WRLsMfnszpI3NjbmDz_bajt5uFZAaCVVA5Y4CXYVI38LUYYzh5fZt0T-r74__rpD1e0ImswlJPzZ89LgShROvHDq2C7w1pWJvcHsHC_Z-tkIhenQ2i0_kn6N4__ey6iCuXSu7j2N5KAXjW59P1AYssizB3jfsejkL97w688R-NOyRlhwZ9uhYxRmBwTufYF_uRqyj-s3HqjOzGE83qPcivMIzsdSLqOxvUdg_FfM-ZeRSmf4zSBRXCE8TYc4a"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-[2px] transition-all duration-700 scale-[1.01] group-hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
