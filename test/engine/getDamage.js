const assert = require('assert')
const getDamage = require('../../src/engine/getDamage')

describe('getDamage', () => {
    it('should resolve no damage', () => {
        const damage = getDamage({}, {})
        assert.deepEqual(damage, {physical: 0, magical: 0})
    })

    it('should resolve min 1 dmg', () => {
        const damage = getDamage({physical: 1, magical: 1}, {stats: {def: 10000, res: 10000}})
        assert.deepEqual(damage, {physical: 1, magical: 1})
    })

    it('should resolve phys/mag dmg', () => {
        const damage = getDamage({physical: 2, magical: 4}, {stats: {def: 2, res: 4}})
        assert.deepEqual(damage, {physical: 1, magical: 2})
    })
})
