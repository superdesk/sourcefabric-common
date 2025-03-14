export function getMonthNames(localeName: string, monthFormat: 'short' | 'long') {
    return new Array(12)
        .fill(null)
        .map((_, i) => i)
        .map((monthIndex) =>
            new Intl.DateTimeFormat(localeName, {month: monthFormat}).format(new Date(Date.UTC(1970, monthIndex))),
        );
}
