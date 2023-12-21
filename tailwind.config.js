/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'pale-white': '#f6f6f6',
                'dark-grey': '#191919',
            },
            fontFamily: {
                serif: [
                    'var(--font-ibm-plex-serif)',
                    'ui-serif',
                    'Georgia',
                    'Cambria',
                    'Times New Roman',
                    'Times',
                    'serif',
                ], // Ensure fonts with spaces have " " surrounding it.
                sans: [
                    'var(--font-inter)',
                    'ui-sans-serif',
                    'system-ui',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'Segoe UI',
                    'Roboto',
                    'Helvetica Neue',
                    'Arial',
                    'Noto Sans',
                    'sans-serif',
                    'Apple Color Emoji',
                    'Segoe UI Emoji',
                    'Segoe UI Symbol',
                    'Noto Color Emoji',
                ],
            },
            keyframes: {
                reveal: {
                    '0%': {
                        transform: 'translateY(100%)',
                        opacity: '0',
                        blur: '10px',
                    },
                    '100%': {
                        transform: 'translateY(0)',
                        opacity: '1',
                        blur: '0px',
                    },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                blob: {
                    '0%': {
                        transform: 'translate(0px, 0px) scale(1)',
                        borderRadius: '40% 60% 70% 30% / 40% 40% 60% 50%',
                    },
                    '25%': {
                        transform: 'translate(20px, -40px) scale(1.1)',
                        borderRadius: '70% 30% 50% 50% / 30% 30% 70% 70%',
                    },
                    '50%': {
                        transform: 'translate(-10px, 10px) scale(0.9)',
                        borderRadius: '100% 60% 60% 100% / 100% 100% 60% 60%',
                    },
                    '75%': {
                        transform: 'translate(10px, -20px) scale(1.1)',
                        borderRadius: '70% 30% 50% 50% / 30% 30% 70% 70%',
                    },
                    '100%': {
                        transform: 'translate(0px, 0px) scale(1)',
                        borderRadius: '40% 60% 70% 30% / 40% 40% 60% 50%',
                    },
                },
            },
            animation: {
                reveal: 'reveal 0.65s ease-in-out',
                fadeIn: 'fadeIn 1.25s ease-in-out',
                fadeInSlow: 'fadeIn 2s ease-in',
                blob: 'blob 24s infinite',
            },
        },
    },
    plugins: [],
    darkMode: 'class',
}
