module.exports = {
  prefix: 'tw-',
  important: true,
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  borderColor: (theme) => ({
    ...theme('colors'),
    DEFAULT: '#e2e8f0',
  }),
  theme: {
    extend: {
      colors: {
        black1: '#414141',
        black2: '#242E23',
        primary: '#200D8A',
        gray: {
          1: '#333333',
          2: '#828282',
          3: '#C0C7CE',
          4: '#6E7AB1',
          5: '#9A9A9A',
          light: '#F3F8FD',
          new: '#888181',
        },
        complementary: '#2AAAC0',
        error: {
          1: '#F44336',
        },
        pending: {
          orange: '#F2994A',
          yellow: '#F2C94C',
        },
        success: '#0ACF83',
        bg: '#F9F9F9',
      },
      fontFamily: {
        nunito: ['Nunito Sans'],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1600px',
      },
      height: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
        hero: '930.5px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(188,195,204, 0.3)',
        DEFAULT: '0 1px 2px 0 rgba(188,195,204, 0.3)',
        md: '0 2px 4px -1px rgba(188,195,204, 0.3)',
        lg: '0 4px 6px -2px rgba(188,195,204, 0.3)',
        xl: '0 10px 10px -5px rgba(188,195,204, 0.3)',
        '2xl': '0 25px 50px -12px rgba(188,195,204, 0.3)',
        '3xl': '0 35px 60px -15px rgba(188,195,204, 0.3)',
        inner: 'inset 0 2px 4px 0 rgba(188,195,204, 0.06)',
        none: 'none',
      },
    },
  },
  variants: {
    extend: {
      zIndex: ['responsive', 'hover'],
      position: ['responsive', 'hover'],
      padding: ['responsive', 'last'],
      margin: ['responsive', 'last'],
      borderWidth: ['responsive', 'last'],
      backgroundColor: ['last', 'first', 'odd', 'responsive', 'hover', 'dark'],
      borderColor: ['last', 'first', 'odd', 'responsive', 'hover', 'dark'],
      textColor: ['last', 'first', 'odd', 'responsive', 'hover', 'dark'],
    },
  },
  plugins: [],
}
