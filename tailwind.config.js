/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"almost-black": "var(--almost-black)",
				"gold": "var(--gold)",
				"dark-grey": "var(--dark-grey)"
			},
			fontFamily: {
				bigShouldersDisplay: ['Big Shoulders Display', 'sans-serif'],
				outfit: ['Outfit', 'sans-serif']
			},
		},
	},
	plugins: [],
};
