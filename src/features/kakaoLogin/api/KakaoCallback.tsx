'use client'
import { useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

export function KakaoCallback() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const code = searchParams!.get('code')

    useEffect(() => {
        if (code) {
            const loginWithKakao = async (authCode: string) => {
                try {
                    const params = new URLSearchParams({
                        grant_type: 'authorization_code',
                        client_id: process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY!,
                        redirect_uri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI!,
                        code: authCode
                    })

                    const response_token = await fetch('https://kauth.kakao.com/oauth/token', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                        },
                        body: params.toString()
                    })
                    if (!response_token.ok) {
                        throw new Error('토큰 요청 실패')
                    }
                    const { access_token } = await response_token.json()
                    const response_user = await fetch('https://kapi.kakao.com/v2/user/me?property_keys=["kakao_account.profile"]', {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${access_token}`
                        }
                    })

                    if (response_user.ok) {
                        const user = await response_user.json()
                        console.log('카카오 로그인 성공:', user)
                        router.push('/')
                    } else {
                        const errorData = await response_user.json()
                        console.error('카카오 로그인 처리 실패:', errorData.message)
                        router.push('/login')
                    }
                } catch (error) {
                    console.error('API 요청 중 에러 발생:', error)
                }
            }

            loginWithKakao(code)
        }
    }, [code, router])

    return (
        <div>
            <p>카카오 로그인 처리 중입니다...</p>
        </div>
    )
}
