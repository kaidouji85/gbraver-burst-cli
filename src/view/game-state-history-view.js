// @flow
import {inspect} from 'util';
import type {GameState} from "gbraver-burst-core/lib/game-state/game-state";

/** デリミタ */
export const DELIMITER = `
${'-'.repeat(32)}
`;

/**
 * ゲーム状態履歴をコンソール表示用に整形する
 *
 * @param gameStateHistory ゲーム状態履歴
 */
export function gameStateHistoryView(gameStateHistory: GameState[]): string {
  return gameStateHistory
    .map(v => inspect(v, {depth: null}))
    .join(DELIMITER);
}