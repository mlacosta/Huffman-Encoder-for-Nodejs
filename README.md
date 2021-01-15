# Huffman-Encoder-for-Nodejs
## Author: Mariano L. Acosta

# Description

# Installation

        npm install --save huffman-url-compressor

# Usage
        //create encoder

        let Encoder = createEncoder(train);

        //create a base64 encoded stream

        let encodedParam = encodeConfig(test.trim(),Encoder)
        
        //retrieve original from encoded param

        let decodConfig = decodeConfig(encodedParam,Encoder)

