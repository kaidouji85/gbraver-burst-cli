// @flow
import {inspect} from 'util';
import RadLineSync from "readline-sync";
import type {Command} from "gbraver-burst-core/lib/command/command";

/**
 * コマンド選択を実行する
 *
 * @param enableCommand 選択可能コマンド
 * @param selectMessage 選択時のメッセージ
 * @returns 選択したコマンド
 */
export function selectCommand(commandList: Command[], selectMessage: string): Command {
  const commandNameList = commandList.map(v => inspect(v));
  const selectIndex = RadLineSync.keyInSelect(commandNameList, selectMessage, {cancel: false});
  return commandList[selectIndex];
}