export function formatTime(timeIso: string, localeCode: string) {
    return new Intl.DateTimeFormat(localeCode, {
        hour: 'numeric',
        minute: 'numeric',

        // only include seconds if they are included in timeIso
        second: timeIso.split(':').length > 2 ? 'numeric' : undefined,
    }).format(new Date(`1970-01-01 ${timeIso}`));
}
