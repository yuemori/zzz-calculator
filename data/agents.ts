import { Agent, AgentLevel, CoreSkillLevel } from "@/types";

export const agents: Agent[] = [
  {
    name: "猫宮又奈",
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
    name: "エレン・ジョー",
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
    name: "朱鳶",
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
    name: "11号",
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
    name: "アンドー・イワノフ",
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
    name: "カリン・ウィクス",
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
    name: "ビリー・キッド",
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
    name: "青衣",
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
    name: "フォン・ライカン",
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
    name: "クレタ・ベロボーグ",
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
    name: "アンビー・デマラ",
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
    name: "グレース・ハワード",
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
    name: "パイパー・ウィール",
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
    name: "アレクサンドリナ・セバスチャン",
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
    name: "ニコ・デマラ",
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
    name: "ルシアーナ・デ・モンテフィーノ",
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
    name: "蒼角",
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
    name: "ベン・ビガー",
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
];
