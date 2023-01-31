/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px'
        },

        extend: {
            colors: {
                AlmostWhite: 'hsl(0, 0%, 98%)',
                MediumGray: 'hsl(0, 0%, 41%)',
                AlmostBlack: 'hsl(0, 0%, 8%)'
            }
        },
    },
    plugins: [],
}