import { IntroductionCarousel } from '@/entities/introduction'
import { GrassGraph } from '@/entities/statistics'
import { ScheduleCalendar, ComingSchedule } from '@/features/calendar'
import { Shortcut } from '@/features/shortcut'

export function HomePage() {
    return (
        <>
            <div className="flex w-full gap-4">
                <IntroductionCarousel />
                <Shortcut />
            </div>
            <div className="flex h-full w-full items-stretch gap-4">
                <ScheduleCalendar />
                <ComingSchedule />
            </div>
            <GrassGraph />
        </>
    )
}
