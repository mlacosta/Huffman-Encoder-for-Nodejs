import { createEncoder, encodeContent, decodeContent } from '..';

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

describe('Encode Content', () => {
  it('should encode correctly the given information', async () => {
    const encodedContent = encodeContent(inputContent, encoder);
    expect(encodedContent).toMatchInlineSnapshot(
      '"undefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefined"'
    );
  });
});

xdescribe('Decoder', () => {
  it('should decode correctly the given information', async () => {
    const decodedContent = decodeContent(outputContent, encoder);

    expect(decodedContent).toMatchInlineSnapshot();
  });
});
