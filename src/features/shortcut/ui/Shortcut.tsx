import { MdOutlineShortcut } from 'react-icons/md'
import { HeadText } from '@/shared/ui'

export function Shortcut() {
    return (
        <div className="flex h-full flex-1 flex-col items-center gap-4">
            <HeadText>
                <MdOutlineShortcut />
                뭐넣지?
            </HeadText>
            <div className="border-border-primary flex h-full w-full flex-col items-center gap-2 rounded-lg border p-4">내용</div>
        </div>
    )
}
