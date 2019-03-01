import { Gambit } from "./Gambit";

export interface Warrior {
    id: string,
    army: number,
    dead: boolean,
    gambits: Gambit[]

    hp: number,
    atk: number,
    speed: number,
    atb: number
}