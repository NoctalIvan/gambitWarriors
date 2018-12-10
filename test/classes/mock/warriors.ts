import { Warrior } from "../../../src/classes/Warrior";
import { waitGambit, selfAttack, selfBuff, selfHeal, attackGambit } from "./gambits"

const stats2 = {maxHp: 2, maxMp: 2, atk: 2, def: 2, int: 2, res: 2, speed: 2}

export const waitWarrior = new Warrior(stats2)
waitWarrior.gambits.push(waitGambit)

export const selfAttackWarrior = new Warrior(stats2)
selfAttackWarrior.gambits.push(selfAttack)

export const selfHealWarrior = new Warrior(stats2)
selfHealWarrior.gambits.push(selfHeal)

export const selfBuffWarrior = new Warrior(stats2)
selfBuffWarrior.gambits.push(selfBuff)

export const attackWarrior = new Warrior(stats2)
attackWarrior.gambits.push(attackGambit)