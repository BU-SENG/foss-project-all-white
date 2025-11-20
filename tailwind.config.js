/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          background: '#0B1410',
          surface: '#13231B',
          primary: '#00E359',
          secondary: '#1F3328',
          textMain: '#FFFFFF',
          textMuted: '#8E9B93',
        }
      },
    },
    plugins: [],
  }