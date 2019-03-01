import { Army } from "./types/army";
import { battle } from "./engine/battle";
import { Warrior } from "./types/Warrior";

function getWarriorModel(army:number, id: string) : Warrior {
    return {
        id,
        dead: false,
        army,

        atk: 3,
        hp: 10,
        speed: 10,
        atb: Math.floor(100*Math.random()),
    }
}

const result = battle([
    getWarriorModel(0, "Albert"),
    getWarriorModel(0, "Alex"),
    getWarriorModel(1, "Bibi"),
    getWarriorModel(1, "Breta"),
])
console.log(result)