// picks n random items in an array
const shuffleArray = require('shuffle-array')

export function pickRandom<T>(array: T[], n: number): T[] {
    return shuffleArray(array, {copy: true}).slice(0, n || 1)
}
