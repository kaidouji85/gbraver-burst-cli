// @flow

import type {Armdozer, Player, PlayerId} from "gbraver-burst-core";
import {selectArmdozer} from "./select-armdozer";
import {selectPilot} from "./select-pilot";
import type {Pilot} from "gbraver-burst-core/lib/player/pilot";

/**
 * キャラクター選択シーンを再生する
 *
 * @param playerIdList プレイヤーIDリスト
 * @param armdozers アームドーザマスタ
 * @param pilots パイロットマスタ
 * @return プレイヤー状態
 */
export function selectCharacterScene(playerIdList: PlayerId[], armdozers: Armdozer[], pilots: Pilot[]): Player[] {
  const playerList = playerIdList.map(playerId => {
    const armdozer = selectArmdozer(armdozers, `select ${playerId} armdozer`);
    const pilot = selectPilot(pilots, `select ${playerId} pilot`)
    return {playerId, pilot, armdozer};
  });
  return playerList;
}
