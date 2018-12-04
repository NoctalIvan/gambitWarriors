import { EventType } from '../constants/enums'
import { Unit } from './Unit'
import { Warrior } from './Warrior'

export class Game {
    private readonly armies: Unit[][]

    constructor(army1: Warrior[], army2: Warrior[]) {
        this.armies = [
            army1.map((warrior) => new Unit(warrior, 0)),
            army2.map((warrior) => new Unit(warrior, 1)),
        ]
    }

    public resolveGame(): EventType[] {
        return []
    }
}
