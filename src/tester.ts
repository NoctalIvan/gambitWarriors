import { Army } from "./types/army";
import { battle } from "./engine/battle";
import { Warrior } from "./types/Warrior";

function getWarriorModel(army:number) : Warrior {
    return {
        id: Math.random().toString(),
        dead: false,
        army,

        atk: 3,
        hp: 10,
        speed: 10,
        atb: Math.floor(100*Math.random()),
    }
}

const result = battle([
    getWarriorModel(0),
    getWarriorModel(0),
    getWarriorModel(1),
    getWarriorModel(1),
])
console.log(result)