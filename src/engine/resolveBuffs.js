/* stats as buffed baseStats */
module.exports = (warrior) => {
    warrior.stats = warrior.baseStats

    const cumulBuff = {atk: 0, def: 0, int: 0, res: 0, speed: 0}
    for(const buff of warrior.buffs) {
        for(const stat in buff) {
            cumulBuff[stat] += buff[stat]
        }
    }

    for(const stat in cumulBuff) {
        warrior.stats[stat] += cumulBuff[stat]
    }
}