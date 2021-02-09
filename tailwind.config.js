module.exports = {
	purge: {
		content: [
			'./pages/**/*.{js, jsx, ts, tsx}',
			'./components/**/*.{js, jsx, ts, tsx},',
		],
		options: { safelist: [/data-theme$/] },
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				header: ['PT Sans', 'sans-serif'],
				paragraph: ['Lato', 'sans-serif'],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('daisyui'),
		require('tailwind-heropatterns')({
			variants: [],
			patterns: [],
			colors: {
				default: '#008080',
			},
			opacity: {
				default: 0.1,
			},
		}),
		require('@tailwindcss/typography'),
	],
	daisyui: {
		styled: true,
		themes: true,
		rtl: false,
	},
};
