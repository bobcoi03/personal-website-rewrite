'use client';

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function MainBody({ children }) {
    function setInitialTheme() {
        // if true -> set "data-theme" : "light"
        const hasVisit = localStorage.getItem("visited")
    
        if (!hasVisit) {
            // default theme
            localStorage.setItem("visited", true)
            return "light"
        }
        return localStorage.getItem("data-theme")
    
    }
    
    const current_theme = setInitialTheme()

    return (
        <body 
            className={inter.className} 
            data-theme={current_theme}
            id="main-body"
        >
            {children}
        </body>
    )
}