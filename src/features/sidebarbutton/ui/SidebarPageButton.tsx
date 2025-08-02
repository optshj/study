'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SidebarPageButtonProps {
    href?: string
    text?: string
    icon?: React.ReactNode
    className?: string
}
export function SidebarPageButton({ href, text, icon, className = '' }: SidebarPageButtonProps) {
    const pathname = usePathname()
    return (
        <Link
            href={href || '/'}
            className={`text-text-secondary flex flex-row items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold ${pathname === href ? 'bg-emphasis text-white' : 'hover:bg-bg-secondary'} ${className}`}
        >
            <div className="flex flex-row items-center gap-2">
                <div className={`flex items-center justify-center`}>{icon}</div>
                {text}
            </div>
        </Link>
    )
}
