/**
 * T - source object
 * V - value returned by mapping function
 */
export function mapObject<T extends {[key: string]: any}, V>(
    obj: T,
    mapFn: (item: T[keyof T]) => V,
): {[Property in keyof T]: V} {
    const result: {[key: string]: V} = {};

    for (const key of Object.keys(obj)) {
        result[key] = mapFn(obj[key]);
    }

    return result as {[Property in keyof T]: V};
}

export function notNullOrUndefined<T>(x: null | undefined | T): x is T {
    return x != null;
}

export function nameof<T>(name: Extract<keyof T, string>): string {
    return name;
}
