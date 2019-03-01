// Battle manager
import { Army } from './../types/Army'
import { BattleResult } from '../types/BattleResult';
import { Warrior } from '../types/Warrior';
import { Action, ActionType } from '../types/Action';
import { BattleEvent } from '../types/BattleEvent';
import { Gambit, DefaultGambit, GambitConditionType } from '../types/Gambit';
import { TargetType } from '../types/Target';
import { pickRandom } from '../utils/pickRandom';

export function checkWin(warriors: Warrior[]) {
    if(!warriors.find(w => !w.dead && w.army == 0)) {
        return 1
    } else if(!warriors.find(w => !w.dead && w.army == 1)) {
        return 0
    } else {
        return null
    }
}

let events:BattleEvent[] = []
export function battle(warriors: Warrior[]) : BattleResult {
    events = [{type: ActionType.START}]

    while(true) {
        // check if win
        const win = checkWin(warriors)
        if(win !== null) {
            events.push({type: ActionType.END, army: win})
            return {winner: win, events}
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

export function getGambit(warrior: Warrior, warriors: Warrior[]) : Gambit {
    const selectedGambit = warrior.gambits.find(gambit => {
        switch(gambit.condition.type) {
            case GambitConditionType.ALWAYS:
                return true
            case GambitConditionType.NEVER:
                return false
            default:
                throw 'unknown gambitConditionType : ' + gambit.condition.type
        }
    })

    return selectedGambit || DefaultGambit
}

export function getTarget(gambit: Gambit, warrior: Warrior, warriors: Warrior[]) : Warrior {
    switch(gambit.targetType) {
        case TargetType.RANDOM_ENNEMY:
            return pickRandom(warriors.filter(w => w.army != warrior.army && !w.dead))
        case TargetType.SELF:
            return warrior
        default:
            throw 'unknown targetType ' + gambit.targetType
    }
}

export function getAction(origin: Warrior, warriors: Warrior[]) : Action {
    const gambit = getGambit(origin, warriors)
    const target = getTarget(gambit, origin, warriors)
    const action = {
        type: gambit.actionType,
        origin,
        target
    }

    events.push({type: gambit.actionType, origin, target})
    return action
}

export function resolveAction(action: Action, warriors: Warrior[]) : void {
    switch(action.type) {
        case ActionType.ATTACK:
            action.target.hp -= action.origin.atk
            events.push({type: ActionType.DAMAGE, target: action.target, value: action.origin.atk})
            break
        case ActionType.WAIT:
            events.push({type: ActionType.WAIT, target: action.origin})
            break
        default:
            throw 'unknown actionType ' + action.type
    }

    action.origin.atb = 100

    if(action.target.hp <= 0) {
        action.target.dead = true
        events.push({type: ActionType.DEATH, target: action.target})
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