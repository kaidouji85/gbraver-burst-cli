// @flow

import {inspect} from 'util';
import type {
  BattleResult,
  CriticalHit,
  Feint,
  Guard,
  Miss,
  NormalHit
} from "gbraver-burst-core/lib/effect/battle/result/battle-result";

/**
 * 戦闘結果をコンソール用に整形する
 *
 * @param result 戦闘結果
 * @return 整形結果
 */
export function battleResultMessage(result: BattleResult): string {
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

/** 通常ヒット */
export function normalHit(result: NormalHit): string {
  return `ヒット: ${result.damage}`;
}

/** ガード */
export function guard(result: Guard): string {
  return `ガード: ${result.damage}`;
}

/** クリティカルヒット */
export function criticalHit(result: CriticalHit): string {
  return `クリティカル: ${result.damage}`;
}

/** ミス */
export function miss(result: Miss): string {
  return 'ミス';
}

/** フェイント */
export function feint(result: Feint): string {
  return 'フェイント';
}