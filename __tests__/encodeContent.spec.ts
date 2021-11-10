import { createEncoder } from '../src/createEncoder';
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
      '"2280J3N0I2J041Mundefinedundefined133undefined0Eundefined9undefined033undefined1Eundefined4undefined1Mundefinedundefined133undefined1EundefinedBundefinedundefinedundefined5undefined24undefined1undefined1undefinedAundefined23undefinedundefinedundefinedundefinedVundefinedEundefined1B13undefinedundefinedCundefined8undefined2FundefinedCundefined1undefined25160DundefinedEundefined5undefined18undefined1undefined11undefinedAundefined3undefined0MundefinedAundefinedLundefined0undefinedCundefined6undefined5undefinedSundefined9undefined6undefinedundefinedundefinedundefined16undefined6undefined18undefinedundefined1Fundefined0K0Aundefined7undefined10undefined9undefined2undefined14undefined7undefined4undefinedundefinedFundefined23undefinedundefinedundefinedundefined9undefined6undefined1eundefinedjundefined1390undefined033undefinedundefinedundefined7undefinedundefined8undefined2undefined1Hundefined13B1AundefinedDundefined16undefinedEundefined1undefinedundefined1N6undefinedRundefinedUundefinedDundefinedFundefined6undefinedFundefinedJundefinedcundefinedbundefinedE1Mundefined6undefinedAundefinedDundefinedAundefined6undefined4undefined2undefined221Mundefined133undefinedundefined2Eundefined9undefined03undefinedundefined7undefined01undefined0Mundefined133undefinedundefined1undefined0Lundefined8undefinedDundefinedundefinedundefineda0Mundefinedundefined133undefined7undefined0LundefinedDundefinedundefined1Aundefined8undefined1N3C0Lundefined9undefined127undefined1"'
    );
  });
});
