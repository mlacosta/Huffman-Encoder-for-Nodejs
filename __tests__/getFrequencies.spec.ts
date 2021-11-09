import { getFrequency, getFrequencies } from '../src/getFrequencies';

import { dataset1 } from '../__mocks__/dataset';
describe('Frequencies', () => {
  it('calculates each char frequencies', async () => {
    expect(getFrequency(dataset1)).toMatchObject(getFrequencies(dataset1));
  });
});
