const ReadlineSync = require('readline-sync');
const {inspect} = require('util');

/**
 * 指定したプレイヤーのコマンドを入力する
 *
 * @param {PlayerId} playerId コマンド入力するプレイヤーID
 * @param {InputCommand} inputCommandEffect コマンド入力フェイズの結果
 * @returns {PlayerCommand} プレイヤーコマンド
 */
function createCommand(playerId, inputCommandEffect) {
  const playerCommand = inputCommandEffect.players.find(v => v.playerId === playerId);
  const commandNameList = playerCommand.command.map(v => inspect(v));
  const selectIndex = ReadlineSync.keyInSelect(commandNameList, `select ${playerId} command`, {cancel: false});
  const command = playerCommand.command[selectIndex];

  return {playerId, command};
}

module.exports.createCommand = createCommand;