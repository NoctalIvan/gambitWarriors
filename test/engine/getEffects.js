const assert = require('assert')
const getEffects = require('../../src/engine/getEffects')
const {actionTypes, effectTypes} = require('../../src/constants')

describe('getEffects', () => {
    it(actionTypes.WAIT, () => {
        const effects = getEffects({type: actionTypes.WAIT, target: {a: 1}})
        assert.deepEqual(effects, [{
            type: effectTypes.WAIT,
            target: {a: 1}
        }])
    })

    it(actionTypes.ATTACK, () => {
        const effects = getEffects({
            type: actionTypes.ATTACK,
            target: {a: 1, stats: {def: 2}},
            warrior: {stats: {atk: 2}}
        })
        assert.deepEqual(effects, [{
            type: effectTypes.DAMAGE,
            damage: {physical: 1, magical: 0},
            target: {a: 1, stats: {def: 2}}
        }])
    })

    it('should fail for unknown type', () => {
        assert.throws(() => getEffects({type: "zargleuleu"}))
    })
})
