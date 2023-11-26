'use client'
import React from 'react'
import {
    FaFilter
} from "react-icons/fa"
import {
    IoMdMore
} from 'react-icons/io'

import { clsx } from 'clsx'

export default function FileList({
    files
}: {
    files: any[]
}) {
    files = [{
        id: 1,
        name: 'test',
        owner: 'test',
        lastModified: 'test',
        size: 'test'
    }, {
        id: 2,
        name: 'test2',
        owner: 'test2',
        lastModified: 'test2',
        size: 'test2'
    }]

    return (
        <div className="w-full h-full bg-slate-200">
            <div className="w-full h-full bg-neutral-50 rounded-xl px-3 py-5">
                <h1 className="text-3xl font-semibold">我的雲端硬碟</h1>
                <Filter />
                <div className="flex flex-col divide-y divide-slate-700">
                    <div className='grid grid-cols-5 px-3 pb-3'>
                        <div>檔案名稱</div>
                        <div>擁有者</div>
                        <div>上次修改時間</div>
                        <div>檔案大小</div>
                        <div>動作</div>
                    </div>

                    {files.map((file) => (
                        <div key={file.id} className='grid grid-cols-5 hover:bg-slate-200 cursor-default h-12 px-3'>
                            <div className='file_view_table_children'>{file.name}</div>
                            <div className='file_view_table_children'>{file.owner}</div>
                            <div className='file_view_table_children'>{file.lastModified}</div>
                            <div className='file_view_table_children'>{file.size}</div>
                            <div className='file_view_table_children'>
                                <IoMdMore className='hover:bg-neutral-100 rounded-full h-6 w-6 p-0.5 cursor-pointer' onClick={() => {
                                    console.log('show options')
                                }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const Filter = ({
    className
}: {
    className?: React.ReactNode
}) => {
    // file type, owner, last modified, size
    return (
        <div className={clsx(
            'h-12 flex flex-row items-center',
            className
        )}>
            <FaFilter />
        </div>
    )
}