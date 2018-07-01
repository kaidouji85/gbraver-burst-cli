// @flow

import type {Player} from "gbraver-burst-core/lib/player/player";
import {start, progress} from 'gbraver-burst-core';
import {selectCommand} from "../../input/select-command";
import type {GameState} from "gbraver-burst-core/lib/game-state/game-state";
import type {Effect} from "gbraver-burst-core/lib/effect/index";
import type {InputCommand} from "gbraver-burst-core/lib/effect/input-command/input-command";
import type {PlayerCommand} from "gbraver-burst-core/lib/command/player-command";
import {isContinue} from "../../input/is-continue";
import {gameStateHistoryView} from "./view/game-state-history-view";

/** シーン開始メッセージ */
export const START_MESSAGE =  `
${'-'.repeat(64)}
battle
${'-'.repeat(64)}
`;

/** 最大ターン数 */
export const MAX_COUNT = 100;

/** コンストラクタのパラメータ */
type Param = {
  playerList: Player[]
};

/** 戦闘シーン */
export class BattleScene {
  /** プレイヤー情報 */
  _playerList: Player[];

  constructor(param: Param) {
    this._playerList = param.playerList;
  }

  /** シーンを再生する */
  play(): void {
    if (this._playerList.length !== 2) {
      return;
    }

    const initialState: GameState[] = start(this._playerList[0], this._playerList[1]);
    if (initialState.length <= 0) {
      return;
    }
    console.log(START_MESSAGE);
    console.log(gameStateHistoryView(initialState));

    let lastState: GameState = initialState[initialState.length - 1];
    for (let count = 0; count < MAX_COUNT; count ++) {
      const effect: Effect = lastState.effect;
      if (effect.name !== 'InputCommand') {
        break;
      }

      const inputCommand: InputCommand = effect;
      const commandList: PlayerCommand[] = inputCommand.players
        .map(v => {
          const command = selectCommand(v.command, `select ${v.playerId} command`);
          return {playerId: v.playerId, command}
        });
      const updatedState: GameState[] = progress(lastState, commandList);
      if (updatedState.length <= 0) {
        break;
      }

      console.log(gameStateHistoryView(updatedState));
      if (!isContinue()) {
        break;
      }

      lastState = updatedState[updatedState.length - 1];
    }
  }
}