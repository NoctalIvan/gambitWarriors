import { Unit } from './../classes/Unit'
import { ActionType, EffectType, EventType, TargetType } from './enums'

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
    target: TargetType,
}

export interface IEffect {
    type: EffectType,
    sender: Unit,
    target: Unit
}

export interface IEvent {
    type: EventType,
    action: IAction|null,
    effect: IEffect|null
}
