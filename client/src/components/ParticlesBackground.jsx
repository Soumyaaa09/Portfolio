import Particles from "react-tsparticles";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ParticlesBackground() {
  const { theme } = useContext(ThemeContext);
  const pColor = theme === "dark" ? "#818cf8" : pColor;
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },

        fpsLimit: 120,

        particles: {
          color: {
            value: pColor,
          },

          links: {
            color: pColor,
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },

          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },

          number: {
            density: {
              enable: true,
            },
            value: 50,
          },

          opacity: {
            value: 0.5,
          },

          shape: {
            type: "circle",
          },

          size: {
            value: { min: 1, max: 5 },
          },
        },

        detectRetina: true,
      }}
    />
  );
}

export default ParticlesBackground;