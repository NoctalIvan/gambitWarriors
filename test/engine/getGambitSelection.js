const assert = require('assert')
const getGambitSelection = require('../../src/engine/getGambitSelection')
const {actions} = require('../../src/constants')

describe('getGambitSelection', () => {
    it('no gambits = wait', () => {
        const gambit = getGambitSelection({gambits: []})
        assert.deepEqual(gambit, {action: actions.WAIT})
    })

    it('1 gambit = select', () => {
        const gambit = getGambitSelection({gambits: [{a: 1}]})
        assert.deepEqual(gambit, {a: 1})
    })
})
