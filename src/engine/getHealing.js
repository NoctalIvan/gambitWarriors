/* calculates the healing effect of a spell */
const randomRound = require('./../util/randomRound')

module.exports = (action, warrior, target) => {
    let heal = 
        action.ratio.physical * warrior.stats.atk + 
        action.ratio.magical * warrior.stats.int
    
    if(!heal) return 0

    heal = Math.max(1, randomRound(heal))
    
    const remainingHP = target.stats.maxHp - target.stats.hp
    return Math.min(remainingHP, heal)
}