// @flow

import type {Player} from "gbraver-burst-core/lib/player/player";
import {BattleScene} from "../scene/battle-scene/index";

/** 戦闘シーンを再生するヘルパー関数 */
export function playBattleScene(playerList: Player[]): void {
  const scene = new BattleScene({
    playerList: playerList
  });
  scene.play();
}