"use strict";

const env = {
  1: {
    mame: "warrior",
    hp_multiplier: 10,
    avoid_damage_name: "block",
  },
  2: {
    mame: "marksman",
    hp_multiplier: 3,
    avoid_damage_name: "dodge",
  },
  3: {
    mame: "mage",
    hp_multiplier: 5,
    avoid_damage_name: "block",
  },
};

class Player {
  constructor(player_class, strength, constitution) {
    this.damage = strength;
    this.hp = env[player_class].hp_multiplier * constitution;
  }
}

const p1 = new Player(1, 10, 10);

console.log(p1.hp);
