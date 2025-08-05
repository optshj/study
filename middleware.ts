import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
    console.log('Middleware triggered for:', request.nextUrl.pathname)
    const token = request.cookies.get('access_token')?.value

    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
      !주의!
      - 로그인 필요 없는 페이지(/login, /public, /api 등)는 반드시 여기서 예외!
      - 아래 예시는 모든 경로에 적용하면서, /login 등은 제외
    */
        '/((?!login|api|_next/static|_next/image|favicon.ico).*)'
    ]
}
