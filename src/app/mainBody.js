'use client';

import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function MainBody({ children }) {
    return (
        <body 
            className={inter.className} 
            data-theme={"light"}
            id="main-body"
        >
            {children}
        </body>
    )
}