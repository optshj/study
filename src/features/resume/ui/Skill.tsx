'use client'
import { useResumeItem } from '../api/Resume.mutation'
import { ResumeForm } from '../ui/ResumeForm'

export function Skill() {
    const { items, addItem, deleteItem, editItem } = useResumeItem('skill')
    return (
        <ResumeForm
            title="보유스킬"
            items={items}
            onClick={(arg1, arg2) => addItem({ id: '0', title: arg1, text: arg2 })}
            onEdit={(id, arg1, arg2) => editItem({ id, title: arg1, text: arg2 })}
            onDelete={(id) => deleteItem(id)}
            renderPrimary={(item) => item.title}
            renderSecondary={(item) => item.text}
        />
    )
}
