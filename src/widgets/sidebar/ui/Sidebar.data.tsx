import { GoHomeFill as Home } from 'react-icons/go'
import { FaTrashCan as Trash } from 'react-icons/fa6'
import { LuFileText as Index } from 'react-icons/lu'
import { FaRegAddressCard as Resume } from 'react-icons/fa6'
import { IoAddOutline as Add } from 'react-icons/io5'
export interface SidebarMenuItem {
    href: string
    text: string
    icon: React.ReactNode
    children?: SidebarMenuItem[]
}

const size = 16
export const sidebarMenuItems: SidebarMenuItem[] = [
    { href: '/', text: '홈', icon: <Home size={size} /> },
    { href: '/resume', text: '포트폴리오', icon: <Resume size={size} /> },
    {
        href: '/writing',
        text: '개인글',
        icon: <Index size={size} />,
        children: [{ href: '/writing', text: '개인글 추가', icon: <Add size={size} /> }]
    },
    { href: '/trash', text: '휴지통', icon: <Trash size={size} /> }
]
