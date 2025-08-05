import Link from 'next/link'
import KakaoLogo from './assets/kakao-logo.svg'
import { cookies } from 'next/headers'
import { KakaoLogoutButton } from './KakaoLogoutButton'

export async function KakaoLoginButton({ className }: { className?: string }) {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('access_token')?.value

    if (accessToken) {
        return <KakaoLogoutButton />
    }
    return (
        <Link
            href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`}
            className={` ${className} flex flex-row items-center gap-2 rounded-lg bg-[#FEE500] p-4 text-sm font-medium text-[#3C1E1E]`}
        >
            <KakaoLogo className="h-4 w-4" />
            카카오로 시작하기
        </Link>
    )
}
