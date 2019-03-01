import { ActionType } from "./Action";
import { TargetType } from "./Target";

export interface GambitCondition {
    type: GambitConditionType,
    option1?: number,
}

export enum GambitConditionType {
    ALWAYS = "ALWAYS",
    NEVER = "NEVER"
}

export interface Gambit {
    actionType: ActionType,
    targetType: TargetType,
    condition: GambitCondition
}

export const DefaultGambit = {
    actionType: ActionType.WAIT,
    targetType: TargetType.SELF,
    condition: {
        type: GambitConditionType.ALWAYS
    }
}
