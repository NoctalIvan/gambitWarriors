import { EventType } from '../constants/enums'
import { IAction, IEffect } from '../constants/interfaces'
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

    // resolve a full game
    public resolveGame(): EventType[] {
        return []
    }

    // resolve a game tick
    private resolveTick(): EventType[] {
        let events = []

        // resolve stats
        this.armies.forEach((army) => {
            army.forEach((warrior) =>
                warrior.updateStats(),
            )
        })

        // resolve tick & get actions
        const actions: IAction[] = this.armies.map((army) => {
            army.map((warrior) =>
                warrior.resolveTick(),
            )
        }).reduce((acc, a) => acc.concat(a), [])
        events = events.concat(actions.map((action) => ({type: EventType.ACTION, action})))

        // get effect for each action
        let effects: IEffect[] = actions
            .map((action) => this.getEffects(action))
            .reduce((acc, a) => acc.concat(a), [])
        events = events.concat(effects.map((effect) => ({type: EventType.EFFECT, effect})))

        do {
            // resolve those effects (loops for effects triggering others)
            effects = effects
                .map((effect) => effect.target.resolveEffect(effect))
                .reduce((acc, a) => acc.concat(a), [])
            events = events.concat(effects.map((effect) => ({type: EventType.EFFECT, effect})))
        } while (effects.length > 0)

        return events
    }

    // get the effects of an action
    private getEffects(action: IAction): IEffect[] {
        return []
    }
}
