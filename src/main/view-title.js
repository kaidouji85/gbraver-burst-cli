// @flow
import {titleView} from "../view/title-view";
import {GBRAVER_CLI_VERSION} from "../version";

/** タイトルを表示するヘルパー関数 */
export function viewTitle() {
  console.log(titleView(GBRAVER_CLI_VERSION));
}