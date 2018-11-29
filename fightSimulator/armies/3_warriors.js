const copy = require('./../../src/util/copy')
const {actionTypes, targetTypes} = require('./../../src/constants')

const warrior = {
    stats: {
        hp: 10,
        atk: 5,
        def: 3,
        speed: 4
    },
    gambits: [{
        actionType: actionTypes.ATTACK,
        target: targetTypes.RANDOM_ENNEMY
    }],
}

module.exports = (armyIndex) => [
    {
        ...copy(warrior),
        name: 'WARA',
        army: armyIndex,
        id: 1,
        ATB: Math.floor(Math.random() * 100),
    },
    {
        ...copy(warrior),
        name: 'WARBI',
        army: armyIndex,
        id: 2,
        ATB: Math.floor(Math.random() * 100),
    },
    {
        ...copy(warrior),
        name: 'WARCI',
        army: armyIndex,
        id: 3,
        ATB: Math.floor(Math.random() * 100),
    }
]