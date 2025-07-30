import { HeadText } from '@/shared/ui/Text/HeadText'
import { useMemo } from 'react'
import { getColorForCount } from '../lib/getColorForCount'
import { GoGraph } from 'react-icons/go'

export function GrassGraph() {
    const activityData: { [key: string]: number } = useMemo(() => {
        const data: { [key: string]: number } = {}
        const today = new Date()
        const daysToShow = 330
        for (let i = 0; i < daysToShow; i++) {
            const date = new Date(today)
            date.setDate(today.getDate() - i)
            const dateString = date.toISOString().split('T')[0]
            if (Math.random() > 0.5) {
                data[dateString] = Math.floor(Math.random() * 20)
            }
        }
        return data
    }, [])

    const { days, monthLabels } = useMemo(() => {
        const today = new Date()
        const daysArray = []
        const monthLabels: { label: string; colStart: number }[] = []
        let currentMonth = -1

        const startDate = new Date()
        startDate.setDate(today.getDate() - 329)

        const dayOfWeek = startDate.getDay()
        for (let i = 0; i < dayOfWeek; i++) {
            daysArray.push(null)
        }

        for (let i = 0; ; i++) {
            const date = new Date(startDate)
            date.setDate(startDate.getDate() + i)

            if (date > today) break

            daysArray.push(date)

            if (date.getMonth() !== currentMonth) {
                currentMonth = date.getMonth()
                monthLabels.push({
                    label: date.toLocaleString('default', { month: 'short' }),
                    colStart: Math.floor(daysArray.length / 7) + 1
                })
            }
        }

        return { days: daysArray, monthLabels }
    }, [])

    return (
        <div className="flex w-full flex-col items-center justify-center gap-4 py-10">
            <HeadText>
                <GoGraph />
                활동 통계
            </HeadText>
            <div className="border-border-primary text-text-primary flex w-full flex-col items-start rounded-xl border p-6">
                <div className="mb-1 grid auto-cols-[16px] grid-flow-col gap-1" style={{ gridTemplateRows: 'auto' }}>
                    {monthLabels.map(({ label, colStart }) => (
                        <div key={label + colStart} className="text-text-secondary text-xs whitespace-nowrap" style={{ gridColumnStart: colStart }}>
                            {label}
                        </div>
                    ))}
                </div>

                <div className="flex gap-2">
                    <div className="mt-0.5text-text-secondary flex flex-col justify-around gap-1 text-xs">
                        <span className="h-4 text-red-500">일</span>
                        <span className="text-text-secondary h-4">월</span>
                        <span className="text-text-secondary h-4">화</span>
                        <span className="text-text-secondary h-4">수</span>
                        <span className="text-text-secondary h-4">목</span>
                        <span className="text-text-secondary h-4">금</span>
                        <span className="h-4 text-blue-500">토</span>
                    </div>

                    <div className="grid grid-flow-col grid-rows-7 gap-1">
                        {days.map((day, index) => {
                            if (!day) {
                                return <div key={`empty-${index}`} className="h-4 w-4 rounded-sm" />
                            }
                            const dateString = day.toISOString().split('T')[0]
                            const count = activityData[dateString] || 0
                            const colorClass = getColorForCount(count)

                            return <div key={dateString} className={`h-4 w-4 rounded-sm ${colorClass}`} title={`${dateString}: ${count}개의 활동`} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
