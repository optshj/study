import KakaoLogo from './assets/kakao-logo.svg'

export function KakaoLoginButton() {
    return (
        <button className="flex flex-row items-center gap-2 rounded-lg bg-[#FEE500] p-4 text-sm font-medium text-[#3C1E1E]">
            <KakaoLogo className="h-4 w-4" />
            카카오 로그인
        </button>
    )
}
