// @flow

import RadLineSync from "readline-sync";
import type {Command} from "gbraver-burst-core/lib/command/command";
import type {BatteryCommand} from "gbraver-burst-core/lib/command/battery";
import type {BurstCommand} from "gbraver-burst-core/lib/command/burst";
import {inspect} from 'util';

/**
 * コマンド選択を実行する
 *
 * @param enableCommand 選択可能コマンド
 * @param selectMessage 選択時のメッセージ
 * @returns 選択したコマンド
 */
export function selectCommand(commandList: Command[], selectMessage: string): Command {
  const commandNameList = commandList.map(v => commandMessage(v));
  const selectIndex = RadLineSync.keyInSelect(commandNameList, selectMessage, {cancel: false});
  return commandList[selectIndex];
}

/**
 * コマンドをコンソール用に整形する
 *
 * @param command コマンド
 * @return 整形結果
 */
function commandMessage(command: Command): string {
  switch (command.type) {
    case 'BATTERY_COMMAND':
      return battery(command);
    case 'BURST_COMMAND':
      return burst(command);
    default:
      return inspect(command, {depth: null});
  }
}

/** バッテリー */
function battery(command: BatteryCommand): string {
  return `Battery: ${command.battery}`;
}

/** バースト */
function burst(command: BurstCommand): string {
  return 'Burst';
}
