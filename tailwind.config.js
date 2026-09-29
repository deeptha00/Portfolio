/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                base: "#0a0d12",
                surface: "#10141b",
                raised: "#151a23",
                line: "#232b37",
                fg: "#e7eaf0",
                dim: "#8a93a4",
                accent: "#2fc7b0",
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
                mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
            },
        },
    },
    plugins: [],
}
