/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"almost-black": "var(--almost-black)",
				"gold": "var(--gold)"
			},
			fontFamily: {
				bigShouldersDisplay: ['Big Shoulders Display'],
				outfit: ['Outfit']
			},
		},
	},
	plugins: [],
};
