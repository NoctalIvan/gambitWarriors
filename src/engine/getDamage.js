/* calculates the damage on a warrior */
const randomRound = require('./../util/randomRound')

module.exports = (damage, warrior) => {
    return {
        physical: damage.physical ? Math.max(1, randomRound(damage.physical * damage.physical / (damage.physical + warrior.stats.def))) : 0,
        magical: damage.magical ? Math.max(1, randomRound(damage.magical * damage.magical / (damage.magical + warrior.stats.res))) : 0,
    }
}