import { cookies } from 'next/headers'

export async function KakaoCallback() {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('access_token')?.value

    let userInfo = null

    if (accessToken) {
        const userRes = await fetch('https://kapi.kakao.com/v2/user/me', {
            headers: { Authorization: `Bearer ${accessToken}` },
            cache: 'no-store'
        })
        if (userRes.ok) {
            userInfo = await userRes.json()
        }
    }

    return <pre>{JSON.stringify(userInfo, null, 2)}</pre>
}
