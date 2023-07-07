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
                /* portfolio */
                LightOrange: ("#FF725E"),
                DarkOrange: ("#B35042"),
                LightGrayish: ("#E0E0E0"),
                SemiGrayish: ("#455A64"),
                DarkGrayish: ("#263238"),

                /* Primary */
                DarkBlue: ("hsl(233, 26%, 24%)"),
                LimeGreen: ("hsl(136, 65%, 51%)"),
                BrightCyan: ("hsl(192, 70%, 51%)"),
        
                /* Neutral */
                GrayishBlue: ("hsl(233, 8%, 62%)"),
                LightGrayishBlue: ("hsl(220, 16%, 96%)"),
                VeryLightGray: ("hsl(0, 0%, 98%)"),
                White: ("hsl(0, 0%, 100%)"),

                AlmostWhite: 'hsl(0, 0%, 98%)',
                MediumGray: 'hsl(0, 0%, 41%)',
                AlmostBlack: 'hsl(0, 0%, 8%)'
            }
        },
    },
    plugins: [],
}