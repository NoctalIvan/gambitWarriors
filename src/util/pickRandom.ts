// picks n random items in an array
import shuffleArray from 'shuffle-array'

export = (array: any[], n: number = 1): any[] => {
    return shuffleArray(array, {copy: true}).slice(0, n)
}
