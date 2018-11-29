const assert = require('assert')
const resolveTick = require('../../src/engine/resolveTick')
const {actionTypes, effectTypes, targetTypes} = require('../../src/constants')

describe('resolveTick', () => {
    it('should resolve a complex tick', () => {
        const warriorType = {
            stats: {hp: 1, atk: 2, def: 2, speed: 1}, 
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
                [],
                [{
                    ...warriorType,
                    id: 2,
                    army: 1,
                    ATB: 0,
                }],
            ]
        })

        assert.equal(tickResult.events.length, 3)
        assert.equal(tickResult.events[0].type, 'action')
        assert.equal(tickResult.events[0].action.type, actionTypes.ATTACK)
        assert.equal(tickResult.events[0].action.warrior.id, warrior2.id)
        assert.equal(tickResult.events[0].action.targets[0].id, warrior1.id)
        assert.equal(tickResult.events[1].type, 'effect')
        assert.equal(tickResult.events[1].effect.type, effectTypes.DAMAGE)
        assert.equal(tickResult.events[1].effect.target.id, warrior1.id)
        assert.deepEqual(tickResult.events[1].effect.damage, {physical: 1, magical: 0})
        assert.equal(tickResult.events[2].type, 'effect')
        assert.equal(tickResult.events[2].effect.type, effectTypes.DEATH)
        assert.equal(tickResult.events[2].effect.target.id, warrior1.id)
    })
})