import { HNode } from './HNode';
import { getFrequencies, getFrequenciesReturn } from './getFrequencies';
import { MinHeap } from './minHeap';

type Frequency = {
  freq:number,
  symbol:string
}

export const createHeap = (frequencies:getFrequenciesReturn) => frequencies.reduce((heapMem, { freq, symbol }:Frequency) => {
  heapMem.insert(new HNode({ freq, symbol }));
  return heapMem;
}, new MinHeap());

export function createEncoder(trainingSet: string):HNode {
  let frequencies = getFrequencies(trainingSet);

  //create min heap structure

  const heap = createHeap(frequencies);

  //create encoder
  for (let _ in frequencies) {
    debugger;
    const x = heap.remove(); //x and y should be instanciated sequentially
    const y = heap.remove();
    
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
