// picks n random items in an array
const shuffleArray = require('shuffle-array')
module.exports = (array, n = 1) => {
    return shuffleArray(array, {copy: true}).slice(0, n)
}