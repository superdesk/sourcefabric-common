export function sortByMultipleCriteria<T>(
    array: Array<T>,

    // compare functions work identically to Array.sort
    ...compareFns: Array<(a: T, b: T) => number>
): Array<T> {
    return array.sort((a, b) => {
        for (const fn of compareFns) {
            const result = fn(a, b);

            if (result === -1 || result === 1) {
                return result;
            }
        }

        return 0;
    });
}
