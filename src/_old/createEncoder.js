import { tobase64, tobinary } from './lookup.js';

import MinHeap from './minheap.js';

function dec2bin(dec) {
  let bin = (dec >>> 0).toString(2);
  let padding = '';

  for (let i = 0; i < 6 - bin.length; i++) {
    padding += '0';
  }

  return padding + bin;
}

export function decodeMsg(stream, Graph) {
  let currentNode = Graph;
  let message = '';

  [...stream].forEach((bit) => {
    let isTerminal = !(currentNode.left && currentNode.right);

    if (isTerminal) {
      message += currentNode.symbol;
      currentNode = Graph;
    }

    currentNode = bit == 0 ? currentNode.left : currentNode.right;
  });

  return message;
}

export class Node {
  constructor(freq, symbol, left, right) {
    this.freq = freq;
    this.symbol = symbol;
    this.left = left;
    this.right = right;
  }

  setFreq(freq) {
    this.freq = freq;
  }
  setSymbol(symbol) {
    this.symbol = symbol;
  }

  setLeft(left) {
    this.left = left;
  }

  setRight(right) {
    this.right = right;
  }
}

export function getFrequency(string) {
  var freq = {};
  for (var i = 0; i < string.length; i++) {
    var character = string.charAt(i);
    if (freq[character]) {
      freq[character]++;
    } else {
      freq[character] = 1;
    }
  }

  let freqArr = [];

  for (const a in freq) {
    freqArr.push({ symbol: a, freq: freq[a] });
  }

  return freqArr;
}

export function createEncoder(train) {
  let freqArr = getFrequency(train);

  //create min heap structure

  let Heap = new MinHeap();

  freqArr.forEach((val) => Heap.insert(new Node(val.freq, val.symbol, null, null)));

  //create encoder

  for (let i = 0; i < freqArr.length - 1; i++) {
    let node = new Node();
    let x = Heap.remove();
    let y = Heap.remove();
    node.setLeft(x);
    node.setRight(y);
    node.setFreq(x.freq + y.freq);
    node.setSymbol(x.symbol + y.symbol);
    Heap.insert(node);
  }

  return Heap.heap[1];
}

export function getBitstring(char, Graph) {
  let isLeftTerminal = !(Graph.left.left && Graph.left.right);
  let isRightTerminal = !(Graph.right.left && Graph.right.right);

  if (Graph.left.symbol.includes(char)) {
    if (isLeftTerminal) {
      return '0';
    } else {
      return '0' + getBitstring(char, Graph.left);
    }
  } else if (Graph.right.symbol.includes(char)) {
    if (isRightTerminal) {
      return '1';
    } else {
      return '1' + getBitstring(char, Graph.right);
    }
  }
}

export function encodeConfig(config, encoder) {
  let code = '';
  [...config].forEach((val) => (code = code + getBitstring(val, encoder)));

  let len = (6 - (code.length % 6)) % 6; //padding
  for (let i = 0; i < len; i++) code = code + '0';

  let bytesArr = code.match(/.{1,6}/g);
  let encodedParam = bytesArr.map((byte) => tobase64[parseInt(byte, 2)]);

  return encodedParam.reduce((acc, curr) => acc + curr);
}

export function decodeConfig(param, encoder) {
  let decodedText = [...param].map((val) => dec2bin(tobinary[val]));
  return decodeMsg(
    decodedText.reduce((acc, cur) => acc + cur),
    encoder
  );
}
