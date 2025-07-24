import { Sidebar } from '@/widgets/sidebar'

export default function Layout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return <Sidebar>{children}</Sidebar>
}
