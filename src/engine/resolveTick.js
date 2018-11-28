/* resolve tick for a warrior */
module.exports = (warrior, game) => {
    if(warrior.ATB == 0) {
        return {...warrior, ATB: 100}
    }

    return {...warrior, ATB: Math.max(warrior.ATB - warrior.stats.speed, 0)}
}
