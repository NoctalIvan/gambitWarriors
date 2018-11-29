/* resolves an action on a target */
const getDamages = require('./getDamages')
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
                damages: getDamages({physical: action.warrior.stats.atk}, action.target),
                target: action.target
            }]
        default:
            throw 'unknown actionType : ' + action.type
    }
}