'use client'
import DarkIcon from './assets/dark-mode.svg'
import LightIcon from './assets/light-mode.svg'
import { SwitchButton } from '@/shared/ui'
import { useDarkMode } from '../model/DarkModeContext'

export function DarkModeButton() {
    const { darkMode, toggleDarkMode } = useDarkMode()
    return (
        <div className="flex cursor-pointer flex-row items-center justify-between rounded-lg p-4 text-sm font-medium">
            <div className="flex flex-row items-center gap-2">
                {darkMode ? <DarkIcon className="h-4 w-4" /> : <LightIcon className="h-4 w-4" />}
                <div className="text-text-primary">다크모드</div>
            </div>
            <SwitchButton checked={darkMode} onCheckedChange={toggleDarkMode} />
        </div>
    )
}
