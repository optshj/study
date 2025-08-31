import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/shared/ui/modal/dialog'
import { KakaoLoginButton } from '@/features/kakaoLogin'

export function GetStartedButton() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className={`text-text-primary w-[160px] cursor-pointer rounded-full border border-white bg-white px-4 py-3 text-center text-sm font-medium`}>시작하기</div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Get Started</DialogTitle>
                    <KakaoLoginButton className="my-4" />
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
