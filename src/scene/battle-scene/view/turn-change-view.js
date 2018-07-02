// @flow

import type {TurnChange} from "gbraver-burst-core/lib/effect/turn-change/turn-change";

/**
 * ターンチェンジ結果をコマンドライン用に整形する
 *
 * @param effect ターンチェンジ結果
 * @return 整形結果
 */
export function turnChangeView(effect: TurnChange): string {
  return 'ターンチェンジ';
}