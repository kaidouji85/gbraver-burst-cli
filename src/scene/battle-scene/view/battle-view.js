// @flow

import type {Battle} from "gbraver-burst-core/lib/effect/battle/effect/index";
import type {
  BattleResult,
  CriticalHit,
  Miss,
  Guard,
  NormalHit, Feint
} from "gbraver-burst-core/lib/effect/battle/result/battle-result";
import {inspect} from 'util';

/**
 * 戦闘結果をコマンドライン用に整形する
 *
 * @param effect 戦闘結果
 * @return 整形結果
 */
export function battleView(effect: Battle): string {
  return `攻撃(${effect.attackerBattery}) -> 防御(${effect.defenderBattery})
${battleResultView(effect.result)}`;
}

export function battleResultView(result: BattleResult): string {
  switch (result.name) {
    case 'NormalHit':
      return normalHit(result);
    case 'Guard':
      return guard(result);
    case 'CriticalHit':
      return criticalHit(result);
    case 'Miss':
      return miss(result);
    case 'Feint':
      return feint(result);
    default:
      return inspect(result, {depth: null});

  }
}

export function normalHit(result: NormalHit): string {
  return `ヒット(${result.damage})`;
}

export function guard(result: Guard): string {
  return `ガード(${result.damage})`;
}

export function criticalHit(result: CriticalHit): string {
  return `クリティカル(${result.damage})`;
}

export function miss(result: Miss): string {
  return 'ミス';
}

export function feint(result: Feint): string {
  return 'フェイント';
}