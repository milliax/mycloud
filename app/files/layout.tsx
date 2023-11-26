import React from "react"

import Navbar from "@components/files/navbar"

export default function FileLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <main className="flex flex-row h-full bg-neutral-100">
            <Navbar/>
            {children}
        </main>
    )
}