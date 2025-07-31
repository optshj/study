import { HeadText } from '@/shared/ui'

export function TodaySchedule() {
    return (
        <div className="flex w-full flex-1 flex-col items-center gap-4">
            <HeadText>오늘일정</HeadText>
            <div className="border-border-gray h-full w-full rounded-lg border"> 일정이 없습니다.</div>
        </div>
    )
}
