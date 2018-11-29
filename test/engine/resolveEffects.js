const assert = require('assert')
const resolveEffect = require('../../src/engine/resolveEffect')
const {effectTypes} = require('../../src/constants')

describe('resolveEffect', () => {
    it(effectTypes.WAIT, () => {
        const game = {a: 1}
        resolveEffect({
            type: effectTypes.WAIT,
            target: 'whatever'
        }, game)
        assert.deepEqual(game, {a: 1})
    })

    it(effectTypes.DAMAGE, () => {
        const warrior = {id: 1, army: 0, stats: {hp: 3, def: 2}}
        resolveEffect({
            type: effectTypes.DAMAGE,
            damages: {physical: 1, magical: 0},
            target: warrior
        }, {})
        assert.deepEqual(warrior, {id: 1, army:0, stats: {hp: 2, def: 2}})
    })

    it(effectTypes.DAMAGE + ' + DEATH', () => {
        const warrior = {id: 1, army: 0, stats: {hp: 1, def: 2}}
        const game = {armies: [[warrior], []]}

        resolveEffect({
            type: effectTypes.DAMAGE,
            damages: {physical: 1, magical: 0},
            target: warrior
        }, game)
        assert.deepEqual(game, {armies: [[], []]})
    })
})
