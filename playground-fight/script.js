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
    this.critChance = 0.5; // TODO
    this.critMultiplier = 2;
  }
}

function calculateSingleHitDamage(attacker, defender) {
  const damage_multiplier = Math.random() * (1.25 - 0.75) + 0.75; // damage spread
  const isCrit = Math.random() <= attacker.critChance ? true : false;

  let damage = attacker.damage * damage_multiplier; // check damge fluctuation
  if (isCrit) damage *= attacker.critMultiplier; // increase damage if crit

  damage = Math.round(damage);

  console.log([damage, isCrit]);

  // damage, isCrit
  return [damage, isCrit];
}

function loop(p1, p2) {
  for (let i = 0; i < 10; i++) {
    calculateSingleHitDamage(p1, p2);
  }
}

const p1 = new Player(1, 10, 10);
const p2 = new Player(2, 10, 10);

calculateSingleHitDamage(p1, p2);
