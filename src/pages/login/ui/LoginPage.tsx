import { Hyperspeed } from '@/entities/background'
import { LearnMoreButton } from './LearnMoreButton'
import { GetStartedButton } from './GetStartedButton'

export function LoginPage() {
    return (
        <div className="relative h-screen w-screen bg-[#060010]">
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4">
                <div className="text-emphasis text-center text-4xl font-bold">LEARNRUN.</div>
                <div className="text-4xl font-bold text-white">Make Study Easier with AI</div>
                <div className="flex flex-row items-center gap-4 text-lg font-semibold text-white">
                    <GetStartedButton />
                    <LearnMoreButton />
                </div>
            </div>
            <Hyperspeed />
        </div>
    )
}
