import { IStats } from './../constants/interfaces'
import { Gambit } from './Gambit'

export class Warrior {
    public name: string
    public stats: IStats
    public gambits: Gambit[]

    constructor(stats: IStats) {
        this.stats = stats
    }

    public selectGambit(): Gambit {
        // todo: real selection
        return this.gambits[0]
    }
}
