import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(var(--primary))',
        complimantry: 'rgba(var(--complimantry))',
        pop: 'rgba(var(--pop))',
        oposite: 'rgba(var(--oposite))',
        textColor: 'rgba(var(--text))',
      },
      fontSize: {
        sm: 'clamp(0.8rem, 1vw, 1.3rem)',
        md: 'clamp(1rem, 1.2vw, 1.5rem)',
        lg: 'clamp(1.125rem, 1.4vw, 1.75rem)',
        xl: 'clamp(1.25rem, 1.5vw, 1.75rem)',
        '2xl': 'clamp(1.563rem, 1.8vw, 2rem)',
        '3xl': 'clamp(1.953rem, 2.2vw, 2.5rem)',
        '4xl': 'clamp(2.441rem, 2.5vw, 3rem)',
        '5xl': 'clamp(3.052rem, 3vw, 3.5rem)',
      }
    },
  },
  plugins: [flowbite.plugin()],
};
