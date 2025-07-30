import { GrassGraph } from '@/entities/statistics'
import { ScheduleCalendar, TodaySchedule } from '@/features/calendar'
export function HomePage() {
    return (
        <>
            <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-4 py-10">
                <ScheduleCalendar />
                <div className="flex w-full flex-row items-center gap-4">
                    <GrassGraph />
                </div>
                <TodaySchedule />
            </div>
        </>
    )
}
