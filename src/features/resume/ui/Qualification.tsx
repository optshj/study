'use client'
import { useResumeItem } from '../api/Resume.mutation'
import { ResumeForm } from '../ui/ResumeForm'

export function Qualification() {
    const { items, addItem, deleteItem, editItem } = useResumeItem('qualification')
    return (
        <ResumeForm
            title="자격증"
            items={items}
            onClick={(arg1, arg2) => addItem({ id: '0', title: arg1, date: arg2 })}
            onEdit={(id, arg1, arg2) => editItem({ id, title: arg1, date: arg2 })}
            onDelete={(id) => deleteItem(id)}
            renderPrimary={(item) => item.date}
            renderSecondary={(item) => item.title}
        />
    )
}
