// @flow
import type {InputCommand} from "gbraver-burst-core/lib/effect/input-command/input-command";

/**
 * コマンド入力効果をコマンドライン用に整形する
 *
 * @param effect コマンド入力効果
 * @return 整形結果
 */
export function inputCommandMessage(effect: InputCommand): string {
  return 'コマンド入力';
}