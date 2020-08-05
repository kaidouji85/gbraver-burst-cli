// @flow

import {battleScene} from "./battle/index";
import {titleScene} from "./title/index";
import {selectCharacterScene} from "./select-character/index";
import {ArmDozers} from "gbraver-burst-core";
import {Pilots} from "gbraver-burst-core/lib/master/pilots";

(function() {
  titleScene();
  const playerList = selectCharacterScene(['player01', 'player02'], ArmDozers, Pilots);
  battleScene(playerList);
})();
