import { KakaoCallback } from '@/features/kakaoLogin'
import { Suspense } from 'react'

export function AuthPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <KakaoCallback />
        </Suspense>
    )
}
