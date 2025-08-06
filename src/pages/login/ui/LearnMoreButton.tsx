import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/shared/ui/modal/dialog'

export function LearnMoreButton() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className={`w-[160px] cursor-pointer rounded-full border border-white/75 px-4 py-4 text-center text-sm font-medium text-white/75`}>자세히 알아보기</div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>소개</DialogTitle>
                    <DialogDescription>
                        learnRun은 AI를 활용하여 학습을 더 쉽고 빠르게 만들어주는 서비스입니다. <br />
                        <br />
                        <strong>주요 기능:</strong>
                        <ul className="list-disc pl-5">
                            <li>MarkDown형식의 학습내용 기록</li>
                            <li>AI 기반의 연습문제 생성</li>
                            <li>개인 포트폴리오 관리</li>
                        </ul>
                        <br />
                        learnRun을 통해 학습의 새로운 경험을 만나보세요!
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
