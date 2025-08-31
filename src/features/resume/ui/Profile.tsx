'use client'
import { useResumeItem } from '../api/Resume.mutation'
import { ResumeForm } from '../ui/ResumeForm'

export function Profile() {
    const { items, addItem, deleteItem, editItem } = useResumeItem('profile')
    return (
        <ResumeForm
            title="프로필"
            items={items}
            onClick={(arg1, arg2) => addItem({ id: '0', name: arg1, email: arg2 })}
            onDelete={(id) => deleteItem(id)}
            onEdit={(id, arg1, arg2) => editItem({ id, name: arg1, email: arg2 })}
            renderPrimary={(item) => item.name}
            renderSecondary={(item) => item.email}
        />
    )
}
