// simulates a game in GUI
require('colors')
const colors = ['green', 'red']
const resolveGame = require('./../src/engine/resolveGame')
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

const events = resolveGame(game)
nicePrintEvents(events.slice(0, events.length - 1))
console.log(events[events.length-1])