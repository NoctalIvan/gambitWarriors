// concats an array of arrays
export = (array: any[][] ): any[] => array.reduce((arr, a) => arr.concat(a), [])
