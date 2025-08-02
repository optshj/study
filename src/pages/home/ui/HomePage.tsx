import { IntroductionCarousel } from '@/entities/introduction'
import { GrassGraph } from '@/entities/statistics'
import { ScheduleCalendar, ComingSchedule } from '@/features/calendar'
import { Shortcut } from '@/features/shortcut'

export function HomePage() {
    return (
        <>
            <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-4 py-10">
                <div className="flex w-full gap-4">
                    <IntroductionCarousel />
                    <Shortcut />
                </div>
                <div className="flex h-full w-full items-stretch gap-4">
                    <ScheduleCalendar />
                    <ComingSchedule />
                </div>
                <GrassGraph />
            </div>
        </>
    )
}
