const assert = require('assert')
const resolveTarget = require('../../src/engine/resolveTarget')
const {targets} = require('../../src/constants')

describe('resolveTarget', () => {
    it('RANDOM_ENNEMY', () => {
        const target = resolveTarget(targets.RANDOM_ENNEMY, {army: 0}, {armies: [[], [{a: 1}]]})
        assert.deepEqual(target, {a: 1})
    })

    it('RANDOM_ALLY', () => {
        const target = resolveTarget(targets.RANDOM_ALLY, {army: 0}, {armies: [[{a: 1}], []]})
        assert.deepEqual(target, {a: 1})
    })
})
