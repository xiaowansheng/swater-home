import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useConfig } from "../context/ConfigContext";
import type { ISourceOptions } from "@tsparticles/engine";

export const DynamicBackground = () => {
  const [init, setInit] = useState(false);
  const { config } = useConfig();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(() => {
    const type = config?.background || "sakura";
    
    if (type === "sakura") {
      return {
        background: { color: { value: "transparent" } },
        fpsLimit: 120,
        particles: {
          number: { value: 30, density: { enable: true, area: 800 } },
          color: { value: "#ffb7c5" },
          shape: { type: "circle" },
          opacity: { value: 0.6 },
          size: { value: { min: 5, max: 10 } },
          move: {
            enable: true,
            direction: "bottom-right",
            speed: 2,
            straight: false,
            outModes: { default: "out" },
          },
          wobble: { enable: true, distance: 10, speed: 10 },
          rotate: {
            value: { min: 0, max: 360 },
            animation: { enable: true, speed: 5 },
          },
        },
      };
    }

    return {
      background: { color: { value: "transparent" } },
      fpsLimit: 120,
      particles: {
        number: { value: 100, density: { enable: true, area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: {
          value: { min: 0.1, max: 0.8 },
          animation: { enable: true, speed: 1, sync: false },
        },
        size: { value: { min: 1, max: 3 } },
        move: {
          enable: true,
          speed: 0.5,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "out" },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          grab: { distance: 140, links: { opacity: 0.5 } },
        },
      },
    };
  }, [config?.background]);

  if (!init) return null;

  return (
    <div className="fixed inset-0 -z-10">
      <Particles id="tsparticles" options={options} />
    </div>
  );
};

