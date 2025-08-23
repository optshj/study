import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
    const access_token = request.cookies.get('access_token')?.value
    const refresh_token = request.cookies.get('refresh_token')?.value

    if (!access_token || !refresh_token) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    const exp = getJwtExp(access_token)
    // access_token이 만료되었다면
    if (exp && exp * 1000 < Date.now()) {
        console.log('Access token expired!')
        const refreshExp = getJwtExp(refresh_token)
        // refresh_token이 만료가 안되었다면 access_token을 갱신
        if (refreshExp && refreshExp * 1000 > Date.now()) {
            return NextResponse.redirect(new URL('/api/auth/refresh', request.url))
        }
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}

// base64url decode 함수
function getJwtExp(token: string): number | null {
    try {
        const payloadBase64 = token.split('.')[1]
        const base64 = payloadBase64.replace(/-/g, '+').replace(/_/g, '/')
        const json = atob(base64)
        const payload = JSON.parse(json)
        return payload.exp ?? null
    } catch (e) {
        return null
    }
}

export const config = {
    matcher: ['/((?!login|api|_next/static|_next/image|favicon.ico).*)']
}
