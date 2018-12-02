const assert = require('assert')
const resolveGame = require('../../src/engine/resolveGame')

describe('resolveGame', () => {
    it('should resolve empty game', () => {
        const game = {armies: [[], []]}
        const events = resolveGame(game)
        assert.deepEqual(game, game)
        assert.deepEqual(events, [{
            type: 'victory',
            army: 1
        }])
    })

    it('should resolve one sided game', () => {
        const game = {armies: [[{ATB: 100, baseStats: {speed: 0}, buffs: []}], []]}
        const events = resolveGame(game)
        assert.deepEqual(game, game)
        assert.deepEqual(events, [{
            type: 'victory',
            army: 0
        }])
    })
})
