'use client'
import { useState } from 'react'
import DarkIcon from './assets/dark-mode.svg'
import LightIcon from './assets/light-mode.svg'

export function DarkModeButton() {
    const [darkMode, setDarkMode] = useState(false)
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        document.documentElement.classList.toggle('dark', !darkMode)
    }
    return (
        <button className="flex flex-row items-center justify-between rounded-lg p-4 text-sm font-medium text-[#6B6B6B]">
            <div className="flex flex-row gap-2">
                {darkMode ? <DarkIcon className="h-4 w-4" /> : <LightIcon className="h-4 w-4" />}
                다크모드
            </div>
            <div className="rounded" onClick={toggleDarkMode}>
                <div className="border-background-secondary relative flex h-6 w-12 cursor-pointer items-center justify-center rounded-full bg-[#E5E5E5] transition-colors duration-300 dark:bg-green-400">
                    <div className={`absolute h-4 w-4 rounded-full bg-white p-1 transition-all duration-300 ease-in-out ${darkMode ? 'left-[58%]' : 'left-[8%]'} `} />
                </div>
            </div>
        </button>
    )
}
