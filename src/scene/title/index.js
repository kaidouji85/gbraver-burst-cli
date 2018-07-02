// @flow


import {titleMessage} from "./message/title-message";

type Param = {
  version: string
};

/** タイトルシーン */
export class TitleScene {
  /** バージョン */
  _version: string;

  constructor(param: Param) {
    this._version = param.version;
  }

  /** シーンを再生する */
  play() {
    console.log(titleMessage(this._version));
  }
}