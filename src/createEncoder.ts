import { HNode } from './HNode';
import { getFrequencies, getFrequenciesReturn } from './getFrequencies';
import { MinHeap } from './minHeap';

type Frequency = {
  freq: number;
  symbol: string;
};

export const createHeap = (frequencies: getFrequenciesReturn): MinHeap =>
  frequencies.reduce((heapMem, { freq, symbol }: Frequency) => {
    heapMem.insert(new HNode({ freq, symbol, left: null, right: null }));
    return heapMem;
  }, new MinHeap());

export function createEncoder(trainingSet: string): HNode {
  const frequencies = getFrequencies(trainingSet);

  //create min heap structure

  const heap = createHeap(frequencies);

  //create encoder
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const _ in frequencies) {
    const x = heap.remove(); //x and y should be instantiated sequentially
    const y = heap.remove();

    if (x && y) {
      const hNode = new HNode({
        left: x,
        right: y,
        freq: x.get('freq') + y.get('freq'),
        symbol: x.get('symbol') + y.get('symbol'),
      });
      heap.insert(hNode);
    }
  }

  return heap.heap[1];
}
