// randomly rounds a float - higher round up chances with higher decimal value
export = (nbr: number): number => {
    return Math.random() < nbr % 1 ? Math.floor(nbr) + 1 : Math.floor(nbr)
}
