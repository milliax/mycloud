import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@components/Header'
import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'My Cloud',
    description: 'Generated by Milliax',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="zh-tw">
            <body className={clsx(
                inter.className,
                'h-[calc(100vh-3rem)]'
            )}>
                <Header />
                {children}
            </body>
        </html>
    )
}
