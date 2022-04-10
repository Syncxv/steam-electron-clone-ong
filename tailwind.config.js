module.exports = {
    content: ["./renderer/pages/**/*.{js,ts,jsx,tsx}", "./renderer/components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            gridTemplateColumns: {
                "auto-fit": "repeat(auto-fit, minmax(19rem, .1fr))",
            },
            colors: {
                "steam-700": "#202125",
                "steam-600": "#25272d",
                "steam-500": "#3e4047",
                "steam-blue-300": "#3e4e69",
                "steam-blue-500": "#292f3b",
            },
            spacing: {
                0.1: "1px",
                0.2: "2px",
            },
        },
    },
    plugins: [],
};
