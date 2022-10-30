/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		colors: {
			white: "hsl(0, 0%, 100%)",
			"dark-cyan": "hsl(183, 100%, 15%)",
			"dark-grayish-cyan": "hsl(186, 14%, 43%)",
			"grayish-cyan": "hsl(184, 14%, 56%)",
			"light-grayish-cyan": "hsl(185, 41%, 84%)",
			"very-light-grayish-cyan": "hsl(189, 41%, 97%)",
		},

		spacing: {
			// 0: "0px",
			// 1: "1px",
			// 4: "4px",
			// 8: "8px",
			// 12: "12px",
			// 16: "16px",
			// 20: "20px",
			// 24: "24px",
			// 28: "28px",
			// 32: "32px",
			// 36: "36px",
			// 40: "40px",
			// 48: "48px",
			// 56: "56px",
			// 64: "64px",
			// 96: "96px",
			// 120: "120px",
			// 300: "300px",
			// full: "100%",
		},

		fontSize: {
			// sm: "14px",
			// base: "16px",
			// lg: "18px",
			// xl: "20px",
			// "2xl": "24px",
			// "3xl": "32px",
			// "4xl": "40px",
			// "5xl": "64px",
		},

		// Font weights
		// 300 - font-light
		// 600 - font-semibold
		// 800 - font-extrabold

		extend: {},
	},

	plugins: [],
};
