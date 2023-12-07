"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from 'framer-motion'
// import clsx from "clsx"
// import  from 'react'
import { ToastContainer } from 'react-toastify';

export default function HeaderClient() {
    const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false)

    return (
        <React.Fragment>
            <div className="flex flex-row items-center relative">
                <div onClick={() => {
                    setIsOptionsOpen(p => !p)
                }} className="cursor-pointer z-50">
                    User Settings
                </div>
                <AnimatePresence>
                    {isOptionsOpen &&
                        <motion.div className="absolute top-12 bg-white w-full py-1.5 rounded-md px-1 z-50"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.1, delay: 0.1 }}
                        >
                            選項
                        </motion.div>}
                </AnimatePresence>
                {isOptionsOpen && <div onClick={() => { setIsOptionsOpen(false) }} className="fixed inset-0 z-40" />}
            </div>
            <div className="fixed z-50">
                <ToastContainer />
            </div>
        </React.Fragment>
    )
}