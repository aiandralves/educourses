const plugin = require("tailwindcss/plugin");

module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            important: true,
            container: {
                center: true,
                padding: "2rem",
                screens: {
                    sm: "640px",
                    md: "768px",
                    lg: "1024px",
                    xl: "1280px",
                },
            },
            fontFamily: {
                title: ["Urbanist, sans-serif"],
            },
            colors: {
                primary: "#525de0",
                accent: "#231f41",
                secondary: "#ffa31a",
                text: "#6f6b80",
                body: "#fbfefd",
            },
            boxShadow: {
                header: "0 4px 4px rgba(0, 0, 0, 0.1)",
                scroll: "0 2px 4px rgba(0, 0, 0, 0.1)",
            },
            backgroundImage: {
                home: "url('../img/01.jpg')",
            },
            gridTemplateColumns: {
                footer: "1fr 0.5fr 0.5fr 0.5fr",
            },
            maxWidth: {
                nav: "1024px"
            }
        },
    },
    plugins: [
        plugin(function ({ addComponents }) {
            addComponents({
                ".transition-4s": {
                    transition: ".4s",
                },
            });
        }),
    ],
};
