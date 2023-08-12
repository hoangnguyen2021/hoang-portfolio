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
                'mono': ['var(--font-roboto-mono)', 'font-mono']
            },
            colors: {
                'dark-cyan': '#073042',
            },
            backgroundImage: {
                'android-developers': 'url(./images/top-background.png)'
            }
        },
    },
    plugins: [],
}
export default config
