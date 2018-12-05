import { EffectType, ActionType } from '../constants/enums'
import { IAction, IEffect, IStats, IRatio } from './../constants/interfaces'
import { Warrior } from './Warrior'
import { randomRound } from './../util/randomRound'
import { Gambit } from './Gambit';

export class Unit {
    public warrior: Warrior
    public armyId: number
    public stats: IStats
    public ATB: number
    public dead: boolean

    constructor(warrior: Warrior, armyId: number) {
        this.warrior = warrior
        this.armyId = armyId
        this.stats = warrior.stats
        this.ATB = Math.floor(Math.random() * 100)
    }

    // updates stats according to base stats & buffs
    public updateStats(): void {
        this.stats = JSON.parse(JSON.stringify(this.warrior.stats))
    }

    // updates after a tick and returns a list of actions
    public resolveTick(): IAction[] {
        if (this.ATB > 0) {
            this.ATB -= this.stats.speed
            return []
        }

        const gambit = this.warrior.selectGambit()
        this.ATB = 100

        return [this.getActionFromGambit(gambit)]
    }

    // get damage inflicted to unit
    public getDamageOnSelf(action:IAction):IRatio {
        return {
            physical: action.damage.physical ? Math.max(1, randomRound(action.damage.physical  * action.damage.physical  / (action.damage.physical + this.stats.def))) : 0,
            magical: action.damage.magical ? Math.max(1, randomRound(action.damage.magical * action.damage.magical / (action.damage.magical + this.stats.res))) : 0,
        }
    }

    // get heal applied on unit
    public getHealOnSelf(action:IAction):number {
        return action.heal
    }

    // get buff/debuff applied on unit
    public getBuffOnSelf(action:IAction):IStats {
        return action.buff
    }

    // resolves an effect on itself
    public resolveEffect(effect: IEffect): IEffect[] {
        switch (effect.type) {
            case EffectType.WAIT:
                return []
        }
    }

    private getActionFromGambit(gambit:Gambit):IAction {
        const action:IAction = {
            sender: this,
            target: gambit.target,
            type: gambit.action,
            element: gambit.element
        }
        
        if(gambit.action === ActionType.ATTACK) {
            action.damage = {
                physical: gambit.ratio.physical * this.stats.atk,
                magical: gambit.ratio.magical * this.stats.int,
            }
        }

        if(gambit.action === ActionType.HEAL) {
            action.heal = gambit.ratio.physical * this.stats.atk + gambit.ratio.magical * this.stats.int
        }

        if(gambit.action === ActionType.BUFF) {
            const ratio = gambit.ratio.physical * this.stats.atk + gambit.ratio.magical * this.stats.int
            action.buff = JSON.parse(JSON.stringify(gambit.buff))

            for(const stat in action.buff) {
                action.buff[stat] = action.buff[stat] * ratio
            }
        }

        return action
    }
}
