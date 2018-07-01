// @flow
import {inspect} from 'util';
import {playSelectCharacterScene} from "./play-select-character-scene";
import {playBattleScene} from "./play-battle-scene";

/** メイン処理 */
export function main() {
  const players = playSelectCharacterScene();
  playBattleScene(players);
}