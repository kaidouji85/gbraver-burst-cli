// @flow

import type {GameState} from "gbraver-burst-core/lib/game-state/game-state";
import {inspect} from 'util';
import {playerStateView} from "./player-state-view";

/** デリミタ */
const DELIMITER = '-'.repeat(32);

export function gameStateView(gameState: GameState): string {
  const players = gameState.players
    .map(v => playerStateView(v))
    .join(`
${DELIMITER}
`);

  return `activePlayer: ${gameState.activePlayerId}
${DELIMITER}  
effect    : ${inspect(gameState.effect)}
${DELIMITER}
${players}`;
}
