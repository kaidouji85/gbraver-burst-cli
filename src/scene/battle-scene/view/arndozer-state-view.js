// @flow

import type {ArmdozerState} from "gbraver-burst-core/lib/game-state/armdozer-state";

/**
 * アームドーザの状態をコンソール用に整形する
 *
 * @param armdozer アームドーザの状態
 * @return コンソール用に整形したアームドーザの状態
 */
export function armdozerStateView(armdozer: ArmdozerState): string {
  return `${armdozer.name}
HP      : ${armdozer.hp} / ${armdozer.maxHp}
BATTERY : ${armdozer.battery} / ${armdozer.maxBattery}
BURST   : ${armdozer.enableBurst ? 'ENABLE' : 'DISABLE'}`;
}