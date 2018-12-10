import { ActionType, ElementType, TargetType } from './../constants/enums'
import { IRatio, ITarget } from './../constants/interfaces'
import { IStats } from 'mocha';

export class Gambit {
    public readonly action: ActionType
    public readonly element: ElementType
    public readonly ratio: IRatio
    public readonly buff: IStats
    public readonly target: ITarget
    public readonly iqValue: number

    constructor(action: ActionType, element: ElementType, target: ITarget, ratio?: IRatio) {
        this.action = action
        this.element = element
        this.ratio = ratio
        this.target = target

        this.iqValue = 1 // todo: calculate
    }
}
