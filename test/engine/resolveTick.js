const assert = require('assert')
const resolveTick = require('../../src/engine/resolveTick')
const {actionTypes, targetTypes} = require('../../src/constants')

describe('resolveTick', () => {
    it('should resolve a complex tick', () => {
        const warriorType = {
            stats: {hp: 10, atk: 2, def: 2, speed: 1}, 
            gambits: [{actionType: actionTypes.ATTACK, target: targetTypes.RANDOM_ENNEMY}]
        }
        
        const warrior1 = {
            ...JSON.parse(JSON.stringify(warriorType)),
            id: 1,
            army: 0,
            ATB: 0
        }
        const warrior2 = {
            ...JSON.parse(JSON.stringify(warriorType)),
            id: 2,
            army: 1,
            ATB: 1
        }

        const game = {
            armies: [
                [JSON.parse(JSON.stringify(warrior1))],
                [JSON.parse(JSON.stringify(warrior2))],
            ]
        }

        const tickResult = resolveTick(game)
        assert.deepEqual(tickResult.game, {
            armies: [
                [{
                    ...warriorType,
                    id: 1,
                    army: 0,
                    ATB: 100,
                    stats: {
                        ...warriorType.stats,
                        hp: 9
                    }
                }],
                [{
                    ...warriorType,
                    id: 2,
                    army: 1,
                    ATB: 0,
                }],
            ]
        })
        assert.deepEqual(tickResult.events, [
            {type: 'action', action: {type: actionTypes.ATTACK, warrior: warrior1, target: warrior2}},
            {type: 'effect', action: {type: actionTypes.DAMAGE, warrior: warrior2, damage: {physical: 1, magical: 1}}},
            {type: 'action', action: {type: actionTypes.ATTACK, warrior: warrior2, target: warrior2}},
        ])
    })
})