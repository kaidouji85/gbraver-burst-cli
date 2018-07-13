// @flow

import {titleMessage} from "./title-message";

/**
 * タイトルシーンを再生する
 *
 * @param version 本ソフトウェアのバージョン
 */
export function titleScene(version: string): void {
  console.log(titleMessage(version));
}