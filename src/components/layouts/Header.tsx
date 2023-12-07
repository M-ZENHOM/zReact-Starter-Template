import { NavLink, } from 'react-router-dom'
import { buttonVariants } from '../ui/Button'
import { cn } from '../../lib/utils'
import ThemeToggle from '../ThemeToggle'
import { siteConfig } from '../../config/site'
export default function Header() {
    return (
        <header className='w-full py-20 '>
            <div className='space-y-10 flex flex-col items-center'>
                <div className='space-y-3 text-center'>
                    <h1 className='text-2xl md:text-5xl font-extrabold tracking-wider'>{siteConfig.title}</h1>
                    <p className='text-foreground'>{siteConfig.description}</p>
                </div>
                <ul className='flex items-center space-x-4'>
                    <NavLink className={cn(buttonVariants({ variant: 'outline' }))} to="/" >Home</NavLink>
                    <NavLink className={cn(buttonVariants({ variant: 'outline' }))} to="/Components" >Components</NavLink>
                    <ThemeToggle />
                </ul>
            </div>
        </header>
    )
}
