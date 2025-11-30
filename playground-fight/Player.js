import { gameVariables } from "/gameVariables.js";

export class Player {
  constructor(name, player_class, strength, constitution) {
    this.name = name;
    this.damage = strength;
    // this.hp = env.classes[player_class].hpMultiplier * constitution;
    this.hp = constitution * 10; // TODO
    this.critChance = 0.5; // TODO
    this.critMultiplier = 2;
    this.avoidDamageChance =
      gameVariables.classes[player_class].avoidDamageChance;
    this.avoidDamageName = gameVariables.classes[player_class].avoidDamageName;
    this.damageReduction = gameVariables.classes[player_class].damageReduction;
    this.alwaysHits = gameVariables.classes[player_class].alwaysHits;
    this.ignoreArmor = gameVariables.classes[player_class].ignoreArmor;

    this.multiHitchance = gameVariables.classes[player_class].multiHitchance;
  }
}
