module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  },
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  theme: {
    screens: {
      'portrait': {'raw': '(orientation: portrait)'},
      // => @media (orientation: portrait) { ... }
      'landscape': {'raw': '(orientation: landscape)'},
      // => @media (orientation: portrait) { ... }
      'xs': '375px',
      // => @media (min-width: 375px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1366px',
      // => @media (min-width: 1280px) { ... }
      'xxl': '1600px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontSize: {
        'xxs' : '0.6rem'
      },
      colors: {
        orange: '#f89f67',
      },
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
