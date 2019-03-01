import { BattleEvent } from "./BattleEvent";

export interface BattleResult {
    winner: number,
    events: BattleEvent[]
}