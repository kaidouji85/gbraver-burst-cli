// @flow
import {inspect} from 'util';
import type {GameState} from "gbraver-burst-core/lib/game-state/game-state";
import {gameStateView} from "./game-state-view";

/** デリミタ */
export const DELIMITER = '-'.repeat(64);

/**
 * ゲーム状態履歴をコンソール表示用に整形する
 *
 * @param gameStateHistory ゲーム状態履歴
 */
export function gameStateHistoryView(gameStateHistory: GameState[]): string {
  const history = gameStateHistory
    .map(v => gameStateView(v))
    .join(`
${DELIMITER}
`);

  return `${DELIMITER}
${history}
${DELIMITER}`;
}