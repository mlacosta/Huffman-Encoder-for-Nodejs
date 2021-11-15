import { HNode } from './HNode';

const isNotNull = <T>(value: T): value is NonNullable<T> => !!value;

const isTerminalNode = (hNode: HNode): boolean => !(isNotNull(hNode.get('left')) && isNotNull(hNode.get('right')));
export function decodeMsg(stream: ('0' | '1')[], graph: HNode): string {
  let currentNode = graph;
  let message = '';

  for (const bit of stream) {
    if (isTerminalNode(currentNode)) {
      message += currentNode.get('symbol');
      currentNode = graph;
    }

    currentNode = bit === '0' ? (currentNode.get('left') as HNode) : (currentNode.get('right') as HNode);
  }
  return message;
}
