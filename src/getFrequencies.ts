export type GetFrequenciesReturn = {
  symbol: string;
  freq: number;
}[];

export function getFrequencies(content: string): GetFrequenciesReturn {
  const frequencies = content.split('').reduce((memo, char) => {
    const increment = memo[char] ? memo[char] + 1 : 1;
    memo[char] = increment;
    return memo;
  }, {} as Record<string, number>);

  return Object.keys(frequencies).map((symbol) => ({ symbol, freq: frequencies[symbol] }));
}

export function getFrequency(content: string): GetFrequenciesReturn {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const freq = {} as any;
  for (let i = 0; i < content.length; i++) {
    const character = content.charAt(i);
    if (freq[character]) {
      freq[character]++;
    } else {
      freq[character] = 1;
    }
  }

  const freqArr = [];

  for (const a in freq) {
    freqArr.push({ symbol: a, freq: freq[a] });
  }

  return freqArr;
}
