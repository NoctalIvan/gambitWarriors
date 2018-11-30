const assert = require('assert')
const getDamage = require('../../src/engine/getDamage')

const warrior = {
    stats: {
        atk: 1, 
        def: 2,
        int: 1,
        res: 4
    }
}

describe('getDamage', () => {
    it('should resolve no damage', () => {
        const damage = getDamage({ratio: {physical: 0, magical: 0}}, warrior, warrior)
        assert.deepEqual(damage, {physical: 0, magical: 0})
    })

    it('should resolve min 1 dmg', () => {
        const damage = getDamage({ratio: {physical: 0.1, magical: 0.1}}, warrior, warrior)
        assert.deepEqual(damage, {physical: 1, magical: 1})
    })

    it('should resolve phys/mag dmg', () => {
        const damage = getDamage({ratio: {physical: 2, magical: 4}}, warrior, warrior)
        assert.deepEqual(damage, {physical: 1, magical: 2})
    })
})
