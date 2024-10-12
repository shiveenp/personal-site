import generated from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    generated,
    // eslint-disable-next-line no-undef
    require('@tailwindcss/typography'),
  ],
}

