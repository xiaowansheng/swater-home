import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useConfig } from "../context/ConfigContext";

export const LoadingScreen = ({ children }: { children: React.ReactNode }) => {
  const { config, lang } = useConfig();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (config) {
      // Small delay to show the cute loading animation
      const timer = setTimeout(() => setIsLoading(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [config]);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loading"
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-white"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-48 h-48 mb-8"
            >
              {config?.loading.image ? (
                <motion.img
                  src={config.loading.image}
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  ✨
                </div>
              )}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-4 bg-primary/10 rounded-[100%] blur-sm"
              />
            </motion.div>
            
            <p className="text-primary font-bold tracking-widest text-sm uppercase">
              {config?.loading.text[lang] || "Loading..."}
            </p>
            
            <div className="mt-4 w-48 h-1 bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2 }}
                className="h-full bg-primary"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {!isLoading && children}
    </>
  );
};

