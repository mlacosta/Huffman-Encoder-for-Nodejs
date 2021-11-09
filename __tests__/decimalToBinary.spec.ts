import { dec2bin, decimalToBinary } from '../src/decimalToBinary';

describe('decimal to Binary', () => {
  it('calculates decimal to binary', async () => {
    expect(decimalToBinary(10)).toMatchObject([...dec2bin(10)]);
  });
});
