// @flow

import {playerMessage} from "./player-message";
import type {Player} from "gbraver-burst-core/lib/player/player";

const DELIMITER = '-'.repeat(32);

/**
 * ゲーム参加プレイヤーをコンソール用に整形する
 *
 * @param playerList ゲーム参加プレイヤー
 * @return 整形結果
 */
export function playerListMessage(playerList: Player[]): string {
  const players = playerList
    .map(v => playerMessage(v))
    .join(`
${DELIMITER}
`);

  return `${DELIMITER}
${players}
${DELIMITER}`;
}