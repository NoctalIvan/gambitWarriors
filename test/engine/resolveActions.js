const assert = require('assert')
const resolveActions = require('../../src/engine/resolveActions')

describe('resolveActions', () => {
    it('shoudn\'t act with ATB > 0', () => {
        const actions = resolveActions({ATB:1})
        assert.deepEqual(actions, [])
    })

    it('should return a gambit in normal case', () => {
        const gambit = {a: 1}
        const warrior = {ATB: 0, gambits: [gambit]}
        const actions = resolveActions(warrior)
        assert.deepEqual(actions, [{
            warrior,
            gambit,
            target: undefined,
        }])
    })
})
