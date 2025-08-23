import { DarkModeProvider } from '@/features/darkmode'
import { ReactQueryProvider } from './ReactQueryProvider'
import { UserProvider } from '@/features/kakaoLogin'

export function Provider({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <UserProvider>
            <DarkModeProvider>
                <ReactQueryProvider>{children}</ReactQueryProvider>
            </DarkModeProvider>
        </UserProvider>
    )
}
