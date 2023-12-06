import clsx from "clsx"

export default function ProgressBar ({
    progress
}: {
    progress: number
}) {
    
    return (
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className={clsx(
                "bg-blue-600 h-2.5 rounded-full",
            )} style={{width: `${Math.floor(progress*100)}%`}}/>
        </div>
    )
}