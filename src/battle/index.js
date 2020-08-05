// @flow

import type {Player} from "gbraver-burst-core/lib/player/player";
import {selectCommand} from "./select-command";
import type {Effect, GameState, InputCommand, PlayerCommand} from "gbraver-burst-core";
import {GbraverBurstCore} from "gbraver-burst-core";
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
  const game = new GbraverBurstCore();

  if (playerList.length !== 2) {
    return;
  }

  const initialState: GameState[] = game.start(playerList[0], playerList[1]);
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
      .map(currentCommand => {
        const currentPlayer = playerList.find(v => v.playerId === currentCommand.playerId);
        const armdozerName = currentPlayer
          ? currentPlayer.armdozer.name
          : 'Not Found';
        const currentRole = lastState.activePlayerId === currentCommand.playerId
          ? '攻撃側'
          : '防御側';
        const command = currentCommand.selectable
          ? selectCommand(currentCommand.command, `select ${currentCommand.playerId} command. ${armdozerName}/${currentRole}`)
          : currentCommand.nextTurnCommand;
        return {playerId: currentCommand.playerId, command}
      });
    const updatedState: GameState[] = game.progress(lastState, commandList);
    if (updatedState.length <= 0) {
      break;
    }

    lastState = updatedState[updatedState.length - 1];
    console.log(gameStateHistoryMessage(updatedState));
    if (lastState.effect.name === 'GameEnd') {
      return;
    }

    if (!isContinue()) {
      break;
    }
  }
}
