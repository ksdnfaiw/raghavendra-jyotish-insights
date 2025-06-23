
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Traditional astrology colors
				saffron: {
					50: '#fff8e1',
					100: '#ffecb3',
					200: '#ffe082',
					300: '#ffd54f',
					400: '#ffca28',
					500: '#FF9933', // Primary saffron
					600: '#ff8f00',
					700: '#ff6f00',
					800: '#e65100',
					900: '#bf360c'
				},
				gold: {
					50: '#fefdf8',
					100: '#fdf9e7',
					200: '#fbf1c7',
					300: '#f7e6a1',
					400: '#f2d76b',
					500: '#D4AF37', // Primary gold
					600: '#c19b26',
					700: '#a08420',
					800: '#846d1c',
					900: '#6d5a19'
				},
				deepblue: {
					50: '#e8eaf6',
					100: '#c5cae9',
					200: '#9fa8da',
					300: '#7986cb',
					400: '#5c6bc0',
					500: '#3f51b5',
					600: '#3949ab',
					700: '#303f9f',
					800: '#283593',
					900: '#00008B' // Primary deep blue
				}
			},
			fontFamily: {
				'sans': ['Noto Sans', 'sans-serif'],
				'telugu': ['Noto Sans Telugu', 'sans-serif'],
				'cinzel': ['Cinzel', 'serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-200px 0'
					},
					'100%': {
						backgroundPosition: 'calc(200px + 100%) 0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'shimmer': 'shimmer 2s linear infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'mandala-pattern': "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><circle cx=\"50\" cy=\"50\" r=\"2\" fill=\"%23D4AF37\" opacity=\"0.1\"/></svg>')"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
