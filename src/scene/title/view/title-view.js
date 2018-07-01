/**
 * コンソールに表示するタイトルを生成して返す
 *
 * @param version バージョン
 * @return コンソールに表示するタイトル
 */
export function titleView(version: string) {
  return `
${'='.repeat(64)}

GBRAVER BURST CLI
version: ${version}

${'='.repeat(64)}  
`;
}