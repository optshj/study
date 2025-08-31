export function getPeriodDisplay(data: { startDate?: string; endDate?: string }) {
    if (data.startDate && data.endDate) return `${data.startDate} ~ ${data.endDate}`

    if (data.startDate && !data.endDate) return `${data.startDate}`

    return `기간 미정`
}
