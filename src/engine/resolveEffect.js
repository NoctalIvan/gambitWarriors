/* resolve an effect on the game */
const {effectTypes} = require('./../constants')
module.exports = (effect, game) => {
    switch(effect.type) {
        case effectTypes.WAIT:
            return
        case effectTypes.DAMAGE:
            effect.target.stats.hp = effect.target.stats.hp - (effect.damage.physical + effect.damage.magical)
            if(effect.target.stats.hp <= 0) {
                game.armies[effect.target.army] = game.armies[effect.target.army].filter(warrior => warrior.id !== effect.target.id)
            }
            return
        default:
            throw 'unknown effectType ' + effect.type
    }
}