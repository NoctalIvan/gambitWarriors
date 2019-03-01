// Battle manager
import { Army } from './../types/Army'
import { BattleResult } from '../types/BattleResult';
import { Warrior } from '../types/Warrior';
import { Action, ActionTypes } from '../types/Action';

export function checkWin(warriors: Warrior[]) {
    if(!warriors.find(w => !w.dead && w.army == 0)) {
        return 1
    } else if(!warriors.find(w => !w.dead && w.army == 1)) {
        return 0
    } else {
        return null
    }
}

export function battle(warriors: Warrior[]) : BattleResult {
    while(true) {
        // check if win
        const win = checkWin(warriors)
        if(win !== null) {
            return {winner: win}
        }

        // resolve tick
        battleTick(warriors)
    }
}

export function reduceAtb(warrior: Warrior) : void {
    warrior.atb -= warrior.speed
}

export function getNextWarriot(warriors: Warrior[]) : Warrior {
    return warriors
        .filter(a => !a.dead)
        .sort((a, b) => a.atb - b.atb)
        [0]
}

export function getTarget(warrior: Warrior, warriors: Warrior[]) : Warrior {
    return warriors.find(w => w.army != warrior.army && !w.dead)
}

export function getAction(origin: Warrior, warriors: Warrior[]) : Action {
    const target = getTarget(origin, warriors)
    return {
        type: ActionTypes.ATTACK,
        origin,
        target
    }
}

export function resolveAction(action: Action, warriors: Warrior[]) : void {
    switch(action.type) {
        case ActionTypes.ATTACK:
            action.target.hp -= action.origin.atk
    }

    if(action.target.hp <= 0) {
        action.target.dead = true
    }
}

export function battleTick(warriors: Warrior[]) {
    // reduce all atb
    warriors.forEach(reduceAtb)

    // get 1st unit to move
    const nextWarrior = getNextWarriot(warriors)

    // select an action to do
    const action = getAction(nextWarrior, warriors)

    // resolve the action
    resolveAction(action, warriors)
}