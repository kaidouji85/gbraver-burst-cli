// @flow

import {armdozerMessage} from "./armdozer-message";
import type {Player} from "gbraver-burst-core/lib/player/player";

/**
 * プレイヤー情報をコンソール用に整形する
 *
 * @param player プレイヤー情報
 * @return 整形結果
 */
export function playerMessage(player: Player): string {
  return `${player.playerId}
${armdozerMessage(player.armdozer)}`;
}