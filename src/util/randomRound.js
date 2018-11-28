// randomly rounds a float - higher round up chances with higher decimal value
module.exports = (nbr) => {
    return Math.random() < nbr % 1 ? Math.floor(nbr) + 1 : Math.floor(nbr)
}