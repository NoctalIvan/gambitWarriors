// simulates a game in GUI
require('colors')
const colors = ['green', 'red']
const resolveTick = require('./../src/engine/resolveTick')
const {effectTypes} = require('./../src/constants')

const game = {
    armies: [
        require('./armies/3_warriors')(0),
        require('./armies/3_warriors')(1),
    ]
}

const warriorStr = (warrior) => warrior.army == 0 ? warrior.name.green : warrior.name.red
const nicePrintEffect = (effect) => {
    console.log(
        '  ' +
        warriorStr(effect.target) +
        ' <= ' +
        effect.type +
        (effect.type == effectTypes.DAMAGE ? ' ' + JSON.stringify(effect.damage) : '')
    )
}
const nicePrintAction = (action) => {
    console.log(
        warriorStr(action.warrior) +
        ' == ' + action.type + " ==> " +
        action.targets.map(target => warriorStr(target)).join(' & ')
    )
}
const nicePrintEvents = (events) => events.forEach(event => event.type == 'action' ? nicePrintAction(event.action) : nicePrintEffect(event.effect))

do {
    const events = resolveTick(game)
    nicePrintEvents(events)
} while(!game.armies.find(a => a.length === 0))

console.log('done : victory of ' + (game.armies[0].length > 0 ? 'greens'.green : 'reds'.red))