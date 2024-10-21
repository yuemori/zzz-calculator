import { Engine, EngineLevel, EngineBaseAttack, EngineRank } from "@/types";

export const engines: Engine[] = [
  {
    id: "Attack_1",
    name: "鋼の肉球",
    rank: "S",
    speciality: "Attack",
    baseAttack: 46,
    statusType: "critRate",
  },
  {
    id: "Attack_2",
    name: "ブリムストーン",
    rank: "S",
    speciality: "Attack",
    baseAttack: 46,
    statusType: "attackRate",
  },
  {
    id: "Attack_3",
    name: "ディープシー・ビジター",
    rank: "S",
    speciality: "Attack",
    baseAttack: 48,
    statusType: "critRate",
  },
  {
    id: "Attack_4",
    name: "サプレッサーVI型",
    rank: "S",
    speciality: "Attack",
    baseAttack: 48,
    statusType: "critDamage",
  },
  {
    id: "Attack_5",
    name: "ストリートスター",
    rank: "A",
    speciality: "Attack",
    baseAttack: 40,
    statusType: "attackRate",
  },
  {
    id: "Attack_6",
    name: "スターライトエンジン",
    rank: "A",
    speciality: "Attack",
    baseAttack: 40,
    statusType: "attackRate",
  },
  {
    id: "Attack_7",
    name: "ハウスキーパー",
    rank: "A",
    speciality: "Attack",
    baseAttack: 42,
    statusType: "attackRate",
  },
  {
    id: "Attack_8",
    name: "なんちゃってスターライトエンジン",
    rank: "A",
    speciality: "Attack",
    baseAttack: 42,
    statusType: "attackRate",
  },
  {
    id: "Attack_9",
    name: "ドリルリグ-レッドシャフト",
    rank: "A",
    speciality: "Attack",
    baseAttack: 42,
    statusType: "energy",
  },
  {
    id: "Attack_10",
    name: "キャノンローラー",
    rank: "A",
    speciality: "Attack",
    baseAttack: 40,
    statusType: "critRate",
  },
  {
    id: "Attack_11",
    name: "金メッキの花信",
    rank: "A",
    speciality: "Attack",
    baseAttack: 40,
    statusType: "attackRate",
  },
  {
    id: "Attack_12",
    name: "「月相」-望",
    rank: "B",
    speciality: "Attack",
    baseAttack: 32,
    statusType: "attackRate",
  },
  {
    id: "Attack_13",
    name: "「月相」-晦",
    rank: "B",
    speciality: "Attack",
    baseAttack: 32,
    statusType: "attackRate",
  },
  {
    id: "Attack_14",
    name: "「月相」-朔",
    rank: "B",
    speciality: "Attack",
    baseAttack: 32,
    statusType: "critRate",
  },
  {
    id: "Stun_1",
    name: "玉壺青氷",
    rank: "S",
    speciality: "Stun",
    baseAttack: 48,
    statusType: "impact",
  },
  {
    id: "Stun_2",
    name: "燃獄ギア",
    rank: "S",
    speciality: "Stun",
    baseAttack: 46,
    statusType: "impact",
  },
  {
    id: "Stun_3",
    name: "拘縛されし者",
    rank: "S",
    speciality: "Stun",
    baseAttack: 46,
    statusType: "impact",
  },
  {
    id: "Stun_4",
    name: "まな板の鯉",
    rank: "A",
    speciality: "Stun",
    baseAttack: 40,
    statusType: "energy",
  },
  {
    id: "Stun_5",
    name: "貴重な化石コア",
    rank: "A",
    speciality: "Stun",
    baseAttack: 40,
    statusType: "impact",
  },
  {
    id: "Stun_6",
    name: "デマラ式電池II型",
    rank: "A",
    speciality: "Stun",
    baseAttack: 42,
    statusType: "impact",
  },
  {
    id: "Stun_7",
    name: "シックスシューター",
    rank: "A",
    speciality: "Stun",
    baseAttack: 40,
    statusType: "impact",
  },
  {
    id: "Stun_8",
    name: "「激流」-銃型",
    rank: "B",
    speciality: "Stun",
    baseAttack: 32,
    statusType: "attackRate",
  },
  {
    id: "Stun_9",
    name: "「激流」-矢型",
    rank: "B",
    speciality: "Stun",
    baseAttack: 32,
    statusType: "impact",
  },
  {
    id: "Stun_10",
    name: "「激流」-斧型",
    rank: "B",
    speciality: "Stun",
    baseAttack: 32,
    statusType: "energy",
  },
  {
    id: "Anomaly_1",
    name: "複合コンパイラ",
    rank: "S",
    speciality: "Anomaly",
    baseAttack: 46,
    statusType: "penRate",
  },
  {
    id: "Anomaly_2",
    name: "密林の食いしん坊",
    rank: "A",
    speciality: "Anomaly",
    baseAttack: 40,
    statusType: "anomalyProficiency",
  },
  {
    id: "Anomaly_3",
    name: "双生の涙",
    rank: "A",
    speciality: "Anomaly",
    baseAttack: 40,
    statusType: "attackRate",
  },
  {
    id: "Anomaly_4",
    name: "電撃リップクロス",
    rank: "A",
    speciality: "Anomaly",
    baseAttack: 40,
    statusType: "anomalyProficiency",
  },
  {
    id: "Anomaly_5",
    name: "グロウル・マイ・カー",
    rank: "A",
    speciality: "Anomaly",
    baseAttack: 42,
    statusType: "attackRate",
  },
  {
    id: "Anomaly_6",
    name: "「磁気嵐」-壱式",
    rank: "B",
    speciality: "Anomaly",
    baseAttack: 32,
    statusType: "attackRate",
  },
  {
    id: "Anomaly_7",
    name: "「磁気嵐」-弐式",
    rank: "B",
    speciality: "Anomaly",
    baseAttack: 32,
    statusType: "anomalyProficiency",
  },
  {
    id: "Anomaly_8",
    name: "「磁気嵐」-参式",
    rank: "B",
    speciality: "Anomaly",
    baseAttack: 32,
    statusType: "penRate",
  },
  {
    id: "Support_1",
    name: "啜り泣くゆりかご",
    rank: "S",
    speciality: "Support",
    baseAttack: 46,
    statusType: "penRate",
  },
  {
    id: "Support_2",
    name: "歳月の薄片",
    rank: "A",
    speciality: "Support",
    baseAttack: 40,
    statusType: "penRate",
  },
  {
    id: "Support_3",
    name: "ザ・ボールド",
    rank: "A",
    speciality: "Support",
    baseAttack: 42,
    statusType: "energy",
  },
  {
    id: "Support_4",
    name: "恥じらう悪面",
    rank: "A",
    speciality: "Support",
    baseAttack: 42,
    statusType: "attackRate",
  },
  {
    id: "Support_5",
    name: "喧嘩腰のボンバルダム",
    rank: "A",
    speciality: "Support",
    baseAttack: 42,
    statusType: "energy",
  },
  {
    id: "Support_6",
    name: "ゲームボール",
    rank: "A",
    speciality: "Support",
    baseAttack: 40,
    statusType: "energy",
  },
  {
    id: "Support_7",
    name: "「残響」-I型",
    rank: "B",
    speciality: "Support",
    baseAttack: 32,
    statusType: "attackRate",
  },
  {
    id: "Support_8",
    name: "「残響」-II型",
    rank: "B",
    speciality: "Support",
    baseAttack: 32,
    statusType: "energy",
  },
  {
    id: "Support_9",
    name: "「残響」-III型",
    rank: "B",
    speciality: "Support",
    baseAttack: 32,
    statusType: "hp",
  },
  {
    id: "Defense_1",
    name: "ビガー・シリンダー",
    rank: "A",
    speciality: "Defense",
    baseAttack: 40,
    statusType: "defense",
  },
  {
    id: "Defense_2",
    name: "正規版変身装置",
    rank: "A",
    speciality: "Defense",
    baseAttack: 40,
    statusType: "hp",
  },
  {
    id: "Defense_3",
    name: "ラピットチャージャー",
    rank: "A",
    speciality: "Defense",
    baseAttack: 40,
    statusType: "defense",
  },
  {
    id: "Defense_4",
    name: "ホットスプリング",
    rank: "A",
    speciality: "Defense",
    baseAttack: 40,
    statusType: "attackRate",
  },
  {
    id: "Defense_5",
    name: "「恒等式」-本格",
    rank: "B",
    speciality: "Defense",
    baseAttack: 32,
    statusType: "defense",
  },
  {
    id: "Defense_6",
    name: "「恒等式」-変格",
    rank: "B",
    speciality: "Defense",
    baseAttack: 32,
    statusType: "defense",
  },
];

