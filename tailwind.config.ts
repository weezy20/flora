import type { Config } from 'tailwindcss';
import daisyui from "daisyui"

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		extend: {
			colors: {
				main: '#FD9745',
				mainAccent: '#fc7303', // not needed for shadcn components
				overlay: 'rgba(0,0,0,0.8)', // background color overlay for alert dialogs, modals, etc.

				// light mode
				bg: '#fff4e0',
				text: '#000',
				border: '#000',

				// dark mode
				darkBg: '#272933',
				darkText: '#eeefe9',
				darkBorder: '#000',
				secondaryBlack: '#212121', // opposite of plain white, not used pitch black because borders and box-shadows are that color 
			},
			borderRadius: {
				base: '4px'
			},
			boxShadow: {
				light: '6px 6px 0px 0px #000',
				dark: '6px 6px 0px 0px #000',
			},
			translate: {
				boxShadowX: '6px',
				boxShadowY: '6px',
				reverseBoxShadowX: '-6px',
				reverseBoxShadowY: '-6px',
			},
			fontWeight: {
				base: '500',
				heading: '700',
			},
		},
	},

	plugins: [daisyui]
} satisfies Config;
