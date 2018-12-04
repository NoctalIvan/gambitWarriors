import assert from 'assert'
import { Unit } from './../../src/classes/unit'
import { Warrior } from './../../src/classes/Warrior'

let warrior
let unit

describe('Warrior', () => {
    it('Should create', () => {
        warrior = new Warrior({hp: 2, mp: 2, atk: 2, def: 2, int: 2, res: 2, speed: 2})
        unit = new Unit(warrior)
        unit.updateStats()
        console.log(unit)
    })
})
