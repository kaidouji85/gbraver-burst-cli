// @flow

import type {PlayerState} from "gbraver-burst-core/lib/game-state/player-state";
import {armdozerStateMessage} from "./arndozer-state-message";

/**
 * プレイヤー状態をコンソール用に整形する
 *
 * @param player　プレイヤー状態
 * @return 整形結果
 */
export function playerStateMessage(player: PlayerState): string {
  return `${player.playerId}
${armdozerStateMessage(player.armdozer)}`;
}