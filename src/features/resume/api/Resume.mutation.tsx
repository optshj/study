import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { ResumePayloads } from './Resume.type'

const typeMap = {
    award: '수상',
    skill: '기술',
    profile: '프로필',
    education: '학력',
    project: '프로젝트',
    qualification: '자격증',
    workExperience: '경력'
}
export function useResumeItem<T extends keyof ResumePayloads>(type: T) {
    const queryClient = useQueryClient()
    const typeName = typeMap[type]

    const { data: items } = useQuery<ResumePayloads[T][]>({
        queryKey: [`resume${type}`],
        queryFn: async () => {
            const response = await fetch(`/api/resume/${type}`)
            if (!response.ok) throw new Error('Network response was not ok')
            const json = await response.json()
            return Array.isArray(json) ? json : []
        }
    })

    const addMutation = useMutation({
        mutationKey: [`add${type}`],
        mutationFn: async (body: ResumePayloads[T]) => {
            const response = await fetch(`/api/resume/${type}`, {
                method: 'POST',
                body: JSON.stringify(body)
            })
            toast.success(`${typeName}이(가) 추가되었습니다.`)
            if (!response.ok) throw new Error('Network response was not ok')
            return response.json()
        },
        onMutate: async (newItem: ResumePayloads[T]) => {
            await queryClient.cancelQueries({ queryKey: [`resume${type}`] })
            const previousData = queryClient.getQueryData<ResumePayloads[T][]>([`resume${type}`])
            if (previousData) {
                queryClient.setQueryData([`resume${type}`], [...previousData, newItem])
            }
            return { previousData }
        },
        onError: (_err, _variable, context?: { previousData?: ResumePayloads[T][] }) => queryClient.setQueryData([`resume${type}`], context?.previousData),
        onSettled: () => queryClient.invalidateQueries({ queryKey: [`resume${type}`] })
    })

    const deleteMutation = useMutation({
        mutationKey: [`delete${type}`],
        mutationFn: async (id: string) => {
            const response = await fetch(`/api/resume/${type}`, {
                method: 'DELETE',
                body: JSON.stringify({ id })
            })
            if (!response.ok) throw new Error('Network response was not ok')
            toast.success(`${typeName}이(가) 삭제되었습니다.`)
            return id
        },
        onMutate: async (id) => {
            await queryClient.cancelQueries({ queryKey: [`resume${type}`] })
            const previousData = queryClient.getQueryData<ResumePayloads[T][]>([`resume${type}`])
            if (previousData) {
                queryClient.setQueryData(
                    [`resume${type}`],
                    previousData.filter((item) => item.id !== id)
                )
            }
            return { previousData }
        },
        onError: (_err, _variable, context?: { previousData?: ResumePayloads[T][] }) => queryClient.setQueryData([`resume${type}`], context?.previousData),
        onSettled: () => queryClient.invalidateQueries({ queryKey: [`resume${type}`] })
    })

    const editMutation = useMutation({
        mutationKey: [`edit${type}`],
        mutationFn: async (body: ResumePayloads[T]) => {
            const response = await fetch(`/api/resume/${type}`, {
                method: 'PUT',
                body: JSON.stringify(body)
            })
            if (!response.ok) throw new Error('Network response was not ok')
            return response.json()
        },
        onMutate: async (updatedItem: ResumePayloads[T]) => {
            await queryClient.cancelQueries({ queryKey: [`resume${type}`] })

            const previousData = queryClient.getQueryData<ResumePayloads[T][]>([`resume${type}`])

            if (previousData && updatedItem.id) {
                queryClient.setQueryData(
                    [`resume${type}`],
                    previousData.map((item) => (item.id === updatedItem.id ? { ...item, ...updatedItem } : item))
                )
            }

            return { previousData }
        },
        onError: (_err, _variable, context?: { previousData?: ResumePayloads[T][] }) => {
            if (context?.previousData) {
                queryClient.setQueryData([`resume${type}`], context.previousData)
            }
        },
        onSuccess: () => {
            toast.success(`${typeName}이(가) 수정되었습니다.`)
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: [`resume${type}`] })
        }
    })
    return {
        items: items ?? [],
        addItem: addMutation.mutate,
        deleteItem: deleteMutation.mutate,
        editItem: editMutation.mutate
    }
}
