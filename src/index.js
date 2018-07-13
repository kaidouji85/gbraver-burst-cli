// @flow

import {GBRAVER_CLI_VERSION} from "./version";
import {battleScene} from "./battle/index";
import {titleScene} from "./title/index";
import {selectCharacterScene} from "./select-character/index";
import {ArmDozers} from "gbraver-burst-core";

(function() {
  titleScene(GBRAVER_CLI_VERSION);
  const playerList = selectCharacterScene(['player01', 'player02'], ArmDozers);
  battleScene(playerList);
})();
