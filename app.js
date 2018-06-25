const {createPlayer} = require('./create-player');
const {createCommand} = require('./create-command');
const {start, progress} = require('gbraver-burst-core');
const {inspect} = require('util');
const ReadlineSync = require('readline-sync');

const player1 = createPlayer('player1');
const player2 = createPlayer('player2');
let stateHistory = start(player1, player2);
let count = 0;

console.log('game start');
console.log(inspect(stateHistory, {depth: null}));

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

  const command1 = createCommand(player1.playerId, lastState.effect);
  const command2 = createCommand(player2.playerId, lastState.effect);

  stateHistory = progress(lastState, [command1, command2]);
  console.log(inspect(stateHistory, {depth: null}));

  const isContinueGame = ReadlineSync.keyInYN('continue game?');
  if (!isContinueGame) {
    break;
  }
  count ++;
}

console.log('end game');