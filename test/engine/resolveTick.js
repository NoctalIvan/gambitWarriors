const assert = require('assert')
const resolveTick = require('../../src/engine/resolveTick')
const {actionTypes, targetTypes, eventTypes} = require('../../src/constants')

describe('resolveTick', () => {
    it('should resolve a complex tick', () => {
        const warriorType = {stats: {hp: 10, atk: 2, def: 2}, gambits: [{action: actionTypes.ATTACK, target: targetTypes.RANDOM_ENNEMY}]}
        const warrior1 = {
            ...JSON.parse(JSON.stringify(warriorType)),
            army: 0,
            ATB: 0
        }
        const warrior2 = {
            ...JSON.parse(JSON.stringify(warriorType)),
            army: 1,
            ATB: 1
        }

        const game = {
            armies: [
                [JSON.parse(json.stringify(warrior1))],
                [JSON.parse(json.stringify(warrior2))],
            ]
        }

        const tickResult = resolveTick(game)
        assert.deepEqual(tickResult, {
            game: {
                armies: [
                    [{
                        ...warriorType,
                        army: 0,
                        ATB: 100
                    }],
                    [{
                        ...warriorType,
                        army: 0,
                        ATB: 0
                    }],
                ]
            },
            events: [
                {type: eventTypes.ACTION, action: {type: actionTypes.ATTACK, warrior: warrior1, target: warrior2}},
                {type: eventTypes.DAMAGE, action: {type: actionTypes.DAMAGE, warrior: warrior2, damage: {physical: 1, magical: 1}}},
                {type: eventTypes.WAIT, action: {type: actionTypes.ATTACK, warrior: warrior2, target: warrior2}},
            ]
        })
    })
})