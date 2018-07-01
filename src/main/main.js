// @flow
import {ArmDozers} from 'gbraver-burst-core';
import{inspect} from 'util';
import type {Player} from "gbraver-burst-core/lib/player/player";
import {SelectCharacterScene} from "../scene/select-character-scene";
import {BattleScene} from "../scene/battle-scene";

/** メイン処理 */
export function main() {
  const players = playSelectCharacterScene();
  playBattleScene(players);
}

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

/** 戦闘シーンを再生するヘルパー関数 */
export function playBattleScene(playerList: Player[]): void {
  const scene = new BattleScene({
    playerList: playerList
  });
  scene.play();
}