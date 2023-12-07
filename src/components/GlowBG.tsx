import { FC } from 'react'
import { cn } from '../lib/utils'

interface GlowBGProps {
    className?: string
}

const GlowBG: FC<GlowBGProps> = ({ className }) => {
    return <div className={cn("absolute top-0 left-[50%] -translate-x-[50%] w-full md:w-[700px] h-[500px] bg-yellow-900/10 blur-3xl opacity-75 -z-10", className)} />
}

export default GlowBG