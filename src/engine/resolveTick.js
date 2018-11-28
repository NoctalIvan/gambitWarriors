/* resolve one tick on a game */
const resolveATB = require('./resolveATB')
const getActions = require('./getActions')
const getEffect = require('./getEffects')
const resolveEffect = require('./resolveEffect')

const {copy, collapseArray} = require('./../util')
const {} = require('./../constants')

module.exports = (gameInput) => {
    let game = copy(gameInput)
    const events = []

    // resolve ATB for each warrior
    game.armies.forEach(army => army.forEach(warrior => resolveATB(warrior)))

    // get action for each warrior
    const actions = collapseArray(game.armies.map(army => army.map(warrior => getActions(warrior, game))))
    actions.forEach(action => {
        events.concat({
            type: 'action',
            action
        })
    })

    // get action effects
    const effects = collapseArray(actions.map(action => getEffect(action, game)))
    effects.forEach(effect => {
        events.concat({
            type: 'effect',
            effect
        })
    })

    // resolve effects
    effects.forEach(effect => {
        resolveEffect(effect, game)
    })

    return {
        game,
        events
    }
}