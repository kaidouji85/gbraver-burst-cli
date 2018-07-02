// @flow

import type {Armdozer} from "gbraver-burst-core/lib/armdozer/armdozer";
import type {Player, PlayerId} from "gbraver-burst-core/lib/player/player";
import {selectArmdozer} from "../../input/select-armdozer";
import {START_MESSAGE} from "./message/start-message";

/**
 * キャラクター選択シーンを再生する
 *
 * @param playerIdList プレイヤーIDリスト
 * @param armdozerList アームドーザリスト
 * @return プレイヤー状態
 */
export function selectCharacterScene(playerIdList: PlayerId[], armdozerList: Armdozer[]): Player[] {
  console.log(START_MESSAGE);
  return playerIdList.map(playerId => {
    const armdozer = selectArmdozer(armdozerList, `${playerId}のアームドーザを選択してください`);
    return {playerId, armdozer};
  });
}