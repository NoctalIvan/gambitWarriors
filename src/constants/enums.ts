export enum ActionType {
    WAIT = 'wait',
    ATTACK = 'attack',
    HEAL = 'heal',
    BUFF = 'buff',
}

export enum ArmyType {
    BOTH = 'both',
    ALLY = 'allies',
    ENNEMY = 'ennemies',
}

export enum EffectType {
    WAIT = 'wait',
    DAMAGE = 'damage',
    HEAL = 'heal',
    BUFF = 'buff',
    DEATH = 'death',
}

export enum ElementType {
    NORMAL = 'normal',
    FIRE = 'fire',
    ICE = 'ice',
    THUNDER = 'thunder',
    HEAL = 'heal',
}

export enum EventType {
    ACTION = 'action',
    EFFECT = 'effect',
}

export enum StatType {
    HP = 'hp',
    MP = 'mp',
    ATK = 'atk',
    DEF = 'def',
    INT = 'int',
    RES = 'res',
    SPEED = 'speed',
}

export enum TargetType {
    SELF = 'self',
    RANDOM = 'random',
    ALL = 'all',
    MAX_STAT = 'max_stat',
    MIN_STAT = 'min_stat',
}
