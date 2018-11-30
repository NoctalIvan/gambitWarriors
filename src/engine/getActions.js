/* returns the gambit that a warrior should use */
const getGambitSelection = require('./getGambitSelection')
const getTargets = require('./getTargets')

module.exports = (warrior, game) => {
    if(warrior.ATB > 0) {
        return []
    }

    const gambit = getGambitSelection(warrior, game)
    const targets = getTargets(gambit.target, warrior, game)
    
    return [{
        warrior,
        type: gambit.actionType,
        ratio: gambit.ratio,
        element: gambit.element,
        targets
    }]
}