const assert = require('assert')
const resolveAction = require('../../src/engine/getEffects')
const actionTypes = require('../../src/constants/actionTypes')

describe('resolveAction', () => {
    it('WAIT', () => {
        const warriorResult = resolveAction({a:1}, {type: actionTypes.WAIT})
        assert.deepEqual(warriorResult, {warrior: {a: 1}})
    })

    it('ATTACK', () => {
        const warriorResult = resolveAction({stats: {hp: 10, }}, {type: actionTypes.ATTACK})
        assert.deepEqual(warriorResult, {a: 1})
    })
})