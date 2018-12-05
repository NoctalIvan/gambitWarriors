import { ActionType, ArmyType, EffectType, EventType, TargetType } from '../constants/enums'
import { IAction, IEffect } from '../constants/interfaces'
import { pickRandom } from './../util/pickRandom'
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
        let events = []
        let tickCount = 1
        while(this.armies.find(army => army.length > 0)) {
            events = events.concat(this.resolveTick(tickCount))
            tickCount ++
        }

        return events
    }

    // resolve a game tick
    private resolveTick(tick:number): EventType[] {
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
        events = events.concat(actions.map((action) => ({type: EventType.ACTION, action, tick})))

        // get effect for each action
        let effects: IEffect[] = actions
            .map((action) => this.getEffects(action))
            .reduce((acc, a) => acc.concat(a), [])
        events = events.concat(effects.map((effect) => ({type: EventType.EFFECT, effect, tick})))

        do {
            // resolve those effects (loops for effects triggering others)
            effects = effects
                .map((effect) => effect.target.resolveEffect(effect))
                .reduce((acc, a) => acc.concat(a), [])
            events = events.concat(effects.map((effect) => ({type: EventType.EFFECT, effect, tick})))
        } while (effects.length > 0)

        // remove dead units
        this.armies[0] = this.armies[0].filter(unit => !unit.dead)
        this.armies[1] = this.armies[1].filter(unit => !unit.dead)

        return events
    }

    // get the effects of an action
    private getEffects(action: IAction): IEffect[] {
        const targets:Unit[] = this.getTarget(action)
        
        switch (action.type) {
            case ActionType.WAIT:
                return [{
                    sender: action.sender,
                    target: action.sender,
                    type: EffectType.WAIT,
                }]
            case ActionType.ATTACK:
                return targets.map(target => ({
                    type: EffectType.DAMAGE,
                    element: action.element,
                    damage: target.getDamageOnSelf(action),
                    sender: action.sender,
                    target
                }))
            case ActionType.HEAL:
                return targets.map(target => ({
                    type: EffectType.DAMAGE,
                    element: action.element,
                    heal: target.getHealOnSelf(action),
                    sender: action.sender,
                    target
                }))
            case ActionType.BUFF:
                return targets.map(target => ({
                    type: EffectType.DAMAGE,
                    element: action.element,
                    buff: target.getBuffOnSelf(action),
                    sender: action.sender,
                    target
                }))
            default:
                throw 'unknown actionType : ' + action.type
        }
    }

    // get the targets of an action
    private getTarget(action: IAction): Unit[] {
        // get target amongst army
        const army = this.getTargetArmy(action)

        switch (action.target.type) {
            case TargetType.SELF:
                return [action.sender]
            case TargetType.ALL:
                return army
            case TargetType.RANDOM:
                return pickRandom(army, action.target.n)
            case TargetType.MIN_STAT:
                return this.getTargetArmy(action)
                    .sort((a, b) => a.stats['' + action.target.stat] - b.stats['' + action.target.stat])
                    .slice(0, action.target.n)
            case TargetType.MAX_STAT:
                return this.getTargetArmy(action)
                    .sort((a, b) => b.stats['' + action.target.stat] - a.stats['' + action.target.stat])
                    .slice(0, action.target.n)
            default:
                throw 'not implemented target type : ' + action.target.type
        }
    }

    // get the army targeted by a target
    private getTargetArmy(action: IAction): Unit[] {
        switch (action.target.army) {
            case ArmyType.BOTH:
                return this.armies[0].concat(this.armies[1])
            case ArmyType.ALLY:
                return this.armies[action.sender.armyId]
            case ArmyType.ENNEMY:
                return this.armies[+!action.sender.armyId]
            default:
                return []
        }
    }

}
