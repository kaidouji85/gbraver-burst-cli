// @flow

import type {PlayerState} from "gbraver-burst-core/lib/game-state/player-state";
import {armdozerStateView} from "./arndozer-state-view";

/**
 * プレイヤー状態をコンソール用に整形する
 *
 * @param player
 */
export function playerStateView(player: PlayerState): string {
  return `${player.playerId}
${armdozerStateView(player.armdozer)}`;
}