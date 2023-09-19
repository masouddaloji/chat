import { useEffect, useState } from "react"


const useTheme = () => {
    const [theme, setTheme] = useState<string>(localStorage.getItem("theme") || "light")

    useEffect(() => {
        if (!theme) {
            localStorage.setItem("theme", "light")
        }
        localStorage.setItem("theme", theme)
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        }else{
            document.documentElement.classList.remove("dark")
        }
    }, [theme])

    return ({ theme, setTheme })
}

export default useTheme