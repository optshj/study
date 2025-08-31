'use client'
import { useResumeItem } from '../api/Resume.mutation'
import { ResumeForm } from '../ui/ResumeForm'

export function Award() {
    const { items, addItem, deleteItem, editItem } = useResumeItem('award')
    return (
        <ResumeForm
            title="수상"
            items={items}
            onClick={(arg1, arg2) => addItem({ id: '0', title: arg1, date: arg2 })}
            onDelete={(id) => deleteItem(id)}
            onEdit={(id, arg1, arg2) => editItem({ id, title: arg1, date: arg2 })}
            renderPrimary={(item) => item.date}
            renderSecondary={(item) => item.title}
        />
    )
}
