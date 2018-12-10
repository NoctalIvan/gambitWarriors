const assert = require('assert')
import {waitWarrior} from './mock/warriors'
import { ActionType } from '../../src/constants/enums';

describe('Warrior', () => {
    it('Should create', () => {
        assert.ok(waitWarrior)
    })

    it('Should select only gambit', () => {
        const gambit = waitWarrior.selectGambit()
        assert.equal(gambit.action, ActionType.WAIT)
    })
})
