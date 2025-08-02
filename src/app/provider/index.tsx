import { DarkModeProvider } from '@/features/darkmode'
import { ReactQueryProvider } from './ReactQueryProvider'

export function Provider({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <DarkModeProvider>
            <ReactQueryProvider>{children}</ReactQueryProvider>
        </DarkModeProvider>
    )
}
