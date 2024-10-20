import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          10: '#001A42',
          20: '#002E6A',
          30: '#0F4490',
          40: '#315CA9',
          50: '#4D76C4',
          60: '#6890E0',
          70: '#83AAFD',
          80: '#AEC6FF',
          90: '#D8E2FF',
          95: '#EDF0FF',
        },
        secondary: {
          10: '#141B2C',
          20: '#293042',
          30: '#3F4759',
          40: '#575E72',
          50: '#6F778B',
          60: '#8990A5',
          70: '#A3ABC1',
          80: '#BFC6DD',
          90: '#DBE2F9',
          95: '#EEEDF4',
        },
        tertiary: {
          10: '#2A132D',
          20: '#402743',
          30: '#583E5B',
          40: '#715573',
          50: '#8C6D8D',
          60: '#A786A8',
          70: '#C2A0C3',
          80: '#DFBBDF',
          90: '#FCD7FC',
          95: '#FFEBFC',
        },
        customRed: {
          10: '#410002',
          20: '#690005',
          30: '#93000A',
          40: '#BA1A1A',
          50: '#DE3730',
          60: '#FF5449',
          70: '#FF897D',
          80: '#FFB4AB',
          90: '#FFDAD6',
          95: '#FFF8F7',
        },
        neutral: {
          10: '#191B23',
          20: '#2E3038',
          30: '#44474F',
          40: '#5C5E66',
          50: '#75777F',
          60: '#8E9099',
          70: '#A9ABB4',
          80: '#C5C6D0',
          90: '#E1E2EC',
          95: '#F9F9FF'
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
