// randomly rounds a float - higher round up chances with higher decimal value
export function randomRound (nbr: number): number {
    return Math.random() < nbr % 1 ? Math.floor(nbr) + 1 : Math.floor(nbr)
}
