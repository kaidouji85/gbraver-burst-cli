// @flow

import type {Armdozer} from "gbraver-burst-core/lib/armdozer/armdozer";
import type {Player, PlayerId} from "gbraver-burst-core/lib/player/player";
import {selectArmdozer} from "../input/select-armdozer";

/** シーン開始メッセージ */
const START_MESSAGE = `
${'-'.repeat(64)}
character select
${'-'.repeat(64)}
`;

/** コンストラクタのパラメータ */
type Param = {
  playerIdList: PlayerId[],
  armdozerList: Armdozer[]
};

/** キャラクター選択シーン */
export class SelectCharacterScene {
  /** プレイヤーIDリスト */
  _playerIdList: PlayerId[];
  /** アームドーザリスト */
  _armdozerList: Armdozer[];

  constructor(param: Param) {
    this._playerIdList = param.playerIdList;
    this._armdozerList = param.armdozerList;
  }

  /**
   * シーンを再生する
   *
   * @return プレイヤー情報
   */
  play(): Player[] {
    console.log(START_MESSAGE);
    return this._playerIdList.map(playerId => {
      const armdozer = selectArmdozer(this._armdozerList, `select ${playerId} armdozer`);
      return {playerId, armdozer};
    });

  }
}