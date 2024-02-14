/** @type {import('tailwindcss').Config} */

import type { Config } from 'tailwindcss';

module.exports = {
	// 1. Apply the dark mode class setting:
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('@tailwindcss/forms')]
} satisfies Config;
