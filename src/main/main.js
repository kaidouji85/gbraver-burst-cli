// @flow
import {inspect} from 'util';
import {playSelectCharacterScene} from "./play-select-character-scene";
import {playBattleScene} from "./play-battle-scene";
import {viewTitle} from "./view-title";

/** メイン処理 */
export function main() {
  viewTitle();
  const players = playSelectCharacterScene();
  playBattleScene(players);
}