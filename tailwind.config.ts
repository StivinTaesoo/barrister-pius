import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                transGrey:
                    "linear-gradient(to bottom, transparent, 35%, #ffffff)",
            },
            backgroundColor: {
                bluePrimary: "#1F75FE",
                grey: "#9D9BA7",
            },
        },
    },
    plugins: [],
};
export default config;
