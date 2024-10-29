module.exports = {
  content: [
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  theme: {
    fontFamily: {
      thin: ['Brown-Thin'],
      light: ['Brown-Light'],
      display: ['Brown'],
      bold: ['Brown-Bold'],
      chalk: ['Chalk'],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontSize: {
      xs: ['14px', { lineHeight: '1.4' }],
      sm: ['15px', { lineHeight: '1.4' }],
      base: ['16px', { lineHeight: '1.4' }],
      lg: ['18px', { lineHeight: '1.4' }],
      xl: ['20px', { lineHeight: '1.4' }],
      '2xl': ['22px', { lineHeight: '1.4' }],
      '3xl': ['24px', { lineHeight: '1.4' }],
      '4xl': ['25px', { lineHeight: '1.4' }],
      '5xl': ['26px', { lineHeight: '1.4' }],
      '6xl': ['28px', { lineHeight: '1.4' }],
      '7xl': ['30px', { lineHeight: '1.4' }],
      '8xl': ['35px', { lineHeight: '1.4' }],
      '9xl': ['40px', { lineHeight: '1.4' }],
      '10xl': ['50px', { lineHeight: '1.4' }],
      '11xl': ['55px', { lineHeight: '1.2' }],
    },
    colors: {
      black: '#000000',
      white: '#ffffff',
      grey: '#E9EEF0',
      darkGrey: '#4A4A4B',
      red: '#CE2E49',
      blueTint: '#adc3cc',
    },
    extend: {
      spacing: {
        gutter: 'var(--gutter)',
        'space-s': 'var(--spaceSmall)',
        'space-m': 'var(--spaceMed)',
        'space-l': 'var(--spaceLarge)',
      },
      gridTemplateColumns: {
        14: 'var(--gutter) repeat(12, minmax(0, 1fr)) var(--gutter)',
      },
      gridColumnEnd: {
        14: '14',
        15: '15',
      },
      gridColumnStart: {
        14: '14',
        15: '15',
      },
      listStyleImage: {
        tick: "url('tick.png')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
};
