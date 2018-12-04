import { EffectType } from '../constants/enums'
import { IAction, IEffect, IStats } from './../constants/interfaces'
import { Warrior } from './Warrior'

export class Unit {
    public warrior: Warrior
    public armyId: number
    public stats: IStats
    public ATB: number

    constructor(warrior: Warrior, armyId: number) {
        this.warrior = warrior
        this.stats = warrior.stats
        this.ATB = Math.floor(Math.random() * 100)
    }

    // updates stats according to base stats & buffs
    public updateStats(): void {
        this.stats = JSON.parse(JSON.stringify(this.warrior.stats))
        this.stats.atk = 1
    }

    // updates after a tick and returns a list of actions
    public resolveTick(): IAction[] {
        if (this.ATB > 0) {
            this.ATB -= this.stats.speed
        }

        const gambit = this.warrior.selectGambit()
        this.ATB = 100
        return [{
            sender: this,
            target: gambit.target,
            type: gambit.action,
        }]
    }

    // resolves an effect on itself
    public resolveEffect(effect: IEffect): IEffect[] {
        switch (effect.type) {
            case EffectType.WAIT:
                return []
        }
    }
}
