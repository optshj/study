import { Threads } from '@/entities/background'
import { KakaoLoginButton } from '@/features/kakaoLogin'
import { LearnMoreButton } from './LearnMoreButton'
import { GetStartedButton } from './GetStartedButton'
import { Modal } from '@/shared/ui'

export function LoginPage() {
    return (
        <div className="relative h-screen w-screen bg-[#060010]">
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4">
                <div className="text-emphasis text-center text-4xl font-bold">learnRun.</div>
                <div className="text-4xl font-bold text-white">Make Study Easier with AI</div>
                <div className="flex flex-row items-center gap-2 text-lg font-semibold text-white">
                    <Modal trigger={<GetStartedButton />} title="로그인" className="bg-[#060010]">
                        <KakaoLoginButton className="my-4" />
                    </Modal>
                    <Modal trigger={<LearnMoreButton />} className="bg-[#060010]">
                        <div className="text-lg">
                            learnRun은 공부한것을 기록하고, <br />
                            AI와 함께하는 학습을 지원합니다. <br />
                            또한 포트폴리오 기능을 통해 나만의 학습 기록을 쉽게 관리할 수 있습니다.
                        </div>
                    </Modal>
                </div>
            </div>
            <Threads amplitude={0.4} distance={0} enableMouseInteraction={true} />
        </div>
    )
}
