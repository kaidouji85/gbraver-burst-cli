// @flow

import RadLineSync from "readline-sync";
import type {BatteryCommand, BurstCommand, Command} from "gbraver-burst-core";
import {inspect} from 'util';
import type {PilotSkillCommand} from "gbraver-burst-core/lib/command/pilot-skill";

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
    case 'PILOT_SKILL_COMMAND':
      return pilotSkill(command);
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

/** パイロットスキル */
function pilotSkill(command: PilotSkillCommand): string {
  return 'PilotSkill';
}