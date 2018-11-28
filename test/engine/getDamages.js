const assert = require('assert')
const getDamages = require('../../src/engine/getDamages')

describe('getDamages', () => {
    it('should resolve no damage', () => {
        const damages = getDamages({}, {})
        assert.deepEqual(damages, {physical: 0, magical: 0})
    })

    it('should resolve min 1 dmg', () => {
        const damages = getDamages({physical: 1, magical: 1}, {stats: {def: 10000, res: 10000}})
        assert.deepEqual(damages, {physical: 1, magical: 1})
    })

    it('should resolve phys/mag dmg', () => {
        const damages = getDamages({physical: 2, magical: 4}, {stats: {def: 2, res: 4}})
        assert.deepEqual(damages, {physical: 1, magical: 2})
    })
})
