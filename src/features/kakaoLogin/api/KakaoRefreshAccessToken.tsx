import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST() {
    const cookieStore = await cookies()
    const refresh_token = cookieStore.get('refresh_token')?.value

    if (!refresh_token) {
        return NextResponse.json({ error: 'Refresh token is required' }, { status: 400 })
    }

    try {
        const newAccessToken = await fetch('https://kauth.kakao.com/oauth/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                grant_type: 'refresh_token',
                client_id: process.env.KAKAO_REST_API_KEY!,
                refresh_token
            })
        })
        const data = await newAccessToken.json()
        if (newAccessToken.ok) {
            return NextResponse.json({ access_token: data.access_token, expires_in: data.expires_in })
        } else {
            return NextResponse.json({ error: data.error || 'Failed to refresh access token' }, { status: 500 })
        }
    } catch (error) {
        return NextResponse.json({ error: 'Failed to refresh access token' }, { status: 500 })
    }
}
