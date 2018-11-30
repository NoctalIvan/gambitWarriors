const assert = require('assert')
const getEffects = require('../../src/engine/getEffects')
const {actionTypes, effectTypes, elementTypes} = require('../../src/constants')

describe('getEffects', () => {
    it('wait', () => {
        const effects = getEffects({type: actionTypes.WAIT, target: {a: 1}})
        assert.deepEqual(effects, [{
            type: effectTypes.WAIT,
            target: {a: 1}
        }])
    })

    it('physical normal attack', () => {
        const effects = getEffects({
            type: actionTypes.ATTACK,
            ratio: {physical: 1, magical: 0},
            element: elementTypes.NORMAL,
            target: {a: 1, stats: {def: 2}},
            warrior: {stats: {atk: 2}}
        })
        assert.deepEqual(effects, [{
            type: effectTypes.DAMAGE,
            element: elementTypes.NORMAL,
            damage: {physical: 1, magical: 0},
            target: {a: 1, stats: {def: 2}}
        }])
    })

    it('mixed fire attack', () => {
        const effects = getEffects({
            type: actionTypes.ATTACK,
            ratio: {physical: 1, magical: 1},
            element: elementTypes.FIRE,
            target: {a: 1, stats: {def: 2, res: 2}},
            warrior: {stats: {atk: 2, int: 2}}
        })
        assert.deepEqual(effects, [{
            type: effectTypes.DAMAGE,
            element: elementTypes.FIRE,
            damage: {physical: 1, magical: 1},
            target: {a: 1, stats: {def: 2, res: 2}}
        }])
    })

    it('should fail for unknown type', () => {
        assert.throws(() => getEffects({type: "zargleuleu"}))
    })
})
