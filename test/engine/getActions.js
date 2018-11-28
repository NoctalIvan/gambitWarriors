const assert = require('assert')
const getActions = require('../../src/engine/getActions')
const {actionTypes, targetTypes} = require('../../src/constants')

describe('getActions', () => {
    it('shoudn\'t act with ATB > 0', () => {
        const actions = getActions({ATB:1})
        assert.deepEqual(actions, [])
    })

    it('should return a gambit in normal case', () => {
        const gambit = {action: actionTypes.WAIT, target: targetTypes.SELF}
        const warrior = {ATB: 0, gambits: [gambit]}
        const actions = getActions(warrior)
        assert.deepEqual(actions, [{
            warrior,
            gambit,
            targets: [warrior],
        }])
    })
})
