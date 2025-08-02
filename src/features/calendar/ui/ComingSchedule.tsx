import { HeadText } from '@/shared/ui'
import { GoClock } from 'react-icons/go'
import { comingSchedules } from './ComingSchedule.data'
import React from 'react'

export function ComingSchedule() {
    const groupedSchedules = React.useMemo(() => {
        return comingSchedules.slice(0, 4).reduce(
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
        return Object.keys(groupedSchedules).sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
    }, [groupedSchedules])

    return (
        <div className="flex h-full max-w-72 flex-1 flex-col items-center gap-4">
            <HeadText>
                <GoClock />
                다가오는 일정
            </HeadText>
            <div className="border-border-primary flex h-full w-full flex-col items-center gap-2 rounded-lg border p-4">
                {sortedDates.length > 0 ? (
                    sortedDates.map((date) => (
                        <div key={date} className="h-full w-full px-2">
                            <div className="text-text-secondary flex items-center gap-2 font-semibold">
                                <div className="text-2xl font-bold">{new Date(date).getDate()}</div>
                                <div>일</div>
                                <div className="border-border-primary flex-1 border-t" />
                            </div>

                            {groupedSchedules[date].map((schedule) => (
                                <div key={schedule.id} className="flex w-full flex-row gap-4">
                                    <div className="flex flex-col items-center">
                                        <div className="text-text-secondary">{schedule.startTime}</div>
                                        <div className="text-text-secondary">{schedule.endTime}</div>
                                    </div>
                                    <div>
                                        <div className="flex flex-row items-center gap-2">
                                            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: schedule.color }} />
                                            <h3 className="text-text-primary text-base font-semibold">{schedule.name}</h3>
                                        </div>
                                        <p className="text-text-secondary text-sm">{schedule.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))
                ) : (
                    <div className="border-border-primary h-full w-full rounded-lg border p-4">일정이 없습니다.</div>
                )}
            </div>
        </div>
    )
}
