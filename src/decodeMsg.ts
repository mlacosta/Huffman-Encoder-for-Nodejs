import { HNode } from './HNode';

export function decodeMsg(bits: ('0' | '1')[], graph: HNode): string {
  const [, message] = bits.reduce(
    ([hNode, message], bit) => {
      const left = hNode.get('left');
      const right = hNode.get('right');
      const isTerminal = !(left && right);
      let currentNode = hNode;

      if (isTerminal) {
        message += hNode.get('symbol');
        currentNode = hNode;
      } else {
        currentNode = bit === '0' ? left : right;
      }

      return [currentNode, message];
    },
    [graph, ''] as [HNode, string]
  );

  return message;
}
