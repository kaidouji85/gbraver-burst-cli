// @flow

import RadLineSync from "readline-sync";

/**
 * ゲームを続けるか否かを入力する
 *
 * @return trueでゲームを続ける
 */
export function isContinue(): boolean {
  return RadLineSync.keyInYN('continue game?')
}
