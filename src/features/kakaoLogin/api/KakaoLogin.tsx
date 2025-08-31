import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
    const url = new URL(req.url)
    const code = url.searchParams.get('code')
    if (!code) {
        return NextResponse.redirect(new URL('/', req.url))
    }
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
    // const apiRes = await fetch(`${process.env.API_URL}/user/login`, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ kakaoId: '123456789' })
    // })
    // const apiData = await apiRes.json()
    const tokenData = await tokenRes.json()

    const refreshExpire = new Date(Date.now() + tokenData.refresh_token_expires_in * 1000)
    const accessExpire = new Date(Date.now() + tokenData.expires_in * 1000)
    const response = NextResponse.redirect(new URL('/', req.url))
    response.cookies.set('refresh_token', tokenData.refresh_token, { httpOnly: true, path: '/', expires: refreshExpire })
    response.cookies.set('access_token', tokenData.access_token, { httpOnly: true, path: '/', expires: accessExpire })

    // response.cookies.set('id', apiData.accessToken, { httpOnly: true, path: '/', expires: accessExpire })
    return response
}
