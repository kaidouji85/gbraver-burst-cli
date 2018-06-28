// @flow

import RadLineSync from "readline-sync";

/**
 * アームドーザを選択する
 *
 * @param armdozerList 選択するアームドーザリスト
 * @param selectMessage 選択時に表示するメッセージ
 * @returns 選択したアームドーザ
 */
export function selectArmdozer(armdozerList: Armdozer[], selectMessage: string): Armdozer {
  const armdozerIdList = armdozerList.map(v => v.id);
  const index = RadLineSync.keyInSelect(armdozerIdList, selectMessage, {cancel: false});
  return armdozerList[index];
}