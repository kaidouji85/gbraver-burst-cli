// @flow

import type {Effect} from "gbraver-burst-core/lib/effect/index";
import type {InputCommand} from "gbraver-burst-core/lib/effect/input-command/input-command";
import type {Battle} from "gbraver-burst-core/lib/effect/battle/effect/index";
import type {TurnChange} from "gbraver-burst-core/lib/effect/turn-change/turn-change";
import {inspect} from 'util';

export function effectView(effect: Effect): string {
  switch (effect.name) {
    case 'InputCommand':
      return inputCommandView(effect);
    case 'Battle':
      return battleView(effect);
    case 'TurnChange':
      return turnChangeView(effect);
    default:
      return inspect(effect, {depth: null});
  }
}

function inputCommandView(effect: InputCommand): string {
  return 'コマンド入力';
}

function battleView(effect: Battle): string {
  // TODO 戦闘効果ごとにビューを呼び分ける
  return 'バトル';
}

function turnChangeView(effect: TurnChange): string {
  return 'ターンチェンジ';
}