// @flow
import {start, progress, ArmDozers} from 'gbraver-burst-core';
import RadLineSync from 'readline-sync';
import{inspect} from 'util';
import {gameStateHistoryView} from './view/game-state-history-view';
import {selectCommand} from "./input/select-command";
import type {Player} from "gbraver-burst-core/lib/player/player";
import type {InputCommand} from "gbraver-burst-core/lib/effect/input-command/input-command";
import type {GameState} from "gbraver-burst-core/lib/game-state/game-state";
import type {Effect} from "gbraver-burst-core/lib/effect/index";
import type {PlayerCommand} from "gbraver-burst-core/lib/command/player-command";
import {SelectCharacterScene} from "./scene/select-character-scene";

const players = playSelectCharacterScene();
let stateHistory = start(players[0], players[1]);
console.log('game start');
console.log(gameStateHistoryView(stateHistory));

let count = 0;

while(true) {
  if (100 <= count) {
    break;
  }

  if (stateHistory.length <= 0) {
    break;
  }

  const lastState: GameState = stateHistory[stateHistory.length - 1];
  const effect: Effect = lastState.effect;
  if (effect.name !== 'InputCommand') {
    break;
  }
  const inputCommand: InputCommand = effect;

  const commandList: PlayerCommand[] = inputCommand.players.map(v => {
    const command = selectCommand(v.command, `select ${v.playerId} command`);
    return {playerId: v.playerId, command};
  });

  stateHistory = progress(lastState, commandList);
  console.log(gameStateHistoryView(stateHistory));

  const isContinueGame = RadLineSync.keyInYN('continue game?');
  if (!isContinueGame) {
    break;
  }
  count ++;
}

console.log('end game');

/**
 * キャラクター選択シーンを再生する
 *
 * @return 選択したキャラクター情報
 */
function playSelectCharacterScene(): Player[] {
  const scene = new SelectCharacterScene({
    armdozerList: ArmDozers,
    playerIdList: ['player01', 'player02']
  });
  return scene.play();
}