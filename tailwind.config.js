/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        anime: {
          bg: '#0f0a1e',
          card: 'rgba(22, 10, 45, 0.72)',
          pink: '#f472b6',
          purple: '#818cf8',
          cyan: '#22d3ee',
          mint: '#34d399',
          lavender: '#c4b5fd',
          light: '#f0e6ff',
          muted: '#a78bfa',
        },
      },
      fontFamily: {
        rounded: ['"M PLUS Rounded 1c"', 'sans-serif'],
        quicksand: ['"Quicksand"', 'sans-serif'],
        jp: ['"Noto Sans JP"', 'sans-serif'],
        orbitron: ['"Orbitron"', 'sans-serif'],
      },
      animation: {
        'holo': 'holo-shift 4s linear infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
