import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['var(--font-sofia-sans)', 'font-sans'],
                'mono': ['var(--font-roboto-mono)', 'font-mono'],
                'montserrat': ['var(--font-montserrat)']
            },
            colors: {
                'tiber': '#073042',
                'tusk': '#eff7cf',
                'eucalyptus': '#3ddc84',
                'pattens-blue': '#d7effe',
                'adc-orange': '#e4701c',
                'uga-red': '#c32a1c'
            },
            backgroundImage: {
                'android-developers': 'url(../images/top-background.png)'
            },
            borderWidth: {
                DEFAULT: '1px',
                '0': '0',
                '2': '2px',
                '3': '3px',
                '4': '4px',
                '6': '6px',
                '8': '8px',
            },
            transitionProperty: {
                'width': 'width',
                'height': 'height',
                'visibility': 'visibility'
            }
        },
    },
    plugins: [],
}
export default config