export const engineAttackTable: Record<
  EngineBaseAttack,
  Record<EngineLevel, number>
> = {
  32: {
    0: 32,
    10: 82,
    20: 160,
    30: 239,
    40: 318,
    50: 397,
    60: 475,
  },
  40: {
    0: 40,
    10: 102,
    20: 201,
    30: 299,
    40: 397,
    50: 496,
    60: 594,
  },
  42: {
    0: 42,
    10: 107,
    20: 211,
    30: 314,
    40: 417,
    50: 521,
    60: 624,
  },
  46: {
    0: 46,
    10: 118,
    20: 231,
    30: 344,
    40: 457,
    50: 570,
    60: 684,
  },
  48: {
    0: 48,
    10: 123,
    20: 241,
    30: 359,
    40: 477,
    50: 595,
    60: 713,
  },
};

export const engineCritRateTable: Record<
  EngineRank,
  Record<EngineLevel, number>
> = {
  S: {
    0: 9.6,
    10: 9.6,
    20: 12.5,
    30: 15.4,
    40: 18.2,
    50: 21.1,
    60: 24,
  },
  // unknown data
  A: {
    0: 8,
    10: 8,
    20: 10.4,
    30: 12.8,
    40: 15.2,
    50: 17.6,
    60: 20,
  },
  // unknown data
  B: {
    0: 6.4,
    10: 6.4,
    20: 8.3,
    30: 10.2,
    40: 12,
    50: 14,
    60: 16,
  },
};

