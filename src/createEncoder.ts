import { HNode } from './HNode';
import { getFrequencies } from './getFrequencies';
import { MinHeap } from './minHeap';


export function createEncoder(trainingSet: string) {
  let frequencies = getFrequencies(trainingSet);

  //create min heap structure

  const heap = frequencies.reduce((heapMem, { freq, symbol }) => {
    heapMem.insert(new HNode({ freq, symbol }));
    return heapMem;
  }, new MinHeap());

  //create encoder
  for (let _ in frequencies) {
    const [x, y] = Array(2).fill(heap.remove());
    if (x && y) {
      let hnode = new HNode({
        left: x,
        right: y,
        freq: x.get('freq') + y.get('freq'),
        symbol: x.get('symbol') + y.get('symbol'),
      });
      heap.insert(hnode);
    }
  }

  return heap.heap[1];
}
