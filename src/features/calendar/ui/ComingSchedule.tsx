import { HeadText } from '@/shared/ui'
import { GoClock } from 'react-icons/go'
import { comingSchedules } from './ComingSchedule.data'
import React from 'react'

export function ComingSchedule() {
    const groupedSchedules = React.useMemo(() => {
        return comingSchedules.reduce(
            (acc, schedule) => {
                const date = schedule.date
                if (!acc[date]) {
                    acc[date] = []
                }
                acc[date].push(schedule)
                return acc
            },
            {} as Record<string, typeof comingSchedules>
        )
    }, [])

    const sortedDates = React.useMemo(() => {
        return Object.keys(groupedSchedules)
            .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
            .slice(0, 4)
    }, [groupedSchedules])

    const sortedGroupedSchedules = React.useMemo(() => {
        const sortedGroup: Record<string, typeof comingSchedules> = {}
        sortedDates.forEach((date) => {
            sortedGroup[date] = groupedSchedules[date].slice().sort((a, b) => a.startTime.localeCompare(b.startTime))
        })
        return sortedGroup
    }, [groupedSchedules, sortedDates])

    return (
        <div className="flex w-full flex-1 flex-col items-center gap-4">
            <HeadText>
                <GoClock />
                다가오는 일정
            </HeadText>

            <div className="border-border-primary flex h-full w-full gap-4 overflow-x-auto rounded-lg border p-4">
                {sortedDates.length > 0 ? (
                    <div className="flex flex-row space-x-6">
                        {sortedDates.map((date) => (
                            <div key={date} className="flex min-w-[140px] flex-col">
                                <div className="border-border-primary text-text-secondary mb-2 flex items-baseline gap-2 border-b pb-1 font-semibold">
                                    <div className="text-4xl font-bold">{new Date(date).getDate()}</div>
                                    <div>일</div>
                                </div>
                                {sortedGroupedSchedules[date].map((schedule) => (
                                    <div key={schedule.id} className="mb-3 flex flex-col gap-1">
                                        <div className="flex items-center gap-2">
                                            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: schedule.color }} />
                                            <h3 className="text-text-primary text-base font-semibold">{schedule.name}</h3>
                                        </div>
                                        <div className="text-text-secondary text-sm">{`${schedule.startTime} - ${schedule.endTime}`}</div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="border-border-primary h-full w-full rounded-lg border p-4 text-center">일정이 없습니다.</div>
                )}
            </div>
        </div>
    )
}
