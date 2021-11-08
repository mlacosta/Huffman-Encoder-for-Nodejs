import { DECIMAL } from './constants';
import { getBitForString } from './getBitForString';
import type { HNode } from './HNode';

const CODE_REGEX = /.{1,6}/g;

export function encodeContent(content: string, encoder: HNode): string {
  let code = [...content.trim()].reduce((memo, char) => memo + getBitForString(char, encoder), '');
  console.log(code);
  code += Array((6 - (code.length % 6)) % 6)
    .fill('0')
    .join('');

  const bytes = code.match(CODE_REGEX);
  if (bytes) {
    const encodedParam = bytes.map((byte) => DECIMAL[parseInt(byte, 2)]);
    return encodedParam.reduce((memo, char) => memo + char, '');
  }
  return '';
}
