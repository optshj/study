export const getColorForCount = (count: number): string => {
    if (count === 0) return 'bg-gray-200 dark:bg-gray-800'
    if (count >= 1 && count < 5) return 'bg-level4'
    if (count >= 5 && count < 10) return 'bg-level3'
    if (count >= 10 && count < 15) return 'bg-level2'
    if (count >= 15) return 'bg-level1'
    return 'bg-gray-200 dark:bg-gray-800'
}
