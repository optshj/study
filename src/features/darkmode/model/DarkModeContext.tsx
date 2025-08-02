'use client'
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface DarkModeContextType {
    darkMode: boolean
    toggleDarkMode: () => void
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined)

export function DarkModeProvider({ children }: { children: ReactNode }) {
    const [darkMode, setDarkMode] = useState(false)

    const updateDarkClass = (isDark: boolean) => {
        if (isDark) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }

    const toggleDarkMode = () => {
        setDarkMode((prev) => {
            const newMode = !prev
            updateDarkClass(newMode)
            return newMode
        })
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            setDarkMode(true)
            updateDarkClass(true)
        } else {
            setDarkMode(false)
            updateDarkClass(false)
        }
    }, [])

    return <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>
}

export function useDarkMode() {
    const context = useContext(DarkModeContext)
    if (!context) {
        throw new Error('useDarkMode must be used within a DarkModeProvider')
    }
    return context
}
