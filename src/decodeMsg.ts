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


// export function oldDecodeMsg(bits: ('0' | '1')[], graph: HNode): string {
//   let currentNode: HNode | null = graph;
//   let message = '';

//   [...bits].forEach((bit) => {
//     const isTerminal = !(currentNode?.get('left') && currentNode.get('right'));

//     if (isTerminal) {
//       message += currentNode?.get('symbol');
//       currentNode = graph;
//     }

//     currentNode = bit == '0' ? currentNode?.get('left') || null : currentNode?.get('right') || null;
//   });

//   return message;
// }


export function oldDecodeMsg(stream: string, graph: HNode): string {
  let currentNode = graph;
  let message = '';

  [...stream].forEach((bit) => {
    const isTerminal = !(currentNode?.get('left') && currentNode?.get('right'));

    if (isTerminal) {
      message += currentNode?.get('symbol') || ' ';
      currentNode = graph;
    }

    if (currentNode.get('left') && bit === '0') {
      currentNode = currentNode.get('left') as HNode;
    } else {
      currentNode = currentNode.get('right') as HNode;
    }

  });

  return message;
}


// function decodeMsg1(stream: string, Graph: HNode): string {
//   let currentNode = Graph;
//   let message = '';

//   [...stream].forEach((bit) => {
//     let isTerminal = !(currentNode.left && currentNode.right);

//     if (isTerminal) {
//       message += currentNode.symbol;
//       currentNode = Graph;
//     }

//     currentNode = bit == 0 ? currentNode.left : currentNode.right;
//   });

//   return message;
// }
