const assert = require('assert')
import { waitWarrior, selfAttackWarrior, selfHealWarrior, selfBuffWarrior } from './mock/warriors'
import { Unit } from '../../src/classes/unit';

const waitUnit = new Unit(waitWarrior, 0)
const selfAttackUnit = new Unit(selfAttackWarrior, 0)
const selfHealUnit = new Unit(selfHealWarrior, 0)
const selfBuffUnit = new Unit(selfBuffWarrior, 0)

describe('Unit', () => {
    it('Should create', () => {
        assert.ok(waitUnit)
    })

    describe('updateStats()', () => {
        it('Should copy stats when no buff', () => {
            waitUnit.updateStats()
            assert.deepEqual(waitWarrior.stats, waitUnit.stats)
        })
    })

    describe('resolveTick()', () => {
        it('Should lower ATB if ATB > 0', () => {
            waitUnit.ATB = 10
            const actions = waitUnit.resolveTick()
            assert.equal(waitUnit.ATB, 8)
            assert.equal(actions.length, 0)
        })

        it('Should return action if ATB == 0', () => {
            waitUnit.ATB = 0
            const actions = waitUnit.resolveTick()
            assert.equal(waitUnit.ATB, 100)
            assert.equal(actions.length, 1)
        })
    })

    describe('damage creation and resolution', () => {
        let actions
        
        it('should create damage action', () => {
            selfAttackUnit.ATB = 0
            actions = selfAttackUnit.resolveTick()
            assert.equal(actions.length, 1)
        })
    })
})
