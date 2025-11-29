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
    this.currentHp = this.hp;
  }
}

function fight(attacker, defender) {
  console.log(defender.currentHp);
  while (attacker.currentHp > 0 && defender.currentHp > 0) {
    let damage_multiplier = Math.random() * (1.25 - 0.75) + 0.75; // damage spread
    let damage = Math.round(attacker.damage * damage_multiplier);

    defender.currentHp -= damage;
    console.log(`You hit your opponent for ${damage} damage`);
    console.log(`He's left with ${defender.currentHp} HP.`);
  }
}

const p1 = new Player(1, 10, 10);
const p2 = new Player(2, 10, 10);

fight(p1, p2);
