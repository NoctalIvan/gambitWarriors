import { Gambit } from "../../../src/classes/Gambit";
import { ActionType, ElementType, TargetType, ArmyType } from "../../../src/constants/enums";

const ratio11 = {physical: 1, magical: 1}

export const waitGambit = new Gambit(
    ActionType.WAIT,
    ElementType.NORMAL,
    {type: TargetType.SELF, army: ArmyType.ALLY, n: 1},
)

export const selfAttack = new Gambit(
    ActionType.ATTACK,
    ElementType.NORMAL,
    {type: TargetType.SELF, army: ArmyType.ALLY, n: 1},
    {physical: 2, magical: 2}
)

export const selfHeal = new Gambit(
    ActionType.HEAL,
    ElementType.NORMAL,
    {type: TargetType.SELF, army: ArmyType.ALLY, n: 1},
    {physical: 0, magical: 2}
)

export const selfBuff = new Gambit(
    ActionType.ATTACK,
    ElementType.NORMAL,
    {type: TargetType.SELF, army: ArmyType.ALLY, n: 1},
)

export const attackGambit = new Gambit(
    ActionType.ATTACK,
    ElementType.NORMAL,
    {type: TargetType.RANDOM, army: ArmyType.ENNEMY, n: 1},
    {physical: 1, magical: 0}
)