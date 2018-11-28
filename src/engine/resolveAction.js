/* resolves an action on a target */
const {actionTypes} = require('./../constants')

module.exports = (target, action) => {
    switch(action) {
        case actionTypes.WAIT:
            return target
        case actionTypes.ATTACK:
            return target
    }
}