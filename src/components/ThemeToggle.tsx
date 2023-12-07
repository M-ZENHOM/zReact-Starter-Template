import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage"
import { Icons } from "./Icons";
import { Button } from "./ui/Button";

function ThemeToggle() {
    const [theme, setTheme] = useLocalStorage<string>('theme', "dark")

    React.useEffect(() => {
        const d = document.documentElement;
        theme === 'dark' ? d.classList.add('dark') : d.classList.remove('dark')
    }, [theme])

    return <Button variant="outline" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>{theme === 'dark' ? <Icons.Sun /> : <Icons.Moon />}</Button>

}

export default ThemeToggle