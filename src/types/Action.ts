import { Warrior } from "./Warrior";

export interface Action {
    type: ActionType,
    origin: Warrior,
    target: Warrior,
    physicalRatio: number,
    magicalRatio: number
}

export enum ActionType {
    ATTACK = 'ATTACK',
    WAIT = 'WAIT',
    DAMAGE = "DAMAGE",
    DEATH = "DEATH",
    START = "START",
    END = "END"
}
