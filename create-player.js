const ReadlineSync = require('readline-sync');
const GbraverBurstCore = require('gbraver-burst-core');

/**
 * プレイヤー情報を生成する
 *
 * @param {PlayerId} playerId プレイヤーID
 * @returns {Player} プレイヤー情報
 */
function createPlayer(playerId) {
  const armdozerIdList = GbraverBurstCore.ArmDozers.map(v => v.id);
  const selectIndex = ReadlineSync.keyInSelect(armdozerIdList, `select ${playerId} armdozer`, {cancel: false});
  const selectId = armdozerIdList[selectIndex];
  const armdozer = GbraverBurstCore.ArmDozers.find(v => v.id === selectId);

  return {playerId, armdozer};
}

module.exports.createPlayer = createPlayer;