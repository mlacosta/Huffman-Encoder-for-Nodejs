import { createEncoder } from '../src/createEncoder';
import { getBitForString, getBitstring } from '../src/getBitForString';
import { dataset1 } from '../__mocks__/dataset';

const encoder = createEncoder(dataset1);
describe('bitForString', () => {
  it('creates a bitString from a char', async () => {
    const sample1 = getBitForString('x', encoder);
    const sample2 = getBitstring('x', encoder);
    expect(sample1).toBe(sample2);
    expect(sample1).toMatchInlineSnapshot('"000010111"');
    expect(sample2).toMatchInlineSnapshot('"000010111"');
  });
});
