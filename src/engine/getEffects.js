/* resolves an action on a target */
const getDamage = require('./getDamage')
const getHealing = require('./getHealing')
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
                element: action.element,
                damage: getDamage(action, action.warrior, action.target),
                target: action.target
            }]
        case actionTypes.HEAL:
            return [{
                type: effectTypes.HEAL,
                element: action.element,
                heal: getHealing(action, action.warrior, action.target),
                target: action.target
            }]
        default:
            throw 'unknown actionType : ' + action.type
    }
}