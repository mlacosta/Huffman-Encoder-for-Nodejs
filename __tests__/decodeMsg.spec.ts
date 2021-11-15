import { createEncoder } from '../src/createEncoder';
import { textToBinary } from '../src/textToBinary';
import { decodeMsg } from '../src/decodeMsg';
import { decodeContent } from '../src/decodeContent';
// import { dataset1 } from '../__mocks__/dataset';
import { dataset2 } from '../__mocks__/dataset2';

// const url =
//   'vz9KnJmEW_yuoj6uIG3_Vxn1cQLYo8t_3nVW-LaueLCkwWxYysUNhSZa1-aPq5kd0It_ldRHvidL0AUJQIOSH2_6HVnW-oW_3xOl6HrUsqV1EbSl7QMOmpDdSjltrX4yTNTkzCLf5XUR45Axb_odWdb6hb_vOqt9K9by9W6idbW';

describe('decode Message', () => {
  it('decodeMsg', async () => {
    const urlInBits = textToBinary('ici-45qJzXQe');
    const encoder = createEncoder(dataset2);
    expect(decodeMsg(urlInBits, encoder)).toMatchInlineSnapshot('"germanfrigerio"');
  });
});

describe('decode Content', () => {
  it('decodeContent', async () => {
    const encoder = createEncoder(dataset2);
    expect(decodeContent('ici-00eg8', encoder)).toMatchInlineSnapshot('"germancito="');
  });
});
