import { decodeMsg } from './decodeMsg';
import { decimalToBinary } from './decimalToBinary';
import { DECIMAL } from './constants';
import { HNode } from './HNode';

export function decodeContent(content: string, encoder: HNode) {
  let decodedText = [...content].reduce((memo, val) => {
    return [...memo, ...decimalToBinary(DECIMAL[val])];
  }, [] as ReturnType<typeof decimalToBinary>);

  return decodeMsg(decodedText, encoder);
}
