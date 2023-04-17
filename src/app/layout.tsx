import React from 'react'
import { Poppins } from 'next/font/google';

import './globals.css'

const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin']
});

export const metadata = {
    title: 'Traversy Media',
    description: 'Web development tutorial',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={ poppins.className }>
                <main>
                    <main className='container'>
                        {children}
                    </main>
                </main>
            </body>
        </html>
    )
}
