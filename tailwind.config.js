/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Base colors
        'bg-primary': '#0B0B0B',
        'bg-secondary': '#111111',
        
        // Accent colors
        'accent-red': '#FF3B3B',
        'accent-green': '#22C55E',
        
        // Text colors
        'text-primary': '#E5E5E5',
        'text-secondary': '#A1A1AA',
        'text-muted': '#71717A',
        
        // Legacy support (keeping old colors for compatibility)
        space: {
          deep: '#0B0B0B',
          dark: '#111111',
          medium: '#1a1a24',
          light: '#2a2a34',
        },
        neon: {
          purple: '#a855f7',
          cyan: '#06b6d4',
          green: '#22C55E',
          pink: '#ec4899',
          blue: '#3b82f6',
          yellow: '#fbbf24',
          red: '#FF3B3B',
        },
      },
      fontFamily: {
        primary: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'glow-red': '0 0 30px rgba(255, 59, 59, 0.3)',
        'glow-green': '0 0 30px rgba(34, 197, 94, 0.3)',
      },
    },
  },
  plugins: [],
};
