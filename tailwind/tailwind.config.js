const Path = require("path");
const pwd = process.env.PWD;

// We can add current project paths here
const projectPaths = [
    Path.join(pwd, "../templates/**/*.html"),
    // add js file paths if you need
];

const contentPaths = [...projectPaths];
console.log(`tailwindcss will scan ${contentPaths}`);

module.exports = {
  tailwindConfig: './tailwind.config.js',
  content: contentPaths,
  theme: {
    extend: {       
        colors: {
          'primary': '#1c84ee',
          'secondary': ' #74788d',

          'success': '#34c38f',
          'info': '#16daf1',
          'warning': '#ffcc5a',
          'danger': '#ef6767',

          'light': '#f6f6f6',
          'dark': '#2b3940',

          'white': '#fff',
          'black': '#000',
        },
      },
    },
  extend: {
    screens: {
        'xs': '400px',
        'ssm': '576px',

        // 'bootstrap-md': '768px',
        // 'bootstrap-lg': '992px',
        // 'bootstrap-xl': '1200px',
        // 'bootstrap-xxl': '1400px'

        // sm	640px	
        // md	768px
        // lg	1024px
        // xl	1280px
        // 2xl	1536px
      }
  },
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
