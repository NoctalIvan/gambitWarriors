/* resolves an action on a target */
const getDamage = require('./getDamage')
const {actionTypes, effectTypes} = require('../constants')

module.exports = (action, game) => {
    switch(action.type) {
        case actionTypes.WAIT:
            return [{
                type: effectTypes.WAIT,
                target: action.target
            }]
        case actionTypes.ATTACK:
            return [{
                type: effectTypes.DAMAGE,
                damage: getDamage({physical: action.warrior.stats.atk}, action.target),
                target: action.target
            }]
        default:
            throw 'unknown actionType : ' + action.type
    }
}