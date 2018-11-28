const assert = require('assert')
const getTarget = require('../../src/engine/getTarget')
const {targets} = require('../../src/constants')

describe('getTarget', () => {
    it('RANDOM_ENNEMY', () => {
        const target = getTarget(targets.RANDOM_ENNEMY, {army: 0}, {armies: [[], [{a: 1}]]})
        assert.deepEqual(target, {a: 1})
    })

    it('RANDOM_ALLY', () => {
        const target = getTarget(targets.RANDOM_ALLY, {army: 0}, {armies: [[{a: 1}], []]})
        assert.deepEqual(target, {a: 1})
    })
})
