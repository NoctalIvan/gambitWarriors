import { IStats } from './../constants/interfaces'
import { Gambit } from './Gambit'

export class Warrior {
    public name: string
    public stats: IStats
    public gambits: Gambit[]

    constructor(stats: IStats, name?: string, gambits?: Gambit[]) {
        this.stats = stats
        this.name = name || "noname"
        this.gambits = gambits || []
    }

    public getCopy() {
        return new Warrior(
            {...this.stats},
            this.name,
            JSON.parse(JSON.stringify(this.gambits))
        )
    }

    public selectGambit(): Gambit {
        // todo: real selection
        return this.gambits[0]
    }
}
