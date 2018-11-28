// picks a random item in an array
module.exports = (array) => {
    return array[Math.floor(Math.random() * array.length)]
}