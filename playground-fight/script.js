"use strict";

let fightLog = false;

const gameVariables = {
  damageSpread: [0.75, 1.25],

  classes: {
    1: {
      name: "warrior",
      classDamageMultiplier: 1,
      hpMultiplier: 9,
      damageMultiplier: 1,
      avoidDamageName: "blocked",
      avoidDamageChance: 0.25,
      damageReduction: 0.5,
      multiHitChance: 0,
      alwaysHits: false,
      ignoreArmor: false,
    },
    2: {
      name: "marksman",
      classDamageMultiplier: 3.11,
      hpMultiplier: 3,
      avoidDamageName: "dodged",
      avoidDamageChance: 0.5,
      damageReduction: 0.2,
      multiHitChance: 0,
      alwaysHits: false,
      ignoreArmor: false,
    },
    3: {
      name: "mage",
      classDamageMultiplier: 1.75,
      hpMultiplier: 5,
      avoidDamageName: "blocked",
      avoidDamageChance: 0,
      damageReduction: 0.1,
      multiHitChance: 0,
      alwaysHits: true,
      ignoreArmor: true,
    },
    4: {
      name: "assasin",
      classDamageMultiplier: 2.61,
      hpMultiplier: 3,
      avoidDamageName: "blocked",
      avoidDamageChance: 0,
      damageReduction: 0.25,
      multiHitChance: 0.5,
      alwaysHits: false,
      ignoreArmor: false,
    },
  },
};

export class Player {
  constructor(name, level, player_class, strength, constitution) {
    this.name = name;
    this.damage = strength;
    this.classDamageMultiplier =
      gameVariables.classes[player_class].classDamageMultiplier;
    this.hp =
      gameVariables.classes[player_class].hpMultiplier * constitution * level;
    this.critChance = 0.5; // TODO
    this.critMultiplier = 2;
    this.avoidDamageChance =
      gameVariables.classes[player_class].avoidDamageChance;
    this.avoidDamageName = gameVariables.classes[player_class].avoidDamageName;
    this.damageReduction = gameVariables.classes[player_class].damageReduction;
    this.alwaysHits = gameVariables.classes[player_class].alwaysHits;
    this.ignoreArmor = gameVariables.classes[player_class].ignoreArmor;

    this.multiHitChance = gameVariables.classes[player_class].multiHitChance;
  }
}

function calculateSingleHitDamage(attacker, defender) {
  let damageMultiplier = attacker.classDamageMultiplier; // class damage multiplier
  damageMultiplier *=
    Math.random() *
      (gameVariables.damageSpread[1] - gameVariables.damageSpread[0]) +
    gameVariables.damageSpread[0]; // damage spread
  const isCrit = Math.random() <= attacker.critChance ? true : false;
  let isHit = Math.random() > defender.avoidDamageChance ? true : false;

  if (attacker.alwaysHits) isHit = true; // always hit for certain classes

  if (!isHit) return [0, isCrit];

  let damage = attacker.damage * damageMultiplier; // check damge fluctuation
  if (isCrit) damage *= attacker.critMultiplier; // increase damage if crit

  if (!attacker.ignoreArmor) damage *= 1 - defender.damageReduction; // apply damage reduction

  damage = Math.round(damage);

  // damage, isCrit
  return [damage, isCrit];
}

function fight(attacker, defender) {
  // TODO: random person starting the fight

  attacker.currentHp = attacker.hp;
  defender.currentHp = defender.hp;

  while (attacker.currentHp > 0 && defender.currentHp > 0) {
    round(attacker, defender);
    if (defender.currentHp <= 0) {
      // console.log(`${attacker.name} has won!`);
      return 1;
    }

    round(defender, attacker);
    if (attacker.currentHp <= 0) {
      // console.log(`${defender.name} has won!`);
      return 0;
    }
  }
}

function round(attacker, defender, isMultiHit = false) {
  const singleHitDamage = calculateSingleHitDamage(attacker, defender);

  defender.currentHp -= singleHitDamage[0];

  if (fightLog) log(singleHitDamage, attacker, defender, isMultiHit);

  if (defender.currentHp <= 0) return [singleHitDamage, isMultiHit];

  if (Math.random() <= attacker.multiHitChance) round(attacker, defender, true);

  return [singleHitDamage, isMultiHit];
}

function log(singleHitDamage, attacker, defender, isMultiHit) {
  let message = "";

  if (singleHitDamage[0] == 0) {
    message = `${attacker.name} missed! ${defender.name} ${defender.avoidDamageName}! ${defender.name}'s HP: ${defender.currentHp}`;
  } else if (singleHitDamage[1] == true) {
    message = `${attacker.name} dealt ${singleHitDamage[0]} (!) damage. ${defender.name}'s HP: ${defender.currentHp}`;
  } else {
    message = `${attacker.name} dealt ${singleHitDamage[0]} damage. ${defender.name}'s HP: ${defender.currentHp}`;
  }

  if (isMultiHit) message += " COMBO!";

  console.log(message);

  return message;
}

const p1 = new Player("Warrior", 10, 1, 10, 10);
const p2 = new Player("Marksman", 10, 2, 10, 10);
const p3 = new Player("Mage", 10, 3, 10, 10);
const p4 = new Player("Assasin", 10, 4, 10, 10);

function checkWinrate(attacker, defender, rounds = 1) {
  let won = 0;
  const hps = [];

  for (let i = 0; i < rounds; i++) {
    if (fight(attacker, defender)) {
      won++;
      hps.push(attacker.currentHp);
    }
  }

  const winrate = (won / rounds) * 100 + "%";
  const minimum = Math.min(...hps);

  // console.log(won);
  // console.log(winrate);
  // console.log(minimum);
  // console.log(hps);
  return won;
}

function tournament(players = [], rounds) {
  const wins = [0, 0, 0, 0];
  const winrates = [];

  //  simulate battles everyone vs eveyrone rounds times
  for (let round = 0; round < rounds; round++) {
    for (let i = 0; i < players.length; i++) {
      for (let j = 0; j < players.length; j++) {
        if (players[i] == players[j]) continue;

        wins[i] += checkWinrate(players[i], players[j]);
      }
    }
  }

  return wins;
}

function animate() {
  const weapon = document.querySelector(".weapon");
  weapon.style.animation =
    "attack 1.5s cubic-bezier(0.65, 0, 0.35, 1) forwards";

  const missle = document.querySelector(".missle");
  missle.style.animation =
    "missle 1s cubic-bezier(0.61, 1, 0.88, 1) 0.8s forwards";
  missle.style.opacity = "0";
}

fight(p2, p4, true);

fightLog = false;

console.log(tournament([p1, p2, p3, p4], 1000));

animate();
setTimeout(animate(), 2000);
