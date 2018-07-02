// @flow

import {GBRAVER_CLI_VERSION} from "./version";
import {battleScene} from "./scene/battle-scene";
import {titleScene} from "./scene/title";
import {selectCharacterScene} from "./scene/select-character-scene";
import {ArmDozers} from "gbraver-burst-core";

(function() {
  titleScene(GBRAVER_CLI_VERSION);
  const playerList = selectCharacterScene(['player01', 'player02'], ArmDozers);
  battleScene(playerList);
})();
