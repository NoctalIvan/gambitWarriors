/* returns the gambit that a warrior should use */
const resolveGambitSelection = require('./resolveGambitSelection')

module.exports = (warrior, game) => {
    if(warrior.ATB > 0) {
        return []
    }

    return resolveGambitSelection(warrior, game)
}