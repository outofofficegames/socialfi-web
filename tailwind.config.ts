import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        pattern: "url('/bg-pattern.svg')",
      },
      colors: {
        layer1: '#000A35',
        layer2: '#011B48',
        primary: '#FFFF00',
        secondary: '#F97C00',
        BDpink: '#FF0090',
        BDlightblue: '#00FFF2',
        BDyellow: '#FFF800',
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
}
export default config
