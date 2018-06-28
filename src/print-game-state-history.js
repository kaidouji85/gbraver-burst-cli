// @flow
import {inspect} from 'util';
import {DELIMITER} from './delimiter';
import type {GameState} from "gbraver-burst-core/lib/game-state/game-state";

/**
 * ゲーム状態履歴を表示する
 *
 * @param gameStateHistory ゲーム状態履歴
 */
export function printGameStateHistory(gameStateHistory: GameState[]): void {
  const message = gameStateHistory
    .map(v => inspect(v, {depth: null}))
    .join(DELIMITER);

  console.log(DELIMITER);
  console.log(message);
  console.log(DELIMITER);
}
