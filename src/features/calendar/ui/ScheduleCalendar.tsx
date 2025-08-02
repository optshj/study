'use client'
import { useState } from 'react'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import { isSameDay } from '../lib/isSameDay'
import { IoCalendarOutline } from 'react-icons/io5'
import { HeadText } from '@/shared/ui'
import { comingSchedules } from './ComingSchedule.data'

export function ScheduleCalendar() {
    const [currentDate, setCurrentDate] = useState(new Date())
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const displayMonth = (month + 1) % 12 || 12
    const firstDayOfMonth = new Date(year, month, 1)
    const startDayOfWeek = firstDayOfMonth.getDay()

    const calendarStartDate = new Date(year, month, 1 - startDayOfWeek)
    const days: Date[] = []
    for (let i = 0; i < 42; i++) {
        const date = new Date(calendarStartDate)
        date.setDate(calendarStartDate.getDate() + i)
        days.push(date)
    }
    const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1))
    const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1))

    const scheduleCountMap = comingSchedules.reduce(
        (acc, sched) => {
            acc[sched.date] = (acc[sched.date] || 0) + 1
            return acc
        },
        {} as Record<string, number>
    )

    return (
        <div className="flex flex-col items-center gap-4">
            <HeadText>
                <IoCalendarOutline />
                일정
            </HeadText>
            <div className="border-border-primary text-text-primary flex h-full w-full flex-col items-center rounded-xl border p-4">
                <div className="flex w-full flex-row items-center justify-between">
                    <div className="px-2 text-2xl font-semibold">
                        {year} {displayMonth.toString().padStart(2, '0')}
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="hover:bg-bg-secondary cursor-pointer rounded-lg p-2" onClick={handlePrevMonth}>
                            <MdKeyboardArrowLeft size={20} />
                        </div>
                        <div className="hover:bg-bg-secondary cursor-pointer rounded-lg p-2" onClick={handleNextMonth}>
                            <MdKeyboardArrowRight size={20} />
                        </div>
                    </div>
                </div>
                <div className="overflow-hidde flex w-full flex-col">
                    <div className="grid grid-cols-7 text-center font-semibold">
                        {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
                            <div className="py-2" key={day}>
                                {day}
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                        {days.map((date, idx) => {
                            const isCurrentMonth = date.getMonth() === month
                            const isToday = isSameDay(new Date(), date)
                            const dateStr = date.toISOString().slice(0, 10)
                            const count = scheduleCountMap[dateStr] ?? 0
                            return (
                                <div key={idx} className={`hover:bg-bg-primary flex h-10 w-10 cursor-pointer flex-col items-center justify-center rounded-xl`}>
                                    <div
                                        className={`flex h-8 w-8 items-center justify-center rounded-lg ${isCurrentMonth ? `${isToday ? 'bg-emphasis text-white' : 'text-text-primary'}` : 'text-secondary'} `}
                                    >
                                        {date.getDate()}
                                    </div>
                                    <div className="mt-[2px] flex flex-row gap-[2px]">
                                        {Array.from({ length: count }).map((_, i) => (
                                            <div className="bg-emphasis h-2 w-2 rounded-full" key={i} />
                                        ))}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
