import { GrassGraph } from '@/entities/statistics'
import { ScheduleCalendar, TodaySchedule } from '@/features/calendar'

export function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center gap-4 px-40 py-10">
            <ScheduleCalendar />
            <div className="flex w-full flex-row items-center gap-4">
                <TodaySchedule />
                <GrassGraph />
            </div>
        </div>
    )
}
