export interface Schedule {
    id: number
    name: string
    startTime: string // "HH:mm" format, e.g. "09:30"
    endTime: string // "HH:mm" format, e.g. "10:30"
    date: string // "YYYY-MM-DD" format, e.g. "2025-08-10"
    color: string // HEX color code, e.g. "#FF6F61"
}

export const comingSchedules: Schedule[] = [
    {
        id: 1,
        name: '팀 회의',
        startTime: '10:00',
        endTime: '11:00',
        date: '2025-08-10',
        color: '#FF6F61'
    },
    {
        id: 6,
        name: '밥먹기',
        startTime: '12:00',
        endTime: '13:00',
        date: '2025-08-10',
        color: '#7e3730'
    },
    {
        id: 2,
        name: '프로젝트 마감',
        startTime: '18:00',
        endTime: '19:00',
        date: '2025-08-12',
        color: '#42A5F5'
    },
    {
        id: 3,
        name: '스터디 모임',
        startTime: '14:30',
        endTime: '16:00',
        date: '2025-08-15',
        color: '#66BB6A'
    },
    {
        id: 4,
        name: '개인 일정',
        startTime: '09:00',
        endTime: '10:00',
        date: '2025-08-18',
        color: '#FFA726'
    },
    {
        id: 5,
        name: '운동',
        startTime: '19:00',
        endTime: '20:00',
        date: '2025-08-20',
        color: '#AB47BC'
    }
]
