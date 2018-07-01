// @flow


import {titleView} from "./view/title-view";

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
    console.log(titleView(this._version));
  }
}