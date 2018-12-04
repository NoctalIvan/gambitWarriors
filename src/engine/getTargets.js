const {targetTypes, armyTypes} = require('../types/enums')
const {pickRandom, copy} = require('../util')

/* returns the sected target(s) */
module.exports = (target, warrior, game) => {
    switch(target.type) {
        case targetTypes.SELF:
            return [warrior]
        case targetTypes.RANDOM:
            return pickRandom(getTargetArmy(target.army, warrior, game), target.n)
        case targetTypes.ALL:
            return getTargetArmy(target.army, warrior, game)
        case targetTypes.MIN_STAT:
            return copy(getTargetArmy(target.army, warrior, game))
                .sort((a, b) => a.stats[target.stat] - b.stats[target.stat])
                .slice(0, target.n)
        case targetTypes.MAX_STAT:
            return copy(getTargetArmy(target.army, warrior, game))
                .sort((a, b) => b.stats[target.stat] - a.stats[target.stat])
                .slice(0, target.n)
        default:
            throw 'not implemented target type : ' + target.type
    }
}

// util
const getTargetArmy = (armyType, warrior, game) => {
    switch(armyType) {
        case armyTypes.ALLY:
            return game.armies[warrior.army]
        case armyTypes.ENNEMY:
            return game.armies[(warrior.army + 1) % 2]
        case armyTypes.BOTH:
            return game.armies[0].concat(game.armies[1])
        default:
            throw 'unknown armyType ' + armyType
    }
}