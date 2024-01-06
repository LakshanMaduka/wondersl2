import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        'darkblow': ['var(--font-darkblow)'],
        'oleoscript':['oleo script', 'cursive']
      },
      colors:{
        darkblue: "#043263",
        lightblue: "#239EFE",
        ash:"#504E4E",
        white:"#FFFFFF",
        lightash:"#EAEAEB"
      },
      height:{
        '88vh': '88vh'
      },
    },
  },
  plugins: [],
}
export default config
