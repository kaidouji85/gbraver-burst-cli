const {inspect} = require('util');
const {DELIMITER} = require('./delimiter');

/**
 * ゲーム状態履歴を表示する
 *
 * @param {GameState[]} gameStateHisory
 */
function printGameStateHistory(gameStateHisory) {
  const message = gameStateHisory
    .map(v => inspect(v, {depth: null}))
    .join(DELIMITER);

  console.log(DELIMITER);
  console.log(message);
  console.log(DELIMITER);
}

module.exports.printGameStateHistory = printGameStateHistory;