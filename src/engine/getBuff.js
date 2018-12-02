/* calculates the buff on a warrior */
const randomRound = require('./../util/randomRound')

module.exports = (action, warrior, target) => {
    const totalRatio = action.ratio.physical * warrior.stats.atk + action.ratio.magical * warrior.stats.int
    const totalBuff = {}
    for(stat in action.buff){
        totalBuff[stat] = action.buff[stat] * totalRatio
    }

    return {...totalBuff, length: action.buff.length}
}