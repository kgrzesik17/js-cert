"use strict";

const env = {
  1: {
    mame: "warrior",
    hpMultiplier: 10,
    avoidDamageName: "block",
    avoidDamageChance: 0.25,
    damageReduction: 0.5,
  },
  2: {
    mame: "marksman",
    hpMultiplier: 3,
    avoidDamageName: "dodge",
    avoidDamageChance: 0.5,
    damageReduction: 0.2,
  },
  3: {
    mame: "mage",
    hpMultiplier: 5,
    avoidDamageName: "block",
    avoidDamageChance: 0,
    damageReduction: 0.3,
  },
};

class Player {
  constructor(player_class, strength, constitution) {
    this.damage = strength;
    this.hp = env[player_class].hpMultiplier * constitution;
    this.currentHp = this.hp;
    this.critChance = 0.5; // TODO
    this.critMultiplier = 2;
    this.avoidDamageChance = env[player_class].avoidDamageChance;
    this.damageReduction = env[player_class].damageReduction;
  }
}

function calculateSingleHitDamage(attacker, defender) {
  const damage_multiplier = Math.random() * (1.25 - 0.75) + 0.75; // damage spread
  const isCrit = Math.random() <= attacker.critChance ? true : false;
  const isHit = Math.random() > defender.avoidDamageChance ? true : false;

  if (!isHit) return [0, isCrit];

  let damage = attacker.damage * damage_multiplier; // check damge fluctuation
  if (isCrit) damage *= attacker.critMultiplier; // increase damage if crit

  damage *= 1 - defender.damageReduction; // apply damage reduction

  damage = Math.round(damage);

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

console.log(calculateSingleHitDamage(p1, p2));
