import { HeadText } from '@/shared/ui'
import { Carousel } from '@/shared/ui/carosel/Carosel'
import { RiQuestionMark } from 'react-icons/ri'

export function IntroductionCarousel() {
    return (
        <div className="flex h-full flex-1 flex-col items-center gap-4">
            <HeadText>
                <RiQuestionMark />
                주요 기능
            </HeadText>
            <Carousel interval={5000} className="h-full w-full flex-1 rounded-lg">
                <div className="text-text-primary relative flex h-64 w-full items-center justify-center bg-[#D1E3E7] text-2xl dark:bg-[#1E293B]">
                    <div className="absolute top-8 left-8 flex flex-col gap-1">
                        <span className="text-4xl font-semibold select-none">나만의 포트폴리오 관리</span>
                        <span className="text-text-secondary text-sm select-none">프로젝트, 경험, 결과물을 한 곳에서 손쉽게 정리하세요.</span>
                    </div>
                    <div className="absolute right-16 bottom-8">아이콘</div>
                </div>
                <div className="text-text-primary relative flex h-64 w-full items-center justify-center bg-[#97D6FF] text-2xl dark:bg-[#01479D]">
                    <div className="absolute top-8 left-8 flex flex-col gap-1">
                        <span className="text-4xl font-semibold select-none">AI가 만드는 맞춤 문제</span>
                        <span className="text-text-secondary text-sm select-none">사용자의 입력에 따라 다양한 문제를 생성합니다.</span>
                    </div>
                    <div className="absolute right-16 bottom-8">아이콘</div>
                </div>
                <div className="text-text-primary relative flex h-64 w-full items-center justify-center bg-[#E6F5D8] text-2xl dark:bg-[#2D6013]">
                    <div className="absolute top-8 left-8 flex flex-col gap-1">
                        <span className="text-4xl font-semibold select-none">캘린더에서 일정 추가</span>
                        <span className="text-text-secondary text-sm select-none">원하는 날짜를 클릭해 새로운 일정을 간편하게 등록할 수 있어요.</span>
                    </div>
                    <div className="absolute right-16 bottom-8">아이콘</div>
                </div>
            </Carousel>
        </div>
    )
}
