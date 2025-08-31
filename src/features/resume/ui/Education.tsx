'use client'
import { useResumeItem } from '../api/Resume.mutation'
import { ResumeForm } from '../ui/ResumeForm'

export function Education() {
    const { items, addItem, deleteItem, editItem } = useResumeItem('education')
    return (
        <ResumeForm
            title="학력"
            items={items}
            onClick={(arg1, arg2, arg3) => addItem({ id: '0', title: arg1, startDate: arg2, endDate: arg3 })}
            onDelete={(id) => deleteItem(id)}
            onEdit={(id, arg1, arg2, arg3) => editItem({ id, title: arg1, startDate: arg2, endDate: arg3 })}
            renderPrimary={(item) => item.startDate + (item.endDate ? ' ~ ' + item.endDate : '')}
            renderSecondary={(item) => item.title}
        />
    )
}
