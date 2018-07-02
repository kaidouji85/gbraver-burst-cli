// @flow

import type {Battle} from "gbraver-burst-core/lib/effect/battle/effect/index";
import {battleResultView} from "./battle-result-view";

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
