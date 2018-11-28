const {targetTypes} = require('../constants')
const pickRandom = require('../util/pickRandom')

/* returns the sected target(s) */
module.exports = (target, warrior, game) => {
    switch(target) {
        case targetTypes.SELF:
            return [warrior]
        case targetTypes.RANDOM_ENNEMY:
            return [pickRandom(game.armies[(warrior.army + 1) % 2])]
        case targetTypes.RANDOM_ALLY:
            return [pickRandom(game.armies[warrior.army])]
        default:
            throw 'not implemented target : ' + target
    }
}