import { createEncoder } from '../src/createEncoder';
import { decodeContent } from '../src/decodeContent';
import { encodeContent } from '../src/encodeContent';
import { dataset1 } from '../__mocks__/dataset';

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

const encoder = createEncoder(dataset1);
describe('Encode Content', () => {
  it('should encode correctly the given information', async () => {
    const encodedContent = encodeContent(inputContent, encoder);
    expect(encodedContent).toMatchInlineSnapshot(
      '"vz9KnJmEW_yuoj6uIG3_Vxn1cQLYo8t_3nVW-LaueLCkwWxYysUNhSZa1-aPq5kd0It_ldRHvidL0AUJQIOSH2_6HVnW-oW_3xOl6HrUsqV1EbSl7QMOmpDdSjltrX4yTNTkzCLf5XUR45Axb_odWdb6hb_vOqt9K9by9W6idQ"'
    );
  });
});

describe('decode Content', () => {
  it('decodeContent', async () => {
    const encoder = createEncoder(dataset1);
    expect(
      decodeContent(
        'vz9KnJmEW_yuoj6uIG3_Vxn1cQLYo8t_3nVW-LaueLCkwWxYysUNhSZa1-aPq5kd0It_ldRHvidL0AUJQIOSH2_6HVnW-oW_3xOl6HrUsqV1EbSl7QMOmpDdSjltrX4yTNTkzCLf5XUR45Axb_odWdb6hb_vOqt9K9by9W6idQ',
        encoder
      )
    ).toMatchInlineSnapshot(`
      "[INPUT]
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
          path  output.txt"
    `);
  });
});
