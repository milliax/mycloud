import Image from 'next/image'
import clsx from 'clsx'
import React from 'react'

export default function Home() {
    const username = 'user'
    const weather = '晴'
    return (
        <React.Fragment>
            <main className={clsx(
                'w-full bg-blue-100 items-center py-20 flex flex-col space-y-16'
            )}>
                <div className='w-[60rem] grid grid-cols-3 gap-10'>
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
                <div className='w-32 h-12 bg-sky-300 hover:bg-sky-500 flex justify-center items-center cursor-pointer text-black hover:text-white font-semibold rounded-lg'>
                    自定
                </div>
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
        <div className={clsx(
            'bg-white rounded-lg hover:bg-neutral-50 hover:shadow-lg px-3 py-5',
            width === 'sm' ? 'col-span-1' : (width === 'md' ? 'col-span-2' : 'col-span-3'),
            className
        )} style={{
            height: `${height}rem`,
        }}>
            {children}
        </div>
    )
}