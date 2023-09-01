import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary-orange': '#FA7C56',
                'dark-blue': '#00254A',
                'faint-dark-blue': '#273150',
                'base-80': '#626262',
            },
            fontFamily: {
                header: ['var(--font-raleway)'],
                body: ['var(--font-poppins)'],
            },
            backgroundImage: {
                primary: 'linear-gradient(90deg, #FC8B4E 0%, #F86463 100%)',
            },
            zIndex: {
                'side-bar': '99',
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '20px',
                    // sm: '2rem',
                    // lg: '3rem',
                    // xl: '4rem',
                    // '2xl': '5rem',
                },
            },
        },
    },
    plugins: [],
};
export default config;
