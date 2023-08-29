/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {

            colors: {
                navBg: "#eae9e8",
                navGreen: "#FFBA00",
                sidebarBg: "#1e1d22",
                navGreenLight: "#879c49d1",
                dark: "#24272e",
                sidebarDark: "#1E1D22",
                sidebarDarkNew: "#3f3e3ee6",
                transparent:"#ffffff85",
            },
            invert: {
                25: '.25',
                50: '.5',
                75: '.75',
            }
        },
    },
    plugins: [
        require('tailwind-scrollbar')
    ],
}