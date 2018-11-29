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

        events = resolveTick(game)
        assert.deepEqual(game, {
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

        assert.equal(events.length, 3)
        assert.equal(events[0].type, 'action')
        assert.equal(events[0].action.type, actionTypes.ATTACK)
        assert.equal(events[0].action.warrior.id, warrior2.id)
        assert.equal(events[0].action.targets[0].id, warrior1.id)
        assert.equal(events[1].type, 'effect')
        assert.equal(events[1].effect.type, effectTypes.DAMAGE)
        assert.equal(events[1].effect.target.id, warrior1.id)
        assert.deepEqual(events[1].effect.damage, {physical: 1, magical: 0})
        assert.equal(events[2].type, 'effect')
        assert.equal(events[2].effect.type, effectTypes.DEATH)
        assert.equal(events[2].effect.target.id, warrior1.id)
    })
})