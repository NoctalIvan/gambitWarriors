// picks n random items in an array
import shuffleArray from 'shuffle-array'

export function pickRandom(array: any[], n: number): any[] {
    return shuffleArray(array, {copy: true}).slice(0, n || 1)
}
