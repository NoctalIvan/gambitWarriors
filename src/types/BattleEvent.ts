import { Warrior } from "./Warrior";
import { ActionType } from "./Action";

export interface BattleEvent {
    type: ActionType,
    origin?: Warrior,
    target?: Warrior,
    army?: number,
    value?: number
}