import { DiskConfig, EnemyStatus, BattleStatus } from "@/types";

export const defaultDiskStatus: DiskConfig = {
  slot1: {
    rank: "S",
    drive: "WoodpeckerElectro",
    mainStatus: "hp",
    subStatusUp: {
      hp: 3,
      hpRate: 3,
      attack: 3,
      attackRate: 3,
      defense: 3,
      defenseRate: 3,
      critRate: 3,
      critDamage: 3,
      anomalyProficiency: 3,
      pen: 3,
    },
  },
  slot2: {
    rank: "S",
    drive: "WoodpeckerElectro",
    mainStatus: "attack",
    subStatusUp: {
      hp: 0,
      hpRate: 0,
      attack: 0,
      attackRate: 0,
      defense: 0,
      defenseRate: 0,
      critRate: 0,
      critDamage: 0,
      anomalyProficiency: 0,
      pen: 0,
    },
  },
  slot3: {
    rank: "S",
    drive: "WoodpeckerElectro",
    mainStatus: "defense",
    subStatusUp: {
      hp: 0,
      hpRate: 0,
      attack: 0,
      attackRate: 0,
      defense: 0,
      defenseRate: 0,
      critRate: 0,
      critDamage: 0,
      anomalyProficiency: 0,
      pen: 0,
    },
  },
  slot4: {
    rank: "S",
    drive: "WoodpeckerElectro",
    mainStatus: "critDamage",
    subStatusUp: {
      hp: 0,
      hpRate: 0,
      attack: 0,
      attackRate: 0,
      defense: 0,
      defenseRate: 0,
      critRate: 0,
      critDamage: 0,
      anomalyProficiency: 0,
      pen: 0,
    },
  },
  slot5: {
    rank: "S",
    drive: "HormonePunk",
    mainStatus: "damageBuff",
    subStatusUp: {
      hp: 0,
      hpRate: 0,
      attack: 0,
      attackRate: 0,
      defense: 0,
      defenseRate: 0,
      critRate: 0,
      critDamage: 0,
      anomalyProficiency: 0,
      pen: 0,
    },
  },
  slot6: {
    rank: "S",
    drive: "HormonePunk",
    mainStatus: "attackRate",
    subStatusUp: {
      hp: 0,
      hpRate: 0,
      attack: 0,
      attackRate: 0,
      defense: 0,
      defenseRate: 0,
      critRate: 0,
      critDamage: 0,
      anomalyProficiency: 0,
      pen: 0,
    },
  },
};

export const defaultEnemyStatus: EnemyStatus = {
  level: 70,
  defense: 60,
  damageRes: 0,
  defenseDown: 0,
  registanceDown: 0,
  stunDamageMultiplier: 150,
  isStun: false,
};

export const defaultBattleStatus: BattleStatus = {
  attackBonus: 0,
  skillDamageRate: 100,
  attackBuff: 0,
  critRateBonus: 0,
  critDamageBonus: 0,
  damageBuffBonus: 0,
  attrBuffBonus: 0,
  penRateBonus: 0,
};
