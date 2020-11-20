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
    fontSize: {
      xs: '0.65rem',
      sm: '0.775rem',
      base: '0.9rem',
      lg: '1.025rem',
      xl: '1.15rem',
      '2xl': '1.4rem',
      '3xl': '1.775rem',
      '4xl': '2.15rem',
      '5xl': '2.9rem',
      '6xl': '3.9rem',
    },
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
        orange: '#F6833C',
        yellow: '#FFE45C',
        altblack: '#292828',
        green: '#70C2A8'
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
