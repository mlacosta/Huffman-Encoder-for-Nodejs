import { DECIMAL } from '../src/constants';
import { dec2bin, decimalToBinary } from '../src/decimalToBinary';
import { textToBinary } from '../src/textToBinary';

describe('decimal to Binary', () => {
  it('calculates decimal to binary', async () => {
    expect(decimalToBinary(10)).toMatchObject([...dec2bin(10)]);
  });

  it('should compose the binary test correctly', async () => {
    const url =
      'vz9KnJmEW_yuoj6uIG3_Vxn1cQLYo8t_3nVW-LaueLCkwWxYysUNhSZa1-aPq5kd0It_ldRHvidL0AUJQIOSH2_6HVnW-oW_3xOl6HrUsqV1EbSl7QMOmpDdSjltrX4yTNTkzCLf5XUR45Axb_odWdb6hb_vOqt9K9by9W6idbW';
    const decodedText = [...url].map((val) => dec2bin(DECIMAL[val]));
    const text = decodedText.reduce((acc, cur) => acc + cur);

    expect([...text]).toMatchObject(textToBinary(url));
  });
});
