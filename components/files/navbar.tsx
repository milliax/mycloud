'use client'
import { IconType } from "react-icons"
import { useEffect, useState } from 'react'
import {
    FaPlus,
    FaCloud
} from "react-icons/fa"
import { clsx } from 'clsx'
import Link from 'next/link'

import ProgressBar from '@components/ProgressBar'

export default function Navbar() {
    const [usage, setUsage] = useState<number>(0)
    const [usageLimit, setUsageLimit] = useState<number>(15)
                        
    const init = () => {
        // TODO: fetch usage and usageLimit
    }

    const handleNew = async () => {
        // TODO: create new file or folder
    }

    useEffect(() => {
        init();
    }, [])

    return (
        <div className="w-80 bg-slate-200 h-full flex flex-col">
            <div className="bg-neutral-50 w-20 h-12 rounded-md shadow-lg flex flex-row items-center self-center mt-5 cursor-pointer hover:bg-slate-100 hover:shadow-xl" onClick={() => {

            }}>
                <FaPlus className="text-black mx-2" />
                <p>
                    New
                </p>
            </div>
            <nav className="flex flex-col px-2 mt-3 space-y-3">
                <div className="flex flex-col space-y-1">
                    <LinkWithIcon selected={true} text="我的雲端硬碟" url="/files/drive" Icon={FaCloud} />
                </div>
                <div className="flex flex-col space-y-3">
                    <div className="flex flex-col space-y-1">
                        <LinkWithIcon text="與我共用" url="/files/share-with-me" Icon={FaCloud} />
                        <LinkWithIcon text="近期存取" url="/files/recent" Icon={FaCloud} />
                        <LinkWithIcon text="已加星號" url="/files/stared" Icon={FaCloud} />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <LinkWithIcon text="垃圾內容" url="/files/spam" Icon={FaCloud} />
                        <LinkWithIcon text="垃圾桶" url="/files/trash" Icon={FaCloud} />
                        <LinkWithIcon text="儲存空間" url="/files/storage" Icon={FaCloud} />
                    </div>
                </div>
                <div className="px-2 text-sm">
                    <ProgressBar progress={usage / usageLimit} />
                    <div className="mt-1">
                        空間使用量：{usage} GB
                    </div>
                    <div>
                        空間配額：{usageLimit} GB
                    </div>
                </div>
            </nav>
        </div>
    )
}

const LinkWithIcon = ({
    selected,
    text,
    url,
    Icon,
}: {
    selected?: boolean,
    text: string,
    url: string,
    Icon: IconType
}) => {
    return (
        <Link className={clsx(
            "rounded-full px-3 h-8 flex flex-row items-center cursor-pointer",
            selected && "bg-blue-200",
            selected || "hover:bg-slate-100 hover:shadow-xl"
        )} href={url}>
            <Icon className="text-black mx-2" />
            {text}
        </Link>
    )
}