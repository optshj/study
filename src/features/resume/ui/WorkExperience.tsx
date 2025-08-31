'use client'
import { useResumeItem } from '../api/Resume.mutation'
import { ResumeForm } from '../ui/ResumeForm'

export function WorkExperience() {
    const { items, addItem, deleteItem, editItem } = useResumeItem('workExperience')
    return (
        <ResumeForm
            title="경력사항"
            items={items}
            onClick={(arg1, arg2, arg3) => addItem({ id: '0', title: arg1, startDate: arg2, endDate: arg3 })}
            onEdit={(id, arg1, arg2, arg3) => editItem({ id, title: arg1, startDate: arg2, endDate: arg3 })}
            onDelete={(id) => deleteItem(id)}
            renderPrimary={(item) => item.startDate + (item.endDate ? ' ~ ' + item.endDate : '')}
            renderSecondary={(item) => item.title}
        />
    )
}
