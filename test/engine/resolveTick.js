const assert = require('assert')
const resolveTick = require('./../../src/engine/resolveTick')

describe('resolveTick', () => {
    it('should reduce atb bar by speed', () => {
        const warriorResult = resolveTick({ATB:2, stats: {speed: 1}})
        assert.equal(warriorResult.ATB, 1)
    })

    it('should reset empty ATB', () => {
        const warriorResult = resolveTick({ATB:0})
        assert.equal(warriorResult.ATB, 100)
    })

    it('should never have ATB < 0', () => {
        const warriorResult = resolveTick({ATB:1, stats: {speed: 2}})
        assert.equal(warriorResult.ATB, 0)
    })
})