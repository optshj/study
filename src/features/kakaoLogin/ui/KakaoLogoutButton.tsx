'use client'
import { IoIosLogOut } from 'react-icons/io'
export function KakaoLogoutButton() {
    const handleLogout = async () => {
        const res = await fetch('/api/auth/logout', { method: 'DELETE' })
        if (res.ok) {
            window.location.href = '/'
        }
    }

    return (
        <div
            className={`text-text-primary flex cursor-pointer flex-row items-center justify-between rounded-lg p-4 text-sm font-medium transition-colors duration-300 hover:bg-red-400 hover:text-white`}
            onClick={handleLogout}
        >
            <div className="flex flex-row items-center gap-2">
                <div className={`flex items-center justify-center`}>
                    <IoIosLogOut />
                </div>
                {'로그아웃'}
            </div>
        </div>
    )
}
