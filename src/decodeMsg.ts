import { HNode } from './HNode';

export function decodeMsg(bits: ('0' | '1')[], graph: HNode) {
  const [, message] = bits.reduce(
    ([hnode, message], bit) => {
      const left = hnode.get('left');
      const right = hnode.get('right');
      const isTerminal = !(left && right);
      let currentNode = hnode;

      if (isTerminal) {
        message += hnode.get('symbol');
        currentNode = hnode;
      } else {
        currentNode = bit === '0' ? left : right;
      }
      
      return [currentNode, message];
    },
    [graph, ''] as [HNode, string]
  );

  return message;
}
