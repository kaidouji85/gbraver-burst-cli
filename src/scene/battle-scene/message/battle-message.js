// @flow

import type {Battle} from "gbraver-burst-core/lib/effect/battle/effect/index";
import {battleResultMessage} from "./battle-result-message";

/**
 * 戦闘結果をコマンドライン用に整形する
 *
 * @param effect 戦闘結果
 * @return 整形結果
 */
export function battleMessage(effect: Battle): string {
  return `攻撃(${effect.attackerBattery}) -> 防御(${effect.defenderBattery})
${battleResultMessage(effect.result)}`;
}