export const engineCritDamageTable: Record<
  EngineRank,
  Record<EngineLevel, number>
> = {
  S: {
    0: 19.2,
    10: 19.2,
    20: 25,
    30: 30.8, // unknown data
    40: 36.4, // unknown data
    50: 42.2, // unknown data
    60: 48,
  },
  // unknown data
  A: {
    0: 16,
    10: 16,
    20: 20.8,
    30: 25.6,
    40: 30.4,
    50: 35.2,
    60: 40,
  },
  // unknown data
  B: {
    0: 12.0,
    10: 12.8,
    20: 16.6,
    30: 20.4,
    40: 24.2,
    50: 28,
    60: 32,
  },
};

export const enginePenRateTable: Record<
  EngineRank,
  Record<EngineLevel, number>
> = {
  S: {
    0: 9.6,
    10: 9.6,
    20: 12.5,
    30: 15.4,
    40: 18.2,
    50: 21.1,
    60: 24,
  },
  // unknown data
  A: {
    0: 8,
    10: 8,
    20: 10.4,
    30: 12.8,
    40: 15.2,
    50: 17.6,
    60: 20,
  },
  // unknown data
  B: {
    0: 6.4,
    10: 6.4,
    20: 8.3,
    30: 10.2,
    40: 12,
    50: 14,
    60: 16,
  },
};

export const engineAttackRateTable: Record<
  EngineRank,
  Record<EngineLevel, number>
> = {
  S: {
    0: 12,
    10: 12,
    20: 15.6, // unknown data
    30: 19.2, // unknown data
    40: 22.8, // unknown data
    50: 26.4, // unknown data
    60: 30,
  },
  A: {
    0: 10,
    10: 10,
    20: 13,
    30: 16,
    40: 19,
    50: 22,
    60: 25,
  },
  B: {
    0: 8,
    10: 8,
    20: 10.4, // unknown data
    30: 12.8, // unknown data
    40: 15.2, // unknown data
    50: 17.6, // unknown data
    60: 20,
  },
};
