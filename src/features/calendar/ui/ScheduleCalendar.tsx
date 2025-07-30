'use client'
import { useState } from 'react'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import { isSameDay } from '../lib/isSameDay'
import { HeadText } from '@/shared/ui/text/HeadText'
import { IoCalendarOutline } from 'react-icons/io5'

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

    return (
        <>
            <HeadText>
                <IoCalendarOutline />
                일정
            </HeadText>
            <div className="border-border-primary text-text-primary flex w-full flex-col items-center rounded-xl border p-4">
                <div className="flex flex-row items-center gap-px">
                    <div className="cursor-pointer p-2">
                        <MdKeyboardArrowLeft size={20} onClick={handlePrevMonth} />
                    </div>
                    <div className="px-4 text-xl font-semibold">
                        {year}년 {displayMonth.toString().padStart(2, '0')}월
                    </div>
                    <div className="cursor-pointer p-2">
                        <MdKeyboardArrowRight size={20} onClick={handleNextMonth} />
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
                            return (
                                <div key={idx} className={`hover:bg-bg-primary box-border flex h-24 w-full flex-col rounded-xl py-1`}>
                                    <div
                                        className={`ml-2 flex h-8 w-8 items-center justify-center rounded-full ${isCurrentMonth ? `${isToday ? 'bg-emphasis text-white' : 'text-primary'}` : 'text-secondary'} `}
                                    >
                                        {date.getDate()}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
