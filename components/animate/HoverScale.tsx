"use client"

import { motion } from 'framer-motion'

export default function AnimateScale({
    children,
    multiplier = 1.1,
    ...props
}: {
    children: React.ReactNode
    className?: string
    style?: React.CSSProperties
    multiplier?: number
}) {
    return <motion.div
        animate={{ scale: 1 }}
        whileHover={{ scale: multiplier }}
        {...props}
    >
        {children}
    </motion.div>
}