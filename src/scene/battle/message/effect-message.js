// @flow

import type {Effect} from "gbraver-burst-core/lib/effect/index";
import type {InputCommand} from "gbraver-burst-core/lib/effect/input-command/input-command";
import type {Battle} from "gbraver-burst-core/lib/effect/battle/effect/index";
import type {TurnChange} from "gbraver-burst-core/lib/effect/turn-change/turn-change";
import {inspect} from 'util';
import {inputCommandMessage} from "./input-command-message";
import {battleMessage} from "./battle-message";
import {turnChangeMessage} from "./turn-change-message";

/**
 * 状態変化をコンソール用に整形する
 *
 * @param effect 状態変化
 * @return 整形結果
 */
export function effectMessage(effect: Effect): string {
  switch (effect.name) {
    case 'InputCommand':
      return inputCommandMessage(effect);
    case 'Battle':
      return battleMessage(effect);
    case 'TurnChange':
      return turnChangeMessage(effect);
    default:
      return inspect(effect, {depth: null});
  }
}