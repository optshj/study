import { cookies } from 'next/headers'

export async function GET() {
    const cookieStore = await cookies()
    const access_token = cookieStore.get('access_token')?.value

    if (!access_token) {
        return Response.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const res = await fetch('https://kapi.kakao.com/v2/user/me', {
        headers: {
            Authorization: `Bearer ${access_token}`
        },
        cache: 'no-store'
    })

    const data = await res.json()

    if (!res.ok) {
        return Response.json(data, { status: res.status })
    }

    return Response.json(data)
}
