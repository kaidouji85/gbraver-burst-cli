// @flow

import type {Player} from "gbraver-burst-core/lib/player/player";
import {progress, start} from 'gbraver-burst-core';
import {selectCommand} from "./select-command";
import type {GameState} from "gbraver-burst-core/lib/game-state/game-state";
import type {Effect} from "gbraver-burst-core/lib/effect/index";
import type {InputCommand} from "gbraver-burst-core/lib/effect/input-command/input-command";
import type {PlayerCommand} from "gbraver-burst-core/lib/command/player-command";
import {isContinue} from "./is-continue";
import {gameStateHistoryMessage} from "./game-state-history-message";

/** 最大ターン数 */
export const MAX_COUNT = 100;

/**
 * 戦闘シーンを再生する
 *
 * @param playerList プレイヤー情報
 */
export function battleScene(playerList: Player[]) {
  if (playerList.length !== 2) {
    return;
  }

  const initialState: GameState[] = start(playerList[0], playerList[1]);
  if (initialState.length <= 0) {
    return;
  }
  console.log(gameStateHistoryMessage(initialState));

  let lastState: GameState = initialState[initialState.length - 1];
  for (let count = 0; count < MAX_COUNT; count ++) {
    const effect: Effect = lastState.effect;
    if (effect.name !== 'InputCommand') {
      break;
    }

    const inputCommand: InputCommand = effect;
    const commandList: PlayerCommand[] = inputCommand.players
      .map(v => {
        const command = selectCommand(v.command, `${v.playerId}のコマンドを選択してください`);
        return {playerId: v.playerId, command}
      });
    const updatedState: GameState[] = progress(lastState, commandList);
    if (updatedState.length <= 0) {
      break;
    }

    console.log(gameStateHistoryMessage(updatedState));
    if (!isContinue()) {
      break;
    }

    lastState = updatedState[updatedState.length - 1];
  }
}