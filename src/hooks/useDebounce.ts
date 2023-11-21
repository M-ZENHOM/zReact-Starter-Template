import React from "react"

export function useDebounce<T>(value: T, delay: number) {
    const [debouncedValue, setDebouncedValue] = React.useState(value)

    React.useEffect(() => {
        const timeout = setTimeout(() => { setDebouncedValue(value) }, delay || 500)
        return () => clearTimeout(timeout)
    }, [value, delay])

    return debouncedValue
}