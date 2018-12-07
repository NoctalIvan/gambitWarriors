const assert = require('assert')
import { attackWarrior } from './mock/warriors'
import { Game } from './../../src/classes/Game'
import { EffectType } from '../../src/constants/enums';

let game = new Game(
    [attackWarrior],
    [attackWarrior.getCopy()],
)

describe('Game', () => {
    it('should create', () => {
        assert.equal(game.armies.length, 2)
    })

    it('should resolve a game', () => {
        const events = game.resolveGame()
        assert.equal(events.length, 7)
        assert.equal(events[6].effect.type, EffectType.DEATH)
    })
})