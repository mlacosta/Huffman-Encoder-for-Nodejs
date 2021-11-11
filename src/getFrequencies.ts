export interface Frequency {
  symbol: string;
  freq: number;
}

export function getFrequencies(content: string): Frequency[] {
  const frequencies = content.split('').reduce((memo, char) => {
    const increment = memo[char] ? memo[char] + 1 : 1;
    memo[char] = increment;
    return memo;
  }, {} as Record<string, number>);

  return Object.keys(frequencies).map((symbol) => ({ symbol, freq: frequencies[symbol] }));
}
