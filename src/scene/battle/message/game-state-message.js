// @flow

import type {GameState} from "gbraver-burst-core/lib/game-state/game-state";
import {inspect} from 'util';
import {playerStateMessage} from "./player-state-message";
import {effectMessage} from "./effect-message";

/** デリミタ */
const DELIMITER = '-'.repeat(32);

/**
 * ゲームステートをコンソール用に整形する
 *
 * @param gameState ゲームステート
 * @return 整形結果
 */
export function gameStateMessage(gameState: GameState): string {
  const players = gameState.players
    .map(v => playerStateMessage(v))
    .join(`
${DELIMITER}
`);

  return `手番プレイヤー: ${gameState.activePlayerId}
${DELIMITER}  
${effectMessage(gameState.effect)}
${DELIMITER}
${players}`;
}
