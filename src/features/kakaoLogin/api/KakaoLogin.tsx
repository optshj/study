import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
    const url = new URL(req.url)
    const code = url.searchParams.get('code')
    const tokenRes = await fetch('https://kauth.kakao.com/oauth/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            grant_type: 'authorization_code',
            client_id: process.env.KAKAO_REST_API_KEY!,
            redirect_uri: process.env.KAKAO_REDIRECT_URI!,
            code: code || ''
        })
    })

    const tokenData = await tokenRes.json()
    const response = NextResponse.redirect(new URL('/', req.url))
    response.cookies.set('access_token', tokenData.access_token, { httpOnly: true, path: '/' })
    return response
}
