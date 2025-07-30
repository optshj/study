'use client'
import { useState } from 'react'
import DarkIcon from './assets/dark-mode.svg'
import LightIcon from './assets/light-mode.svg'
import { SwitchButton } from '@/shared/ui'

export function DarkModeButton() {
    const [darkMode, setDarkMode] = useState(false)
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        document.documentElement.classList.toggle('dark', !darkMode)
    }
    return (
        <button className="flex flex-row items-center justify-between rounded-lg p-4 text-sm font-medium text-[#6B6B6B]">
            <div className="flex flex-row items-center gap-2">
                {darkMode ? <DarkIcon className="h-4 w-4" /> : <LightIcon className="h-4 w-4" />}
                <div className="text-text-primary">다크모드</div>
            </div>
            <SwitchButton checked={darkMode} onCheckedChange={toggleDarkMode} />
        </button>
    )
}
