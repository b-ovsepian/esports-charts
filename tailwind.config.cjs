/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundColor: {
                card: '#1a1a20',
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '0.5rem',
                md: '0.5rem',
                lg: '0.5rem',
                xl: '0.5rem',
            },
        },
    },
    screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
    },
    fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
    },
    plugins: [],
}
