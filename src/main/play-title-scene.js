// @flow
import {GBRAVER_CLI_VERSION} from "../version";
import {TitleScene} from "../scene/title";

/** タイトル画面を再生するヘルパー関数 */
export function playTitleScene() {
  const scene = new TitleScene({
    version: GBRAVER_CLI_VERSION
  });
  scene.play();
}