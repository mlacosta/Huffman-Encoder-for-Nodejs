import { createEncoder, encodeContent, decodeContent } from '..';
import { getBitForString } from '../src/getBitForString';
import { getFrequencies } from '../src/getFrequencies';

import { dataset1 } from '../__mocks__/dataset';

const encoder = createEncoder(dataset1);
const inputContent = `[INPUT]
    name  tail
    tag  tail.01
    path  /var/log/system.log

[FILTER]
    name  record_modifier
    match  *
    record  hostname \${HOSTNAME}

[OUTPUT]
    name  file
    match  *
    path  output.txt`;

const outputContent =
  'vz9KnJmEW_yuoj6uIG3_Vxn1cQLYo8t_3nVW-LaueLCkwWxYysUNhSZa1-aPq5kd0It_ldRHvidL0AUJQIOSH2_6HVnW-oW_3xOl6HrUsqV1EbSl7QMOmpDdSjltrX4yTNTkzCLf5XUR45Axb_odWdb6hb_vOqt9K9by9W6idbW';

describe('Encoder', () => {
  it('calculates each char frequencies', async () => {
    const frequencies = getFrequencies(dataset1);
    expect(frequencies).toMatchInlineSnapshot(`
      Array [
        Object {
          "freq": 139,
          "symbol": "0",
        },
        Object {
          "freq": 80,
          "symbol": "1",
        },
        Object {
          "freq": 74,
          "symbol": "2",
        },
        Object {
          "freq": 40,
          "symbol": "3",
        },
        Object {
          "freq": 53,
          "symbol": "4",
        },
        Object {
          "freq": 29,
          "symbol": "5",
        },
        Object {
          "freq": 21,
          "symbol": "6",
        },
        Object {
          "freq": 25,
          "symbol": "7",
        },
        Object {
          "freq": 36,
          "symbol": "8",
        },
        Object {
          "freq": 12,
          "symbol": "9",
        },
        Object {
          "freq": 135,
          "symbol": "[",
        },
        Object {
          "freq": 323,
          "symbol": "S",
        },
        Object {
          "freq": 169,
          "symbol": "E",
        },
        Object {
          "freq": 114,
          "symbol": "R",
        },
        Object {
          "freq": 29,
          "symbol": "V",
        },
        Object {
          "freq": 165,
          "symbol": "I",
        },
        Object {
          "freq": 54,
          "symbol": "C",
        },
        Object {
          "freq": 135,
          "symbol": "]",
        },
        Object {
          "freq": 907,
          "symbol": "
      ",
        },
        Object {
          "freq": 8627,
          "symbol": " ",
        },
        Object {
          "freq": 149,
          "symbol": "F",
        },
        Object {
          "freq": 525,
          "symbol": "l",
        },
        Object {
          "freq": 354,
          "symbol": "u",
        },
        Object {
          "freq": 717,
          "symbol": "s",
        },
        Object {
          "freq": 176,
          "symbol": "h",
        },
        Object {
          "freq": 117,
          "symbol": "D",
        },
        Object {
          "freq": 724,
          "symbol": "a",
        },
        Object {
          "freq": 1488,
          "symbol": "e",
        },
        Object {
          "freq": 434,
          "symbol": "m",
        },
        Object {
          "freq": 684,
          "symbol": "o",
        },
        Object {
          "freq": 610,
          "symbol": "n",
        },
        Object {
          "freq": 292,
          "symbol": "f",
        },
        Object {
          "freq": 175,
          "symbol": "L",
        },
        Object {
          "freq": 308,
          "symbol": "g",
        },
        Object {
          "freq": 518,
          "symbol": "_",
        },
        Object {
          "freq": 182,
          "symbol": "v",
        },
        Object {
          "freq": 590,
          "symbol": "i",
        },
        Object {
          "freq": 87,
          "symbol": "H",
        },
        Object {
          "freq": 413,
          "symbol": "T",
        },
        Object {
          "freq": 223,
          "symbol": "P",
        },
        Object {
          "freq": 749,
          "symbol": "r",
        },
        Object {
          "freq": 141,
          "symbol": "O",
        },
        Object {
          "freq": 896,
          "symbol": "t",
        },
        Object {
          "freq": 362,
          "symbol": ".",
        },
        Object {
          "freq": 223,
          "symbol": "N",
        },
        Object {
          "freq": 189,
          "symbol": "U",
        },
        Object {
          "freq": 432,
          "symbol": "c",
        },
        Object {
          "freq": 232,
          "symbol": "p",
        },
        Object {
          "freq": 332,
          "symbol": "d",
        },
        Object {
          "freq": 84,
          "symbol": "*",
        },
        Object {
          "freq": 165,
          "symbol": "k",
        },
        Object {
          "freq": 173,
          "symbol": "M",
        },
        Object {
          "freq": 160,
          "symbol": "-",
        },
        Object {
          "freq": 176,
          "symbol": "y",
        },
        Object {
          "freq": 141,
          "symbol": "/",
        },
        Object {
          "freq": 197,
          "symbol": "b",
        },
        Object {
          "freq": 43,
          "symbol": "B",
        },
        Object {
          "freq": 66,
          "symbol": "Y",
        },
        Object {
          "freq": 173,
          "symbol": "=",
        },
        Object {
          "freq": 65,
          "symbol": "K",
        },
        Object {
          "freq": 72,
          "symbol": "x",
        },
        Object {
          "freq": 24,
          "symbol": "#",
        },
        Object {
          "freq": 39,
          "symbol": "A",
        },
        Object {
          "freq": 23,
          "symbol": "w",
        },
        Object {
          "freq": 25,
          "symbol": "'",
        },
        Object {
          "freq": 44,
          "symbol": "$",
        },
        Object {
          "freq": 53,
          "symbol": "{",
        },
        Object {
          "freq": 52,
          "symbol": "}",
        },
        Object {
          "freq": 1,
          "symbol": "q",
        },
        Object {
          "freq": 13,
          "symbol": "z",
        },
        Object {
          "freq": 15,
          "symbol": "<",
        },
        Object {
          "freq": 16,
          "symbol": ">",
        },
        Object {
          "freq": 91,
          "symbol": ":",
        },
        Object {
          "freq": 22,
          "symbol": ",",
        },
        Object {
          "freq": 7,
          "symbol": "W",
        },
        Object {
          "freq": 7,
          "symbol": "G",
        },
        Object {
          "freq": 19,
          "symbol": "j",
        },
        Object {
          "freq": 2,
          "symbol": "X",
        },
        Object {
          "freq": 56,
          "symbol": "\\"",
        },
        Object {
          "freq": 21,
          "symbol": "|",
        },
        Object {
          "freq": 48,
          "symbol": "%",
        },
        Object {
          "freq": 21,
          "symbol": "	",
        },
        Object {
          "freq": 11,
          "symbol": "^",
        },
        Object {
          "freq": 6,
          "symbol": "@",
        },
        Object {
          "freq": 14,
          "symbol": "(",
        },
        Object {
          "freq": 15,
          "symbol": "?",
        },
        Object {
          "freq": 3,
          "symbol": "+",
        },
        Object {
          "freq": 14,
          "symbol": ")",
        },
        Object {
          "freq": 2,
          "symbol": "Z",
        },
        Object {
          "freq": 10,
          "symbol": "\\\\",
        },
      ]
    `);
  });
  
  it('creates a bitstring from a char', async () => {
    debugger;
    const bitstring = getBitForString('a', encoder);
    expect(bitstring).toMatchInlineSnapshot(`null`);
  });

  it('should encode correctly the given information', async () => {
    const encodedContent = encodeContent(inputContent, encoder);
    expect(encodedContent).toMatchInlineSnapshot(
      `"undefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefined"`
    );
  });
});

xdescribe('Decoder', () => {
  it('should decode correctly the given information', async () => {
    const decodedContent = decodeContent(outputContent, encoder);

    expect(decodedContent).toMatchInlineSnapshot();
  });
});
