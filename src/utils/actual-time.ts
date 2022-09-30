export const getActualTime = () => {
    return new Date()
        .toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })
}