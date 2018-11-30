const assert = require('assert')
const getTargets = require('../../src/engine/getTargets')
const {targetTypes, armyTypes, statTypes} = require('../../src/constants')

describe('getTargets', () => {
    it('self', () => {
        const targets = getTargets({type: targetTypes.SELF}, {a: 1})
        assert.deepEqual(targets, [{a: 1}])
    })
    it('random + ennemy + 1', () => {
        const targets = getTargets({
            type: targetTypes.RANDOM, 
            army: armyTypes.ENNEMY, 
            n: 1
        }, {army: 0}, {armies: [[], [{a: 1}]]})
        assert.deepEqual(targets, [{a: 1}])
    })

    it('random + ally + 2', () => {
        const targets = getTargets({
            type: targetTypes.RANDOM, 
            army: armyTypes.ALLY, 
            n: 2
        }, {army: 0}, {armies: [[{a: 1}, {a: 1}], [{a: 3}]]})
        assert.deepEqual(targets, [{a: 1}, {a: 1}])
    })

    it('random + both + 2', () => {
        const targets = getTargets({
            type: targetTypes.RANDOM,
            army: armyTypes.BOTH, 
            n: 2
        }, {army: 0}, {armies: [[{a: 1}], [{a: 1}]]})
        assert.deepEqual(targets, [{a: 1}, {a: 1}])
    })

    it('all + allies', () => {
        const targets = getTargets({
            type: targetTypes.ALL,
            army: armyTypes.ALLY,
        }, {army: 0}, {armies: [[{a: 1}, {a: 1}], []]})
        assert.deepEqual(targets, [{a: 1}, {a: 1}])
    })

    it('max stat + ennemies + mp + 1', () => {
        const targets = getTargets({
            type: targetTypes.MAX_STAT,
            army: armyTypes.ENNEMY,
            stat: statTypes.MP,
            n: 1,
        }, {army: 0}, {armies: [[], [{stats: {mp: 1}}, {stats: {mp: 2}}]]})
        assert.deepEqual(targets, [{stats: {mp: 2}}])
    })

    it('min stat + ennemies + mp + 1', () => {
        const targets = getTargets({
            type: targetTypes.MIN_STAT,
            army: armyTypes.ENNEMY,
            stat: statTypes.MP,
            n: 1,
        }, {army: 0}, {armies: [[], [{stats: {mp: 1}}, {stats: {mp: 2}}]]})
        assert.deepEqual(targets, [{stats: {mp: 1}}])
    })

    it('should fail for unknown type', () => {
        assert.throws(() => getTargets("zargleuleu"))
    })
})
