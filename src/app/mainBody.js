'use client';

import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function MainBody({ children }) {
    const [initialTheme, setInitialTheme] = useState("")

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const hasVisited = localStorage.getItem("visited")

            if (!hasVisited) {
                setInitialTheme("light")
            } else {
                setInitialTheme(localStorage.getItem("data-theme"))
            }
        }
    }, [])

    return (
        <body 
            className={inter.className} 
            data-theme={initialTheme}
            id="main-body"
        >
            {children}
        </body>
    )
}