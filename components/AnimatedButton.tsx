"use client"

import Link from "next/link"
import { motion } from 'framer-motion'
import AnimateScale from "./animate/HoverScale"

export default function AnimatedButton({
    href,
    ...props
}: {
    href?: string,
    text: string,
    onClick?: () => void,
}) {
    if (href) {
        return (
            <Link href={href}>
                <Button {...props} />
            </Link>
        )
    }
    return <Button {...props} />
}

const Button = ({
    text,
    ...props
}: {
    text: string
}) => {
    return (
        <AnimateScale className="w-32 h-12 bg-sky-300 hover:bg-sky-500 flex justify-center items-center cursor-pointer text-black hover:text-white font-semibold rounded-lg"
            {...props}
        >
            {text}
        </AnimateScale>
        // <motion.div className=''
        //     {...props}
        //     initial={{ scale: 1 }}
        //     whileHover={{ scale: 1.1 }}
        // >
        //     {text}
        // </motion.div>
    )
}   