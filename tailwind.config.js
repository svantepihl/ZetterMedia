module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  theme: {
    fontFamily: {
      display: ['nunito-sans', 'sans-serif'],
      body: ['nunito-sans', 'sans-serif'],
    },
    extend: {
      transformOrigin: {
        "0": "0%",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: {},
  plugins: [],
}
