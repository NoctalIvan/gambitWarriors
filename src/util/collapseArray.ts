// concats an array of arrays
export function collapse<T>(array: T[][]) : T[] {
    return array.reduce((arr, a) => arr.concat(a), [])
}

export function doubleCollapse<T>(array: T[][][]) : T[] {
    return collapse(collapse(array))
}