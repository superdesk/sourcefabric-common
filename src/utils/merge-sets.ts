export function mergeSets<T>(...sets: Array<Set<T>>): Set<T> {
    const result = new Set<T>();

    for (const set of sets) {
        set.forEach((item) => {
            result.add(item);
        });
    }

    return result;
}
