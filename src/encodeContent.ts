import { CHAR_MAP } from './constants';
import { getBitForString } from './getBitForString';
import type { HNode } from './HNode';

const CODE_REGEX = /.{1,6}/g;

const getPadding = (code: string): number => code.length + (6 - (code.length % 6));
export function encodeContent(content: string, encoder: HNode): string {
  let code = [...content].reduce((memo, char) => {
    return memo + getBitForString(char, encoder);
  }, '');

  code = code.padEnd(getPadding(code), '0');

  const bytes = code.match(CODE_REGEX);

  if (bytes) {
    return bytes.reduce((memo, byte) => {
      return memo + CHAR_MAP[parseInt(byte, 2)];
    }, '');
  }
  return '';
}
