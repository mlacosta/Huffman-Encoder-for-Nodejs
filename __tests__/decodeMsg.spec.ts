import { createEncoder } from '../src/createEncoder';
import { textToBinary } from '../src/textToBinary';
import { oldDecodeMsg } from '../src/decodeMsg';
import { dataset1 } from '../__mocks__/dataset';

const url =
  'vz9KnJmEW_yuoj6uIG3_Vxn1cQLYo8t_3nVW-LaueLCkwWxYysUNhSZa1-aPq5kd0It_ldRHvidL0AUJQIOSH2_6HVnW-oW_3xOl6HrUsqV1EbSl7QMOmpDdSjltrX4yTNTkzCLf5XUR45Axb_odWdb6hb_vOqt9K9by9W6idbW';

describe('decimal to Binary', () => {
  it('decodeMsg', async () => {
    const urlInBits = textToBinary(url).join('');
    const encoder = createEncoder(dataset1);
    expect(oldDecodeMsg(urlInBits, encoder)).toMatchInlineSnapshot(`
      "_lGqXZ+<>jK][Yx/Ofi28AFgn-13|6SIkd*	\\\\^BEM=oLhyH$,wu.sarev:%#7UbT9@W'}4{Ncmt
      PC\\"z)5V(?RDp       r  U aT K        o   c S t  iO         t  n    t  iY  2    h           a t     g t  rg[TY  gnt 2  [T
        p sS t  .| K        o   c S    i   b  e_ eUll  *             e  t a      c
                  i   b  e   
       bo o   c n  UD en1 mO  me   h  
            n% m  M K        o   c S- _  g        e  t a      c
                  a t     U    
          H 
         c a   "
    `);
  });
});
