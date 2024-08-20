import {
  AgentStatus,
  EngineStatus,
  DiskStatus,
  BaseStatus,
  EnemyStatus,
  DamageBase,
  BattleStatus,
} from "./types";
import Decimal from "decimal.js";

export const calculateStatus = (
  agent: AgentStatus,
  engine: EngineStatus,
  diskStatus: DiskStatus
): BaseStatus => {
  const diskAttack =
    diskStatus.slot2.rank === "S"
      ? 316
      : diskStatus.slot2.rank === "A"
        ? 212
        : 104;

  let diskCritRate = 0;
  if (diskStatus.slot4.type === "critRate") {
    diskCritRate +=
      diskStatus.slot4.rank === "S"
        ? 24
        : diskStatus.slot4.rank === "A"
          ? 16
          : 8;
  }

  let diskCritDamage = 0;
  if (diskStatus.slot4.type === "critDamage") {
    diskCritDamage +=
      diskStatus.slot4.rank === "S"
        ? 48
        : diskStatus.slot4.rank === "A"
          ? 32
          : 16;
  }

  let diskAttackRate = 0;
  if (diskStatus.slot4.type === "attack") {
    diskAttackRate +=
      diskStatus.slot4.rank === "S"
        ? 30
        : diskStatus.slot4.rank === "A"
          ? 20
          : 10;
  }
  if (diskStatus.slot5.type === "attack") {
    diskAttackRate +=
      diskStatus.slot5.rank === "S"
        ? 30
        : diskStatus.slot5.rank === "A"
          ? 20
          : 10;
  }
  if (diskStatus.slot6.type === "attack") {
    diskAttackRate +=
      diskStatus.slot6.rank === "S"
        ? 30
        : diskStatus.slot6.rank === "A"
          ? 20
          : 10;
  }

  let diskDamageBuff = 0;
  if (diskStatus.slot5.type === "damageBuff") {
    diskDamageBuff +=
      diskStatus.slot5.rank === "S"
        ? 30
        : diskStatus.slot5.rank === "A"
          ? 20
          : 10;
  }

  let diskPenRate = 0;
  if (diskStatus.slot5.type === "penRate") {
    diskPenRate +=
      diskStatus.slot5.rank === "S"
        ? 24
        : diskStatus.slot5.rank === "A"
          ? 16
          : 8;
  }

  const baseAttack = agent.attack + engine.attack;
  const subAttackRate = diskStatus.attackRateCount * 3;
  const subAttack = diskStatus.attackCount * 19;
  const attackBonus = Math.floor(
    baseAttack * ((engine.attackRate + diskAttackRate + subAttackRate) / 100) +
      diskAttack +
      subAttack
  );
  const attack = baseAttack + attackBonus;

  const subCritRate = new Decimal(diskStatus.critRateCount)
    .times(2.4)
    .toNumber();
  const subCritDamage = new Decimal(diskStatus.critDamageCount)
    .times(4.8)
    .toNumber();

  return {
    level: agent.level,
    attack: attack,
    baseAttack: baseAttack,
    attackBonus: attackBonus,
    critRate: Math.min(
      new Decimal(agent.critRate)
        .add(engine.critRate)
        .add(diskCritRate)
        .add(subCritRate)
        .toNumber(),
      100
    ),
    critDamage: new Decimal(agent.critDamage)
      .add(engine.critDamage)
      .add(diskCritDamage)
      .add(subCritDamage)
      .toNumber(),
    damageBuff: agent.damageBuff + engine.damageBuff + diskDamageBuff,
    pen: diskStatus.penCount * 9,
    penRate: agent.penRate + engine.penRatio + diskPenRate,
  };
};

const damageLevel: Record<number, number> = {
  1: 50,
  10: 94,
  20: 172,
  30: 281,
  40: 421,
  50: 592,
  55: 689,
  60: 794,
};

export const calculateDamageBase = (
  baseStatus: BaseStatus,
  enemyStatus: EnemyStatus,
  battleStatus: BattleStatus
): DamageBase => {
  const critRate = baseStatus.critRate + battleStatus.critRateBonus;
  const critDamage = baseStatus.critDamage + battleStatus.critDamageBonus;
  const damageBuff = baseStatus.damageBuff + battleStatus.damageBuffBonus;
  const penRate = baseStatus.penRate + battleStatus.penRateBonus;

  const attack = new Decimal(baseStatus.attack)
    .times(new Decimal(100 + battleStatus.battleAttackRateBonus).div(100))
    .floor()
    .add(battleStatus.attackBonus)
    .toNumber();

  const critBonusRate = new Decimal(100)
    .add(new Decimal(critRate).div(100).times(critDamage))
    .times(100)
    .floor()
    .div(100)
    .toNumber();
  const damageBuffRate = 100 + damageBuff;
  const defense = Math.max(
    new Decimal(enemyStatus.defense)
      .times(new Decimal(100).sub(enemyStatus.defenseDown).div(100))
      .times(new Decimal(100).sub(penRate).div(100))
      .toNumber() - baseStatus.pen,
    0
  );

  const defenseRate = new Decimal(damageLevel[baseStatus.level])
    .div(new Decimal(damageLevel[baseStatus.level]).add(defense))
    .times(10000)
    .floor()
    .div(100)
    .toNumber();

  const resistanceRate =
    100 - enemyStatus.damageRes + enemyStatus.registanceDown;
  const stunBonusRate = enemyStatus.stunDamageMultiplier;

  return {
    attack: attack,
    damageBuff: damageBuffRate,
    critDamage: 100 + baseStatus.critDamage,
    critBonusRate: critBonusRate,
    pen: baseStatus.pen,
    penRatio: penRate,
    defenceRate: defenseRate,
    registanceRate: resistanceRate,
    stunBonusRate: stunBonusRate,
    isStun: enemyStatus.isStun,
  };
};

export const calculateDamage = (
  damageBase: DamageBase,
  skillDamageRate: number,
  isCrit: boolean
) => {
  const attack = new Decimal(damageBase.attack);
  const skillDamage = new Decimal(skillDamageRate).div(100);
  const damageBuff = new Decimal(damageBase.damageBuff).div(100);
  const defenceRate = new Decimal(damageBase.defenceRate).div(100);
  const registanceRate = new Decimal(damageBase.registanceRate).div(100);
  const stunBonusRate = new Decimal(
    damageBase.isStun ? damageBase.stunBonusRate : 100
  ).div(100);

  const damage = attack
    .times(skillDamage)
    .times(damageBuff)
    .times(defenceRate)
    .times(registanceRate)
    .times(stunBonusRate);

  const critDamage = new Decimal(damageBase.critDamage).div(100);

  if (isCrit) {
    return Math.floor(damage.times(critDamage).toNumber());
  }
  return Math.floor(damage.toNumber());
};

export const calculateExpectedDamage = (
  damageBase: DamageBase,
  skillDamageRate: number
) => {
  const damage = Math.floor(
    calculateDamage(damageBase, skillDamageRate, false) *
      (damageBase.critBonusRate / 100)
  );
  return damage;
};