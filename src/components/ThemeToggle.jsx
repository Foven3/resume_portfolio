import { Moon,Sun } from "lucide-react"
import { useEffect, useState } from "react"
import {cn} from "../lib/utils"

export const ThemeToggle = () =>{
    const [isDarkMode,setIsDarkMode] = useState(false)

    useEffect(()=>{
        const storedTheme = localStorage.getItem("theme")
        if(storedTheme === "dark"){
            setIsDarkMode(true)
            document.documentElement.classList.add("dark")
        }else{
            localStorage.setItem("theme","light")
            setIsDarkMode(false)
        }
    }, [])

    const toggleTheme = () =>{
        if (isDarkMode){
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme","light")
            setIsDarkMode(false)
        }else{
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme","dark")
            setIsDarkMode(true)
        }
    }

    return (
        <button
          onClick={toggleTheme}
          className={cn(
            "fixed max-sm:hidden top-5 left-1/2 -translate-x-1/2 z-50",
            "flex items-center w-16 h-8 rounded-full px-1",
            "bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
          )}
        >
        <span
            className={cn(
            "absolute w-6 h-6 flex items-center justify-center",
            "bg-white dark:bg-gray-900 rounded-full shadow-md transform transition-transform duration-300",
            isDarkMode ? "translate-x-8" : "translate-x-0"
            )}
        >
            {isDarkMode ? (
            <Moon className="h-4 w-4 text-blue-400" />
            ) : (
            <Sun className="h-4 w-4 text-yellow-400" />
            )}
        </span>
        </button>
      )
    }