import { Unit } from './../classes/Unit'
import { ActionType, ArmyType, EffectType, ElementType, EventType, TargetType, StatType } from './enums'

export interface IStats {
    maxHp: number,
    maxMp: number,
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
    target: Unit,
    damage?: IRatio,
}

export interface IEvent {
    type: EventType,
    tick: number
    action?: IAction
    effect?: IEffect
}

export interface ITarget {
    type: TargetType,
    army: ArmyType,
    n: number
    stat?: StatType
}
