import { Warrior } from "./Warrior";

export interface Action {
    type: ActionTypes,
    origin: Warrior,
    target: Warrior    
}

export enum ActionTypes {
    ATTACK = 'ATTACK'
}
