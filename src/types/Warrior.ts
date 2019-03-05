import { Gambit } from "./Gambit";

export interface Warrior {
    id: string,
    army: number,
    dead: boolean,
    gambits: Gambit[]

    maxHp: number, // total life points of a warrior
    hp: number, // remaining life points of a warrior
    atk: number, // physical dmg
    int: number, // magical dmg
    def: number, // physical resistance
    res: number, // magical resistance
    speed: number, // atb decrease rate
    atb: number // remaining atb points before action
}