import { ActionType, ElementType, TargetType } from './../constants/enums'
import { IRatio } from './../constants/interfaces'

export class Gambit {
    public readonly action: ActionType
    public readonly element: ElementType
    public readonly ratio: IRatio
    public readonly target: TargetType
    public readonly iqValue: number

    constructor(action: ActionType, element: ElementType, ratio: IRatio, target: TargetType) {
        this.action = action
        this.element = element
        this.ratio = ratio
        this.target = target

        this.iqValue = 1 // todo: calculate
    }
}
