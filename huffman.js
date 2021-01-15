// Huffman encoder for shorter urls
// Author: Mariano L. Acosta

const config = require('./config.js');

const { getFrequency, decodeConfig , encodeConfig, createEncoder } = require('./utils.js')

//get frequencies

let freqArr = getFrequency(config);


let Encoder = createEncoder(freqArr);

const test = `[SERVICE]
    flush 	1
    log_level info
[INPUT]
    name  	dummy
    dummy 	{"name": "Fluent Bit", "year": 2020, "color": "blue"}
    tag   	var.log.containers.0.log
[INPUT]
    Name  	dummy
    Dummy 	{"name": "Fluent Bit", "year": 2019, "color": "green"}
    Tag   	var.log.containers.1.log
[FILTER]
    name  	grep
    match 	*
    regex 	$color ^blue$
[OUTPUT]
    Name  	stdout
    Match 	*
    Format	json_lines
[OUTPUT]
    name              	azure_blob
    match             	*
    account_name      	HIDDEN
    shared_key        	HIDDEN
    path              	kubernetes/$color
    container_name    	logs
    auto_create_container on
    tls               	off
    blob_type         	appendblob`


//create encoded bitstream

let encodedParam = encodeConfig(test,Encoder)

console.log(encodedParam)

//decode 

console.log(decodeConfig(encodedParam,Encoder))


