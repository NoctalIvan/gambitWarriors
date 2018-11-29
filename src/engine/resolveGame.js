// resolves a full game and returns an event stream
const resolveTick = require('./resolveTick')
const {effectTypes} = require('./../constants')

module.exports = (game) => {
    let events = []
    do {
        events = events.concat(resolveTick(game))
    } while(!game.armies.find(a => a.length === 0))

    events.push({
        type: 'victory',
        army: game.armies[0].length == 0 ? 1 : 0
    })

    return events
}