const {targets} = require('../constants')
const pickRandom = require('../util/pickRandom')

/* returns the sected target */
module.exports = (target, warrior, game) => {
    if(target === targets.RANDOM_ENNEMY) {
        return pickRandom(game.armies[(warrior.army + 1) % 2])
    }

    if(target === targets.RANDOM_ALLY) {
        return pickRandom(game.armies[warrior.army])
    }

    throw 'not implemented target : ' + target
}