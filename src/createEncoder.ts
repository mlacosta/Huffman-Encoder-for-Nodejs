import { HNode } from './HNode';
import { getFrequencies, GetFrequenciesReturn } from './getFrequencies';
import { MinHeap } from './minHeap';

type Frequency = {
  freq: number;
  symbol: string;
};

export const createHeap = (frequencies: GetFrequenciesReturn): MinHeap =>
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
  for (let i = 0; i < frequencies.length - 1; i++) {
    const x = heap.remove(); //x and y should be instantiated sequentially
    const y = heap.remove();

    const xFreq = x?.get('freq') || 0;
    const yFreq = y?.get('freq') || 0;

    const xSymbol = x?.get('symbol') || '';
    const ySymbol = y?.get('symbol') || '';

    const hNode = new HNode({
      left: x,
      right: y,
      freq: xFreq + yFreq,
      symbol: xSymbol + ySymbol,
    });
    heap.insert(hNode);
  }

  return heap.heap[1];
}
