import { CHAR_MAP, DECIMAL } from './constants';
import { getBitForString } from './getBitForString';
import type { HNode } from './HNode';

const CODE_REGEX = /.{1,6}/g;

export function encodeContent(content: string, encoder: HNode): string {
  debugger;
  let code = [...content.trim()].reduce((memo, char) => memo + getBitForString(char, encoder), '');
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

export function encodeConfig(config: string, encoder: HNode): string | null {
  let code = '';
  [...config].forEach((val) => (code += getBitForString(val, encoder)));

  console.log('hello:', code);
  const len = (6 - (code.length % 6)) % 6; //padding
  for (let i = 0; i < len; i++) code = code + '0';

  const bytesArr = code.match(/.{1,6}/g);
  const encodedParam = bytesArr?.map((byte) => CHAR_MAP[parseInt(byte, 2)]);

  return encodedParam ? encodedParam.reduce((acc, curr) => acc + curr) : null;
}
