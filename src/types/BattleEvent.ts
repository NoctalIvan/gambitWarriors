import { Warrior } from "./Warrior";

export enum BattleEventType {
    ATTACK = "ATTACK",
    DAMAGE = "DAMAGE",
    DEATH = "DEATH",
    START = "START",
    END = "END"
}

export interface BattleEvent {
    type: BattleEventType,
    origin?: Warrior,
    target?: Warrior,
    army?: number,
    value?: number
}