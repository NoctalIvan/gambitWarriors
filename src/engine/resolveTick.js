/* resolve one tick on a game */
const resolveATB = require('./resolveATB')
const getActions = require('./getActions')
const getEffect = require('./getEffects')
const resolveEffect = require('./resolveEffect')

const {copy, collapseArray} = require('./../util')
const {} = require('./../constants')

module.exports = (game) => {
    let events = []

    // resolve ATB for each warrior
    game.armies.forEach(army => 
        army.forEach(warrior => 
            resolveATB(warrior)
        )
    )

    // get action for each warrior
    const actions = collapseArray(collapseArray(game.armies.map(army => 
        army.map(warrior => 
            getActions(warrior, game)
        )
    )))

    actions.forEach(action => {
        events = events.concat({
            type: 'action',
            action
        })
    })

    // get action effects
    const effects = collapseArray(collapseArray(actions.map(action => 
        action.targets.map(target => 
            getEffect({...action, target}, game)
        )
    )))

    // resolve effects
    const newEffects = collapseArray(effects.map(effect => resolveEffect(effect, game)))
    effects.concat(newEffects).forEach(effect => {
        events = events.concat({
            type: 'effect',
            effect
        })
    })
    
    return events
}