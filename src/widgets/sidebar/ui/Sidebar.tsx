import { DarkModeButton } from '@/features/darkmode'
import { KakaoLoginButton } from '@/features/kakaoLogin'
import { SidebarPageButton } from '@/features/sidebarbutton'
import { sidebarMenuItems } from './Sidebar.data'
import { Logo } from '@/entities/logo'
import { WasteBasket } from '@/features/wasteBasket/ui/WasteBasket'

export function Sidebar({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen">
            <div className="bg-primary fixed flex h-full w-64 flex-col justify-between p-4">
                <div className="flex flex-col gap-1">
                    <Logo />
                    {sidebarMenuItems.map((item) => (
                        <div key={item.href}>
                            <SidebarPageButton href={item.href} text={item.text} icon={item.icon} />
                            {item.children && (
                                <div className="mt-1 ml-8 flex flex-col">
                                    {item.children.map((child) => (
                                        <SidebarPageButton key={child.href} href={child.href} text={child.text} icon={child.icon} />
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="flex flex-col gap-2">
                    <WasteBasket />
                    <DarkModeButton />
                    <KakaoLoginButton />
                </div>
            </div>
            <div className="ml-64 flex-1 p-4">{children}</div>
        </div>
    )
}
