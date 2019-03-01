import { Warrior } from "./Warrior";

export interface Action {
    type: ActionType,
    origin: Warrior,
    target: Warrior    
}

export enum ActionType {
    ATTACK = 'ATTACK',
    DAMAGE = "DAMAGE",
    DEATH = "DEATH",
    START = "START",
    END = "END"
}
