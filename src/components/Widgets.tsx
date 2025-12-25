import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Cloud, Sun, CloudRain, Wind, Eye } from "lucide-react";
import { useConfig } from "../context/ConfigContext";

export const ClockWidget = () => {
  const { config } = useConfig();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!config?.features.clock) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass px-4 py-2 rounded-full flex items-center gap-2 text-primary font-bold shadow-sm"
    >
      <Clock size={16} />
      <span className="text-sm font-mono">
        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
      </span>
    </motion.div>
  );
};

export const WeatherWidget = () => {
  const { config } = useConfig();
  const [weather, setWeather] = useState<{ temp: number; icon: string } | null>(null);

  useEffect(() => {
    if (!config?.features.weather) return;
    
    // Simulate weather or fetch if API key provided
    // For now, let's just show a cute anime-style static weather
    setWeather({ temp: 24, icon: "sun" });
  }, [config?.features.weather]);

  if (!config?.features.weather || !weather) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="glass px-4 py-2 rounded-full flex items-center gap-2 text-secondary font-bold shadow-sm"
    >
      <Sun size={16} />
      <span className="text-sm">{config.widgets.weather.city} · {weather.temp}°C</span>
    </motion.div>
  );
};

export const VisitorCounter = () => {
  const { config } = useConfig();
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (!config?.features.visitorCounter) return;

    // Use countapi-js or similar, or just mock it for this example
    const fetchCount = async () => {
      try {
        const res = await fetch(`https://api.countapi.xyz/hit/${config.widgets.visitor.siteId}/visits`);
        const data = await res.json();
        setCount(data.value);
      } catch (e) {
        // Fallback to random/mock
        setCount(Math.floor(Math.random() * 1000) + 500);
      }
    };
    fetchCount();
  }, [config?.features.visitorCounter, config?.widgets.visitor.siteId]);

  if (!config?.features.visitorCounter) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="glass px-4 py-2 rounded-full flex items-center gap-2 text-slate-500 font-bold shadow-sm"
    >
      <Eye size={16} />
      <span className="text-sm">{count ?? '---'}</span>
    </motion.div>
  );
};

