import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'

function getEndpoint(type: string, id?: string) {
    const baseUrl = process.env.API_URL
    const endpoints: Record<string, string> = {
        education: 'educations',
        skill: 'skil',
        project: 'project',
        workExperience: 'work-experiences',
        profile: 'profile',
        qualification: 'qualifications',
        award: 'awards'
    }
    const path = endpoints[type]
    if (!path) throw new Error('Invalid type')
    return `${baseUrl}/${path}${id ? `/${id}` : ''}`
}

// 임의의 access_token으로 id쿠키를 받음
async function getAccessToken() {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('id')
    if (!accessToken) {
        throw Response.json({ error: 'Unauthorized' }, { status: 400 })
    }
    return accessToken.value
}

// GET /api/resume/[type]
export async function GET(req: NextRequest, context: { params: Promise<{ type: string }> }) {
    const { type } = await context.params
    const accessToken = await getAccessToken()

    const response = await fetch(getEndpoint(type), {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        }
    })

    return Response.json(await response.json())
}

// POST /api/resume/[type]
export async function POST(req: NextRequest, context: { params: Promise<{ type: string }> }) {
    const { type } = await context.params
    const accessToken = await getAccessToken()

    const body = await req.json()
    console.log(body)
    const response = await fetch(getEndpoint(type), {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    console.log(response)
    return Response.json(await response.json())
}

// PUT /api/resume/[type]
export async function PUT(req: NextRequest, context: { params: Promise<{ type: string }> }) {
    const { type } = await context.params
    const accessToken = await getAccessToken()

    const body = await req.json()
    const { id, ...rest } = body
    if (!id) return Response.json({ error: 'ID is required' }, { status: 400 })

    const response = await fetch(getEndpoint(type, id), {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(rest)
    })

    return Response.json(await response.json())
}

// DELETE /api/resume/[type]
export async function DELETE(req: NextRequest, context: { params: Promise<{ type: string }> }) {
    const accessToken = await getAccessToken()
    const { type } = await context.params

    const body = await req.json()
    const { id } = body
    if (!id) return Response.json({ error: 'ID is required' }, { status: 400 })

    const response = await fetch(getEndpoint(type, id), {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        }
    })

    if (response.ok) {
        return Response.json({ message: `${type} deleted successfully` })
    }
    return Response.json({ error: `Failed to delete ${type}` }, { status: 500 })
}
