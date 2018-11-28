const assert = require('assert')
const resolveActions = require('../../src/engine/resolveActions')

describe('resolveActions', () => {
    it('shoudn\'t act with ATB > 0', () => {
        const actions = resolveActions({ATB:1})
        assert.deepEqual(actions, [])
    })

    it('should return a gambit in normal case', () => {
        const actions = resolveActions({ATB: 0, gambits: [{a: 1}]})
        assert.deepEqual(actions, {a: 1})
    })
})
