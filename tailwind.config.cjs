/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
	theme: {
		extend: {
            colors: {
                "engineering-orange": "#B80C09",
                "sandy-brown": "#FF9B42",
            },
            fontFamily: {
                montserrat: ["Montserrat", 'sans-serif'], 
                averia: ["Averia Serif Libre", 'cursive'],
                h1: ["Krona One", 'sans-serif'],
                ny: ["NY\ Irvin", 'sans-serif'],
                philosopher: ['Philosopher', 'sans-serif'],
            },
            animation: {
                blob: "blob 4s infinite",
                redBlob: "redBlob 4s infinite",
            },
            keyframes: {
                blob: {
                    "0%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                    "33%": {
                        transform: "translate(30px, -50px) scale(1.2)",
                    },
                    "66%": {
                        transform: "translate(-20px, 20px) scale(0.9)",
                    },
                    "100%": {
                        transform: "translate(0px, 0px) scale(1.0)",
                    },
                },
                redBlob: {
                    "0%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                    "33%": {
                        transform: "translate(0px, 50px) scale(1.2)",
                    },
                    "66%": {
                        transform: "translate(0px, 90px) scale(0.9)",
                    },
                    "100%": {
                        transform: "translate(0px, 0px) scale(1.0)",
                    },
                },
            },
        },
	},
	plugins: [],
}
