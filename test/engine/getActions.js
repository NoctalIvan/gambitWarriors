const assert = require('assert')
const getActions = require('../../src/engine/getActions')

describe('getActions', () => {
    it('shoudn\'t act with ATB > 0', () => {
        const actions = getActions({ATB:1})
        assert.deepEqual(actions, [])
    })

    it('should return a gambit in normal case', () => {
        const gambit = {a: 1}
        const warrior = {ATB: 0, gambits: [gambit]}
        const actions = getActions(warrior)
        assert.deepEqual(actions, [{
            warrior,
            gambit,
            target: undefined,
        }])
    })
})
