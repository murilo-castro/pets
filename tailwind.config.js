/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        tablet: '600px',
        // => @media (min-width: 600px) { ... }

        laptop: '601px',
        // => @media (min-width: 601px) { ... }

        desktop: '940px',
        // => @media (min-width: 1280px) { ... }
      },
      colors: {
        rexpet: '#1271A1',
        primary: '#062A3C',
        main: '#F7F9FA',
        'auxiliary-pink': '#F67392',
        'black-services': '#000305',
        'auxiliary-blue': '#D9EAF2',
      },
    },
  },
  plugins: [],
};
