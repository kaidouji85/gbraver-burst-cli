// @flow
import {inspect} from 'util';
import type {GameState} from "gbraver-burst-core/lib/game-state/game-state";
import {gameStateMessage} from "./game-state-message";

/** デリミタ */
export const DELIMITER = '-'.repeat(64);

/**
 * ゲーム状態履歴をコンソール表示用に整形する
 *
 * @param gameStateHistory ゲーム状態履歴
 * @return 整形結果
 */
export function gameStateHistoryMessage(gameStateHistory: GameState[]): string {
  const history = gameStateHistory
    .map(v => gameStateMessage(v))
    .join(`
${DELIMITER}
`);

  return `${DELIMITER}
${history}
${DELIMITER}`;
}