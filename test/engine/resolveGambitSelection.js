const assert = require('assert')
const resolveGambitSelection = require('../../src/engine/resolveGambitSelection')
const {actions} = require('../../src/constants')

describe('resolveGambitSelection', () => {
    it('no gambits = wait', () => {
        const gambit = resolveGambitSelection({gambits: []})
        assert.deepEqual(gambit, {action: actions.WAIT})
    })

    it('1 gambit = select', () => {
        const gambit = resolveGambitSelection({gambits: [{a: 1}]})
        assert.deepEqual(gambit, {a: 1})
    })
})
