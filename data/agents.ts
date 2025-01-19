import { Agent, AgentLevel, CoreSkillLevel } from "@/types";

export const agents: Agent[] = [
  {
    id: "Attack_1",
    attribute: "Physical",
    rank: "S",
    speciality: "Attack",
    attackTable: {
      1: 131,
      10: 202,
      20: 329,
      30: 456,
      40: 582,
      50: 708,
      60: 835,
    },
    coreSkillLevelBonusType: "critRate",
  },
  {
    id: "Attack_2",
    attribute: "Ice",
    rank: "S",
    speciality: "Attack",
    attackTable: {
      1: 135,
      10: 209,
      20: 339,
      30: 470,
      40: 602,
      50: 732,
      60: 863,
    },
    coreSkillLevelBonusType: "critRate",
  },
  {
    id: "Attack_3",
    attribute: "Ether",
    rank: "S",
    speciality: "Attack",
    attackTable: {
      1: 132,
      10: 204,
      20: 332,
      30: 461,
      40: 588,
      50: 716,
      60: 844,
    },
    coreSkillLevelBonusType: "critDamage",
  },
  {
    id: "Attack_4",
    attribute: "Fire",
    rank: "S",
    speciality: "Attack",
    attackTable: {
      1: 128,
      10: 197,
      20: 321,
      30: 443,
      40: 567,
      50: 691,
      60: 813,
    },
    coreSkillLevelBonusType: "critRate",
  },
  {
    id: "Attack_8",
    attribute: "Electric",
    rank: "S",
    speciality: "Attack",
    attackTable: {
      1: 132,
      10: 204,
      20: 331,
      30: 458,
      40: 586,
      50: 713,
      60: 840,
    },
    coreSkillLevelBonusType: "critRate",
  },
  {
    id: "Attack_5",
    attribute: "Electric",
    rank: "A",
    speciality: "Attack",
    attackTable: {
      1: 114,
      10: 174,
      20: 283,
      30: 391,
      40: 500,
      50: 608,
      60: 716,
    },
    coreSkillLevelBonusType: "critRate",
  },
  {
    id: "Attack_6",
    attribute: "Physical",
    rank: "A",
    speciality: "Attack",
    attackTable: {
      1: 116,
      10: 178,
      20: 288,
      30: 400,
      40: 510,
      50: 621,
      60: 732,
    },
    coreSkillLevelBonusType: "critDamage",
  },
  {
    id: "Attack_7",
    attribute: "Physical",
    rank: "A",
    speciality: "Attack",
    attackTable: {
      1: 113,
      10: 173,
      20: 280,
      30: 389,
      40: 496,
      50: 604,
      60: 712,
    },
    coreSkillLevelBonusType: "critRate",
  },
  {
    id: "Stun_1",
    attribute: "Electric",
    rank: "S",
    speciality: "Stun",
    attackTable: {
      1: 113,
      10: 166,
      20: 270,
      30: 373,
      40: 476,
      50: 579,
      60: 683,
    },
    coreSkillLevelBonusType: "impact",
  },
  {
    id: "Stun_2",
    attribute: "Ice",
    rank: "S",
    speciality: "Stun",
    attackTable: {
      1: 105,
      10: 160,
      20: 258,
      30: 357,
      40: 456,
      50: 555,
      60: 653,
    },
    coreSkillLevelBonusType: "impact",
  },
  {
    id: "Stun_3",
    attribute: "Fire",
    rank: "S",
    speciality: "Stun",
    attackTable: {
      1: 106,
      10: 161,
      20: 261,
      30: 361,
      40: 460,
      50: 560,
      60: 660,
    },
    coreSkillLevelBonusType: "impact",
  },
  {
    id: "Stun_5",
    attribute: "Fire",
    rank: "S",
    speciality: "Stun",
    attackTable: {
      1: 109,
      10: 166,
      20: 277,
      30: 389,
      40: 500,
      50: 612,
      60: 722,
    },
    coreSkillLevelBonusType: "impact",
  },
  {
    id: "Stun_4",
    attribute: "Electric",
    rank: "A",
    speciality: "Stun",
    attackTable: {
      1: 95,
      10: 143,
      20: 232,
      30: 320,
      40: 408,
      50: 495,
      60: 583,
    },
    coreSkillLevelBonusType: "impact",
  },
  {
    id: "Anomaly_1",
    attribute: "Electric",
    rank: "S",
    speciality: "Anomaly",
    attackTable: {
      1: 119,
      10: 183,
      20: 296,
      30: 410,
      40: 523,
      50: 637,
      60: 750,
    },
    coreSkillLevelBonusType: "anomalyMastery",
  },
  {
    id: "Anomaly_3",
    attribute: "Physical",
    rank: "S",
    speciality: "Anomaly",
    attackTable: {
      1: 127,
      10: 196,
      20: 317,
      30: 439,
      40: 562,
      50: 683,
      60: 805,
    },
    coreSkillLevelBonusType: "anomalyMastery",
  },
  {
    id: "Anomaly_4",
    attribute: "Fire",
    rank: "S",
    speciality: "Anomaly",
    attackTable: {
      1: 124,
      10: 191,
      20: 310,
      30: 430,
      40: 549,
      50: 668,
      60: 788,
    },
    coreSkillLevelBonusType: "energy",
  },
  {
    id: "Anomaly_5",
    attribute: "Electric",
    rank: "S",
    speciality: "Anomaly",
    attackTable: {
      1: 126,
      10: 194,
      20: 315,
      30: 435,
      40: 555,
      50: 676,
      60: 797,
    },
    coreSkillLevelBonusType: "anomalyMastery",
  },
  {
    id: "Anomaly_6",
    attribute: "Frost",
    rank: "S",
    speciality: "Anomaly",
    attackTable: {
      1: 127,
      10: 196,
      20: 317,
      30: 439,
      40: 562,
      50: 683,
      60: 805,
    },
    coreSkillLevelBonusType: "anomalyProficiency",
  },
  {
    id: "Anomaly_2",
    attribute: "Physical",
    rank: "A",
    speciality: "Anomaly",
    attackTable: {
      1: 109,
      10: 166,
      20: 270,
      30: 373,
      40: 476,
      50: 580,
      60: 683,
    },
    coreSkillLevelBonusType: "energy",
  },
  {
    id: "Support_1",
    attribute: "Electric",
    rank: "S",
    speciality: "Support",
    attackTable: {
      1: 103,
      10: 157,
      20: 254,
      30: 351,
      40: 448,
      50: 544,
      60: 642,
    },
    coreSkillLevelBonusType: "penRate",
  },
  {
    id: "Support_2",
    attribute: "Ether",
    rank: "A",
    speciality: "Support",
    attackTable: {
      1: 93,
      10: 140,
      20: 227,
      30: 314,
      40: 400,
      50: 486,
      60: 574,
    },
    coreSkillLevelBonusType: "energy",
  },
  {
    id: "Support_3",
    attribute: "Fire",
    rank: "A",
    speciality: "Support",
    attackTable: {
      1: 95,
      10: 143,
      20: 232,
      30: 320,
      40: 408,
      50: 495,
      60: 583,
    },
    coreSkillLevelBonusType: "energy",
  },
  {
    id: "Support_4",
    attribute: "Ice",
    rank: "A",
    speciality: "Support",
    attackTable: {
      1: 96,
      10: 145,
      20: 234,
      30: 323,
      40: 413,
      50: 501,
      60: 590,
    },
    coreSkillLevelBonusType: "energy",
  },
  {
    id: "Defense_2",
    attribute: "Physical",
    rank: "S",
    speciality: "Defense",
    attackTable: {
      1: 101,
      10: 153,
      20: 250,
      30: 347,
      40: 443,
      50: 539,
      60: 636,
    },
    coreSkillLevelBonusType: "impact",
  },
  {
    id: "Defense_1",
    attribute: "Fire",
    rank: "A",
    speciality: "Defense",
    attackTable: {
      1: 117,
      10: 193,
      20: 328,
      30: 462,
      40: 597,
      50: 732,
      60: 867,
    },
    coreSkillLevelBonusType: "energy",
  },
  {
    id: "Defense_3",
    attribute: "Electric",
    rank: "A",
    speciality: "Defense",
    attackTable: {
      1: 93,
      10: 140,
      20: 225,
      30: 311,
      40: 397,
      50: 482,
      60: 568,
    },
    coreSkillLevelBonusType: "energy",
  },
];
