/**
 * コンソールに表示するタイトルを生成して返す
 *
 * @param version バージョン
 * @return コンソールに表示するタイトル
 */
export function titleMessage(version: string) {
  return `
${'='.repeat(64)}

GBRSV バースト CLI
version: ${version}

${'='.repeat(64)}  
`;
}