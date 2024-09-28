/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./fsd/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./fsd/entities/**/*.{js,ts,jsx,tsx,mdx}',
		'./fsd/features/**/*.{js,ts,jsx,tsx,mdx}',
		'./fsd/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./fsd/pages-lk/**/*.{js,ts,jsx,tsx,mdx}',
		'./fsd/public/**/*.{js,ts,jsx,tsx,mdx}',
		'./fsd/root/**/*.{js,ts,jsx,tsx,mdx}',
		'./fsd/shared/**/*.{js,ts,jsx,tsx,mdx}',
		'./fsd/widget/**/*.{js,ts,jsx,tsx,mdx}',
		'./fsd/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./fsd/modules/**/*.{js,ts,jsx,tsx,mdx}',
		'./fsd/utils/**/*.{js,ts,jsx,tsx,mdx}',
		'./fsd/libs/**/*.{js,jsx,ts,tsx}',
	],
	darkMode: ['class'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '3rem',
				xl: '4rem',
				'2xl': '4rem',
				'3xl': '5rem',
			},
		},
		extend: {
			screens: {
				'4k': '1980px',
			},
		},
	},
	presets: [],
	plugins: [require('tailwindcss-animate')],
};
