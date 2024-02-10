/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
    theme: {
        extend: {
          colors: {
            'textcol': '#4a5248',
            'divcol': '#6A9275',
          },
          fontFamily: {
           'pop':  ['Poppins'],
           'bsd': ['Big Shoulders Display'],
          } 
        }
      }
  };
