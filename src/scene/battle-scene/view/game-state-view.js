// @flow

import type {GameState} from "gbraver-burst-core/lib/game-state/game-state";
import {inspect} from 'util';
import {playerStateView} from "./player-state-view";
import {effectView} from "./effect-view";

/** デリミタ */
const DELIMITER = '-'.repeat(32);

export function gameStateView(gameState: GameState): string {
  const players = gameState.players
    .map(v => playerStateView(v))
    .join(`
${DELIMITER}
`);

  return `手番プレイヤー: ${gameState.activePlayerId}
${DELIMITER}  
${effectView(gameState.effect)}
${DELIMITER}
${players}`;
}
