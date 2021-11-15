import { DECIMAL } from './constants';
import { decimalToBinary } from './decimalToBinary';

export function textToBinary(content: string): ReturnType<typeof decimalToBinary> {
  return [...content].reduce((memo, val) => {
    return [...memo, ...decimalToBinary(DECIMAL[val])];
  }, [] as ReturnType<typeof decimalToBinary>);
};
