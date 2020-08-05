// @flow

import type {Pilot} from "gbraver-burst-core/lib/player/pilot";
import RadLineSync from "readline-sync";

/**
 * パイロットを選択する
 *
 * @param pilots 選択するパイロット
 * @param selectMessage 選択時に表示するメッセージ
 * @returns 選択したパイロット
 */
export function selectPilot(pilots: Pilot[], selectMessage: string): Pilot {
  const pilotIds = pilots.map(v => v.id);
  const index = RadLineSync.keyInSelect(pilotIds, selectMessage, {cancel: false});
  return pilots[index];
}