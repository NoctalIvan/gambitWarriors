const assert = require('assert')
const resolveATB = require('../../src/engine/resolveATB')

describe('resolveATB', () => {
    it('should reduce atb bar by speed', () => {
        const warrior = {ATB: 2, stats: {speed: 1}}
        resolveATB(warrior)
        assert.equal(warrior.ATB, 1)
    })

    it('should reset empty ATB', () => {
        const warrior = {ATB: 0}
        resolveATB(warrior)
        assert.equal(warrior.ATB, 100)
    })

    it('should never have ATB < 0', () => {
        const warrior = {ATB: 1, stats: {speed: 2}}
        resolveATB(warrior)
        assert.equal(warrior.ATB, 0)
    })
})