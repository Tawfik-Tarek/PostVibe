import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: "#0A6526",
                // primary: "#4B6BFB",
                nav: "#3B3C4A",
            },
            padding: {
                sm: "3.5rem",
                md: "4.5rem",
                lg: "5.5rem",
                xl: "6.5rem",
            },
        },
    },
    plugins: [],
};
