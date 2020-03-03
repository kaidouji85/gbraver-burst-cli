// @flow

import type {Armdozer} from "gbraver-burst-core";
import type {Player, PlayerId} from "gbraver-burst-core";
import {selectArmdozer} from "./select-armdozer";

/**
 * キャラクター選択シーンを再生する
 *
 * @param playerIdList プレイヤーIDリスト
 * @param armdozerList アームドーザリスト
 * @return プレイヤー状態
 */
export function selectCharacterScene(playerIdList: PlayerId[], armdozerList: Armdozer[]): Player[] {
  const playerList = playerIdList.map(playerId => {
    const armdozer = selectArmdozer(armdozerList, `$select {playerId} armdozer`);
    return {playerId, armdozer};
  });
  return playerList;
}
