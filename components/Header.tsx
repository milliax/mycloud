import Link from "next/link"
import { IconType } from "react-icons"

import {
    FaHome,
    FaPhotoVideo,
    FaFolder,
    FaStickyNote,
    FaTasks
} from 'react-icons/fa'

import {
    FaMessage
} from 'react-icons/fa6'

export default function Header() {
    return (
        <nav className="flex flex-row h-12 bg-slate-200 justify-between px-3">
            <div className="group flex flex-row space-x-3 text-slate-600 ">
                <div className="flex flex-row items-center cursor-default text-black">
                    My Cloud
                </div>
                <LinkWithIcon text="Home" url="/" Icon={FaHome} />
                <LinkWithIcon text="Photos" url="/photos" Icon={FaPhotoVideo} />
                <LinkWithIcon text="Files" url="/files" Icon={FaFolder} />
                <LinkWithIcon text="Notes" url="/notes" Icon={FaStickyNote} />
                <LinkWithIcon text="Messages" url="/messages" Icon={FaMessage} />
                <LinkWithIcon text="Tasks" url="/tasks" Icon={FaTasks} />
            </div>
            <div className="flex flex-row items-center cursor-pointer">
                User Settings
            </div>
        </nav>
    )
}

const LinkWithIcon = ({
    text,
    url,
    Icon
}: {
    text: string,
    url: string,
    Icon: IconType
}) => {
    return (
        <Link href={url} passHref>
            <div className="text-sm w-12 h-full flex flex-col items-center justify-center hover:text-black">
                <Icon />
                <div className="group-hover:block hidden">
                    {text}
                </div>
            </div>
        </Link>
    )
}