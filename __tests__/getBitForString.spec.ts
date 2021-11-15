import { createEncoder } from '../src/createEncoder';
import { getBitForString } from '../src/getBitForString';
import { dataset1 } from '../__mocks__/dataset';

const encoder = createEncoder(dataset1);
describe('bitForString', () => {
  it('creates a bitString from a char', async () => {
    const sample1 = getBitForString('x', encoder);
    expect(sample1).toMatchInlineSnapshot('"00010011"');
  });
});
