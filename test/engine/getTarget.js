const assert = require('assert')
const getTargets = require('../../src/engine/getTargets')
const {targetTypes} = require('../../src/constants')

describe('getTargets', () => {
    it(targetTypes.SELF, () => {
        const targets = getTargets(targetTypes.SELF, {a: 1})
        assert.deepEqual(targets, [{a: 1}])
    })
    it(targetTypes.RANDOM_ENNEMY, () => {
        const targets = getTargets(targetTypes.RANDOM_ENNEMY, {army: 0}, {armies: [[], [{a: 1}]]})
        assert.deepEqual(targets, [{a: 1}])
    })

    it(targetTypes.RANDOM_ALLY, () => {
        const targets = getTargets(targetTypes.RANDOM_ALLY, {army: 0}, {armies: [[{a: 1}], []]})
        assert.deepEqual(targets, [{a: 1}])
    })

    it('should fail for unknown type', () => {
        assert.throws(() => getTargets("zargleuleu"))
    })
})
