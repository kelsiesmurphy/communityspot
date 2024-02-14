/** @type {import('tailwindcss').Config} */

import type { Config } from 'tailwindcss';

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [require('@tailwindcss/forms')]
} satisfies Config;
