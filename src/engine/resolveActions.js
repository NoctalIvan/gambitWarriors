/* returns the gambit that a warrior should use */
const resolveGambitSelection = require('./resolveGambitSelection')
const resolveTarget = require('./resolveTarget')

module.exports = (warrior, game) => {
    if(warrior.ATB > 0) {
        return []
    }

    const gambit = resolveGambitSelection(warrior, game)
    const target = gambit && gambit.target && resolveTarget(gambit.target, warrior, game)
    
    return [{
        warrior,
        gambit,
        target
    }]
}