// @flow
import {inspect} from 'util';
import {playSelectCharacterScene} from "./play-select-character-scene";
import {playBattleScene} from "./play-battle-scene";
import {playTitleScene} from "./play-title-scene";

/** メイン処理 */
export function main() {
  playTitleScene();
  const players = playSelectCharacterScene();
  playBattleScene(players);
}