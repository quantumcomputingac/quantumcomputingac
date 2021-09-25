const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
      './public/index.html',
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.jsx'
    ],
    options: {
      safelist: [
        /data-theme$/,
      ]
    }
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],

  // config (optional)
  daisyui: {
    themes: ['emerald', // first one will be the default theme
      'dark',
      'forest',
      'synthwave'],
  },
}
