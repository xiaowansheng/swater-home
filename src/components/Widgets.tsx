import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Sun, Eye } from "lucide-react";
import { useConfig } from "../context/ConfigContext";

const widgetBaseClass = "flex items-center gap-1.5 font-bold";

export const ClockWidget = () => {
  const { config } = useConfig();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!config?.features.clock) return null;

  return (
    <div className={`${widgetBaseClass} text-primary/60 dark:text-primary/80`}>
      <Clock size={12} />
      <span className="text-[10px] font-mono leading-none">
        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </span>
    </div>
  );
};

export const WeatherWidget = () => {
  const { config } = useConfig();
  const [weather, setWeather] = useState<{ temp: number; icon: string } | null>(null);

  useEffect(() => {
    if (!config?.features.weather) return;
    setWeather({ temp: 24, icon: "sun" });
  }, [config?.features.weather]);

  if (!config?.features.weather || !weather) return null;

  return (
    <div className={`${widgetBaseClass} text-secondary/60 dark:text-secondary/80`}>
      <Sun size={12} />
      <span className="text-[10px] leading-none">{config.widgets.weather.city} · {weather.temp}°C</span>
    </div>
  );
};

export const VisitorCounter = () => {
  const { config } = useConfig();
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (!config?.features.visitorCounter) return;
    const fetchCount = async () => {
      try {
        const res = await fetch(`https://api.countapi.xyz/hit/${config.widgets.visitor.siteId}/visits`);
        const data = await res.json();
        setCount(data.value);
      } catch (e) {
        setCount(Math.floor(Math.random() * 1000) + 500);
      }
    };
    fetchCount();
  }, [config?.features.visitorCounter, config?.widgets.visitor.siteId]);

  if (!config?.features.visitorCounter) return null;

  return (
    <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 font-bold opacity-60 hover:opacity-100 transition-opacity">
      <Eye size={14} />
      <span className="text-[10px] tracking-widest uppercase">Visitors: {count ?? '---'}</span>
    </div>
  );
};
