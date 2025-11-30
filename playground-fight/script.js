"use strict";

const env = {
  1: {
    mame: "warrior",
    hpMultiplier: 10,
    avoidDamageName: "blocked",
    avoidDamageChance: 0.25,
    damageReduction: 0.5,
  },
  2: {
    mame: "marksman",
    hpMultiplier: 3,
    avoidDamageName: "dodged",
    avoidDamageChance: 0.5,
    damageReduction: 0.25,
  },
  3: {
    mame: "mage",
    hpMultiplier: 5,
    avoidDamageName: "blocked",
    avoidDamageChance: 0,
    damageReduction: 0.1,
  },
};

class Player {
  constructor(name, player_class, strength, constitution) {
    this.name = name;
    this.damage = strength;
    // this.hp = env[player_class].hpMultiplier * constitution;
    this.hp = constitution * 10; // TODO
    this.currentHp = this.hp;
    this.critChance = 0.5; // TODO
    this.critMultiplier = 2;
    this.avoidDamageChance = env[player_class].avoidDamageChance;
    this.avoidDamageName = env[player_class].avoidDamageName;
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

function fight(attacker, defender) {
  // TODO: DRY
  while (attacker.currentHp > 0 && defender.currentHp > 0) {
    let singleHitDamage = calculateSingleHitDamage(attacker, defender);

    defender.currentHp -= singleHitDamage[0];
    log(singleHitDamage, attacker, defender);

    if (defender.currentHp <= 0) {
      console.log(`${attacker.name} has won!`);
      return 1;
    }

    singleHitDamage = calculateSingleHitDamage(defender, attacker);

    attacker.currentHp -= singleHitDamage[0];
    log(singleHitDamage, defender, attacker);

    if (attacker.currentHp <= 0) {
      console.log(`${defender.name} has won!`);
      return 0;
    }
  }
}

function log(singleHitDamage, attacker, defender) {
  if (singleHitDamage[0] == 0) {
    console.log(
      `${defender.name} ${defender.avoidDamageName}. ${defender.name} HP: ${defender.currentHp}`
    );
  } else if (singleHitDamage[1] == true) {
    console.log(
      `${attacker.name} dealt ${singleHitDamage[0]}! damage. ${defender.name} HP: ${defender.currentHp}`
    );
  } else {
    console.log(
      `${attacker.name} dealt ${singleHitDamage[0]} damage. ${defender.name} HP: ${defender.currentHp}`
    );
  }
}

function loop(p1, p2) {
  for (let i = 0; i < 10; i++) {
    calculateSingleHitDamage(p1, p2);
  }
}

const p1 = new Player("Warrior", 1, 10, 10);
const p2 = new Player("Marksman", 2, 10, 10);

fight(p1, p2);
