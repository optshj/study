import { FaTrashCan as Trash } from 'react-icons/fa6'
import { Popover } from '@/shared/ui'

export function WasteBasket() {
    return (
        <Popover content={<div className="text-text-primary">휴지통 기능은 현재 개발 중입니다.</div>} side="right">
            <div className={`text-text-primary hover:bg-bg-secondary flex cursor-pointer flex-row items-center justify-between rounded-lg p-4 text-sm font-medium`}>
                <div className="flex flex-row items-center gap-2">
                    <div className={`flex items-center justify-center`}>
                        <Trash />
                    </div>
                    {'휴지통'}
                </div>
            </div>
        </Popover>
    )
}
