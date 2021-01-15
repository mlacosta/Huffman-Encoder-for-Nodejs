// Huffman encoder for shorter urls
// Author: Mariano L. Acosta

const { train, test } = require('./dataset.js');
const { decodeConfig , encodeConfig, createEncoder } = require('./utils.js');

//create encoder

let Encoder = createEncoder(train);

//create encoded base64 stream

let encodedParam = encodeConfig(test.trim(),Encoder)

let buff = new Buffer(test);

console.log('original:\n');
console.log(buff.toString('base64'),'\n');

console.log('compressed:\n');
console.log(encodedParam,'\n');
//retrieve config from encoded param

let decodConfig = decodeConfig(encodedParam,Encoder)


console.log((1 - encodedParam.length/buff.toString('base64').length)*100);