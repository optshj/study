'use client'
import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface User {
    id: number
    kakao_account: {
        email?: string
        profile?: {
            nickname?: string
        }
    }
}

interface UserContextType {
    user: User | null
    loading: boolean
    clearUser: () => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const clearUser = () => setUser(null)

    useEffect(() => {
        async function fetchUser() {
            try {
                const res = await fetch('/api/user/data', {
                    method: 'GET'
                })
                if (!res.ok) throw new Error('Not authenticated')
                const data = await res.json()
                setUser(data)
            } catch (e) {
                setUser(null)
            } finally {
                setLoading(false)
            }
        }
        fetchUser()
    }, [])

    return <UserContext.Provider value={{ user, loading, clearUser }}>{children}</UserContext.Provider>
}

export function useUser() {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error('useUser must be used within a UserProvider')
    }
    return context
}
