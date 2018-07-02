// @flow

import type {Armdozer} from "gbraver-burst-core/lib/armdozer/armdozer";

/**
 * アームドーザをコンソール用に整形する
 *
 * @param armdozer アームドーザ
 * @return 整形結果
 */
export function armdozerMessage(armdozer: Armdozer): string {
  return `${armdozer.name}
HP      : ${armdozer.maxHp}
BATTERY : ${armdozer.maxBattery}
POWER   : ${armdozer.power}
SPEED   : ${armdozer.speed}`;
}