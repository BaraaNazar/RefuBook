/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      lineHeight: {
        11: '48px',
        12: '64px',
      },
      fontSize: {
        '5.5xl': '54px',
      },
      colors: {
        'refubook-bg': '#70CDD6',
        'refubook-blue': '#4699C2',
        'custom-black': '#3F3B3B',
        'custom-gray': '#637381',
        'custom-light-gray': '#C4CDD5',
        'custom-light-gray-2': '#D1DBE3',
        'custom-dark-blue': '#212B36',
        'custom-medium-blue': '#026FC2',
        'custom-light-yellow': '#FEDB9B',
      },
      borderRadius: {
        '4xl': '32px',
        '5xl': '40px',
        '6xl': '50px',
      },
      boxShadow: {
        'custom-xl': '10px 10px 40px rgba(0, 0, 0, 0.25);',
        'custom-sm': '0 3.13244px 3.13244px rgba(0, 0, 0, 0.25);',
        'custom-sm-2': '0px 2px 4px rgba(96, 97, 112, 0.16);',
      },
    },
  },
  plugins: ['flowbite/plugin'],
};
