"use client"

import Image from 'next/image'
import clsx from 'clsx'
import React from 'react'
import AnimatedButton from '@components/AnimatedButton'
import AnimateScale from '@components/animate/HoverScale'
import toaster from '../libs/toast'



export default function Home() {
    const username = 'user'
    const weather = '晴'
    return (
        <React.Fragment>
            <main className={clsx(
                'w-full bg-blue-100 items-center py-20 flex flex-col space-y-16'
            )}>
                <div className='lg:w-[60rem] md:w-[40rem] w-[20rem] grid md:grid-cols-3 grid-cols-1 gap-10'>
                    <Card className='space-y-5'>
                        <Image src='/vercel.svg' width={150} height={150} alt='user image' />
                        <h2 className='text-lg font-bold'>{`Hola, ${username}!`}</h2>
                        <div>
                            <h3>{`今日天氣 ${weather}`}</h3>
                        </div>
                    </Card>
                    <Card width='md'>
                        本日星座
                    </Card>
                    <Card width='md'>
                        便利貼
                    </Card>
                    <Card width='sm'>
                        訊息
                    </Card>
                </div>
                <AnimatedButton
                    text={'自定'}
                    onClick={() => {
                        toaster.info('功能未開放')
                    }}
                />
            </main>
            <div className='w-full h-20 bg-gray-200 flex flex-row justify-center items-center'>
                Milliax Mycloud
            </div>
        </React.Fragment>
    )
}


const Card = ({
    height = 20,
    width = 'sm',
    children,
    className,
}: {
    height?: number,
    width?: 'sm' | 'md' | 'lg',
    children: React.ReactNode,
    className?: string,
}) => {
    return (
        <AnimateScale className={clsx(
            'bg-white rounded-lg hover:bg-neutral-50 hover:shadow-lg px-3 py-5',
            width === 'sm' ? 'md:col-span-1 col-span-2' : (width === 'md' ? 'col-span-2' : 'col-span-3'),
            className
        )} style={{
            height: `${height}rem`,
        }} multiplier={1.05}>
            {children}
        </AnimateScale>
    )
}