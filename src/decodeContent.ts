import { decodeMsg } from './decodeMsg';
import { HNode } from './HNode';
import { textToBinary } from './textToBinary';

export function decodeContent(content: string, encoder: HNode): string {
  const decodedText = textToBinary(content);

  return decodeMsg(decodedText, encoder);
}
