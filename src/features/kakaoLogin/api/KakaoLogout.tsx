import { NextResponse } from 'next/server'

export async function DELETE() {
    const response = NextResponse.json({ message: 'Logged out' })

    response.cookies.set('refresh_token', '', {
        maxAge: 0,
        path: '/',
        httpOnly: true
    })
    response.cookies.set('access_token', '', { maxAge: 0, path: '/', httpOnly: true })

    return response
}
