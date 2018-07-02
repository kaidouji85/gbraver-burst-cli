// @flow

import type {Effect} from "gbraver-burst-core/lib/effect/index";
import type {InputCommand} from "gbraver-burst-core/lib/effect/input-command/input-command";
import type {Battle} from "gbraver-burst-core/lib/effect/battle/effect/index";
import type {TurnChange} from "gbraver-burst-core/lib/effect/turn-change/turn-change";
import {inspect} from 'util';
import {inputCommandView} from "./input-command-view";
import {battleView} from "./battle-view";
import {turnChangeView} from "./turn-change-view";

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