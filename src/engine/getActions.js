/* returns the gambit that a warrior should use */
const getGambitSelection = require('./getGambitSelection')
const getTarget = require('./getTarget')

module.exports = (warrior, game) => {
    if(warrior.ATB > 0) {
        return []
    }

    const gambit = getGambitSelection(warrior, game)
    const target = gambit && gambit.target && getTarget(gambit.target, warrior, game)
    
    return [{
        warrior,
        gambit,
        target
    }]
}