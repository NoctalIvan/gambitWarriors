/* calculates the damage on a warrior */
const randomRound = require('./../util/randomRound')

module.exports = (action, warrior, target) => {
    const physicalDamage = action.ratio.physical * warrior.stats.atk
    const magicalDamage = action.ratio.magical * warrior.stats.int

    return {
        physical: physicalDamage ? Math.max(1, randomRound(physicalDamage * physicalDamage / (physicalDamage + target.stats.def))) : 0,
        magical: magicalDamage ? Math.max(1, randomRound(magicalDamage * magicalDamage / (magicalDamage + target.stats.res))) : 0,
    }
}