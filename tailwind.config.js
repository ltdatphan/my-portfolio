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
                slideInLeft: {
                    '0%': {
                        transform: 'translateX(-150%)',
                    },
                    '100%': {
                        transform: 'translateX(0%)',
                    },
                },
                blob: {
                    '0%, 100%': {
                        transform: 'translate(0px, 0px) scale(1)',
                        borderRadius: '40% 60% 70% 30% / 40% 40% 60% 50%',
                    },
                    '25%': {
                        transform: 'translate(5px, -10px) scale(1.05)',
                        borderRadius: '60% 40% 50% 50% / 40% 40% 60% 60%',
                    },
                    '50%': {
                        transform: 'translate(0px, 0px) scale(1)',
                        borderRadius: '40% 60% 70% 30% / 40% 40% 60% 50%',
                    },
                    '75%': {
                        transform: 'translate(-5px, 10px) scale(0.95)',
                        borderRadius: '60% 40% 50% 50% / 40% 40% 60% 60%',
                    },
                },
            },
            animation: {
                reveal: 'reveal 700ms ease-in',
                fadeIn: 'fadeIn 750ms ease-in',
                fadeInSlow: 'fadeIn 2s ease-in',
                slideInLeft: 'slideInLeft 1.5s',
                blob: 'blob 8s infinite',
                blobSlow: 'blob 24s infinite',
                blobSlower: 'blob 48s infinite',
            },
        },
    },
    plugins: [],
    darkMode: 'class',
}
