// @flow
import {start, progress, ArmDozers} from 'gbraver-burst-core';
import RadLineSync from 'readline-sync';
import{inspect} from 'util';
import {printGameStateHistory} from './print-game-state-history';

const armdozerIdList = ArmDozers.map(v => v.id);
const players = ['player1', 'player2'].map(v => {
  const selectIndex = RadLineSync.keyInSelect(armdozerIdList, `select ${v} armdozer`, {cancel: false});
  const selectId = armdozerIdList[selectIndex];
  const armdozer = ArmDozers.find(v => v.id === selectId);
  return {
    playerId: v,
    armdozer: armdozer
  };
});

let stateHistory = start(players[0], players[1]);
let count = 0;

console.log('game start');
printGameStateHistory(stateHistory);

while(true) {
  if (100 <= count) {
    break;
  }

  if (stateHistory.length <= 0) {
    break;
  }

  const lastState = stateHistory[stateHistory.length - 1];
  if (lastState.effect.name !== 'InputCommand') {
    break;
  }

  const commandList = lastState.effect.players.map(v => {
    const commandNameList = v.command.map(v => inspect(v));
    const selectIndex = RadLineSync.keyInSelect(commandNameList, `select ${v.playerId} command`, {cancel: false});
    const command = v.command[selectIndex];
    return {
      playerId: v.playerId,
      command: command
    };
  });

  stateHistory = progress(lastState, commandList);
  printGameStateHistory(stateHistory);

  const isContinueGame = RadLineSync.keyInYN('continue game?');
  if (!isContinueGame) {
    break;
  }
  count ++;
}

console.log('end game');