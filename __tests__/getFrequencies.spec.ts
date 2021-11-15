import { getFrequencies } from '../src/getFrequencies';

import { dataset2 } from '../__mocks__/dataset2';
describe('Frequencies', () => {
  it('calculates each char frequencies', async () => {
    const frequencies = getFrequencies(dataset2);
    expect(frequencies).toMatchInlineSnapshot(`
      Array [
        Object {
          "freq": 1,
          "symbol": "=",
        },
        Object {
          "freq": 172,
          "symbol": "i",
        },
        Object {
          "freq": 179,
          "symbol": "n",
        },
        Object {
          "freq": 97,
          "symbol": "d",
        },
        Object {
          "freq": 195,
          "symbol": "o",
        },
        Object {
          "freq": 197,
          "symbol": "a",
        },
        Object {
          "freq": 274,
          "symbol": "e",
        },
        Object {
          "freq": 180,
          "symbol": "s",
        },
        Object {
          "freq": 30,
          "symbol": "b",
        },
        Object {
          "freq": 57,
          "symbol": "u",
        },
        Object {
          "freq": 224,
          "symbol": "t",
        },
        Object {
          "freq": 16,
          "symbol": "v",
        },
        Object {
          "freq": 95,
          "symbol": "l",
        },
        Object {
          "freq": 37,
          "symbol": "y",
        },
        Object {
          "freq": 40,
          "symbol": "g",
        },
        Object {
          "freq": 50,
          "symbol": "m",
        },
        Object {
          "freq": 155,
          "symbol": "r",
        },
        Object {
          "freq": 23,
          "symbol": "k",
        },
        Object {
          "freq": 7,
          "symbol": "j",
        },
        Object {
          "freq": 43,
          "symbol": "f",
        },
        Object {
          "freq": 68,
          "symbol": "c",
        },
        Object {
          "freq": 47,
          "symbol": "w",
        },
        Object {
          "freq": 142,
          "symbol": "h",
        },
        Object {
          "freq": 49,
          "symbol": "p",
        },
        Object {
          "freq": 2,
          "symbol": "q",
        },
        Object {
          "freq": 4,
          "symbol": "z",
        },
        Object {
          "freq": 3,
          "symbol": "x",
        },
      ]
    `);
  });
});
