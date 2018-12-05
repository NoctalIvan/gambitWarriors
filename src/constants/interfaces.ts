import { Unit } from './../classes/Unit'
import { ActionType, ArmyType, EffectType, ElementType, EventType, TargetType } from './enums'

export interface IStats {
    hp: number,
    mp: number,
    atk: number,
    def: number,
    int: number,
    res: number,
    speed: number,
}

export interface IRatio {
    magical: number,
    physical: number,
}

export interface IAction {
    sender: Unit
    type: ActionType,
    target: ITarget,
    element?: ElementType,
    damage?: IRatio,
    heal?: number,
    buff?: IStats
}

export interface IEffect {
    type: EffectType,
    sender: Unit,
    target: Unit
}

export interface IEvent {
    type: EventType,
    tick: number
}
export interface IActionEvent extends IEvent {
    action: IAction
}
export interface IEffectEvent extends IEvent {
    effect: IEffect
}

export interface ITarget {
    type: TargetType,
    army: ArmyType,
    n: number
}
export interface IStatTarget extends ITarget {
    stats: IStats
}
