/* returns the gambit that matches a given situation */
const {actions} = require('../constants')

module.exports = (warrior, game) => {
    if(warrior.gambits.length === 0) {
        return {
            action: actions.WAIT
        }
    }

    if(warrior.gambits.length === 1) {
        return warrior.gambits[0]
    }

    throw 'unsupported gambit length > 1'
}