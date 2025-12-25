import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { useConfig } from "../context/ConfigContext";

export const CustomCursor = () => {
  const { config } = useConfig();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    if (!config?.features.customCursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
          target.tagName === "A" ||
          target.tagName === "BUTTON"
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [config?.features.customCursor]);

  if (!config?.features.customCursor) return null;

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(mousePos.x, springConfig);
  const cursorY = useSpring(mousePos.y, springConfig);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isPointer ? 1.5 : 1,
          rotate: isPointer ? 180 : 0,
        }}
        className="relative w-12 h-12"
      >
        {/* Magic Circle SVG */}
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary/60 opacity-80 animate-spin-slow">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M50 5 L50 95 M5 50 L95 50" stroke="currentColor" strokeWidth="1" />
          <rect x="30" y="30" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(45 50 50)" />
        </svg>
        
        {/* Center Point */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-primary rounded-full" />
      </motion.div>
    </div>
  );
};

