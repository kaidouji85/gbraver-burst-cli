// @flow

import type {Player} from "gbraver-burst-core/lib/player/player";
import {SelectCharacterScene} from "../scene/select-character-scene";
import {ArmDozers} from "gbraver-burst-core";

/**
 * キャラクター選択シーンを再生するヘルパー関数
 *
 * @return 選択したキャラクター情報
 */
export function playSelectCharacterScene(): Player[] {
  const scene = new SelectCharacterScene({
    armdozerList: ArmDozers,
    playerIdList: ['player01', 'player02']
  });
  return scene.play();
}